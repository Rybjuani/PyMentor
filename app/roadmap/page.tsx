import { requireUser } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { RoadmapModuleCard } from "@/components/roadmap-module-card";
import { SignOutButton } from "@/components/sign-out-button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { getAllModules, getLessonsByModuleSlug, getModuleProgress, getOverallLessonProgress, isModuleUnlocked } from "@/lib/course";
import { getProgressForUser } from "@/lib/user-progress";

export default async function RoadmapPage() {
  const user = await requireUser();
  const progress = await getProgressForUser(user.id);
  const modules = getAllModules();
  const overall = getOverallLessonProgress(progress);

  return (
    <AppShell
      title="Python learning roadmap"
      description="A clear beginner path with real lesson order, protected account-backed progress, and completion states that carry across the product."
      userName={user.name}
      actions={<SignOutButton />}
    >
      <Card className="rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,251,255,1))]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-500">Overall roadmap progress</p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
              {overall.completed} of {overall.total} lessons completed
            </h2>
          </div>
          <div className="rounded-[24px] bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">
            Saved to your account
          </div>
        </div>
        <ProgressBar value={overall.percent} className="mt-5" />
      </Card>

      <section className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
        {modules.map((module) => {
          const moduleProgress = getModuleProgress(progress, module.slug);
          const firstLesson = getLessonsByModuleSlug(module.slug)[0];

          return (
            <RoadmapModuleCard
              key={module.slug}
              module={module}
              progress={moduleProgress}
              isLocked={!isModuleUnlocked(progress, module.slug)}
              href={firstLesson ? `/lesson/${firstLesson.slug}` : "/roadmap"}
            />
          );
        })}
      </section>
    </AppShell>
  );
}
