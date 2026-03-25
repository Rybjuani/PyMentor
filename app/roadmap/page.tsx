import { requireAppUser } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { RoadmapModuleCard } from "@/components/roadmap-module-card";
import { SignOutButton } from "@/components/sign-out-button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { getAllModules, getLessonsByModuleSlug, getModuleProgress, getOverallLessonProgress, isModuleUnlocked } from "@/lib/course";
import { getProgressForUser } from "@/lib/user-progress";

export default async function RoadmapPage() {
  const user = await requireAppUser();
  const progress = await getProgressForUser(user.id);
  const modules = getAllModules();
  const overall = getOverallLessonProgress(progress);

  return (
    <AppShell
      title="Python learning roadmap"
      description="Your progression map: visible unlocks, account-backed completion, and one clear Python path that keeps pulling you forward."
      userName={user.name}
      actions={<SignOutButton />}
    >
      <Card className="rounded-[30px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.12),transparent_28%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">Overall roadmap progress</p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-50">
              {overall.completed} of {overall.total} lessons completed
            </h2>
          </div>
          <div className="rounded-[24px] border border-brand-400/15 bg-brand-500/10 px-4 py-3 text-sm font-semibold text-brand-100">
            Progress sync online
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
