import Link from "next/link";
import { ArrowRight, CalendarCheck2, Flame, Sparkles, Target, Trophy } from "lucide-react";
import { requireUser } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { AchievementChip } from "@/components/achievement-chip";
import { SignOutButton } from "@/components/sign-out-button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import {
  buildRecentActivity,
  getCurrentLearningFocus,
  getModuleBySlug,
  getModuleProgress,
  getOverallLessonProgress
} from "@/lib/course";
import { achievements } from "@/lib/mock-data";
import { getProgressForUser } from "@/lib/user-progress";

export default async function DashboardPage() {
  const user = await requireUser();
  const progress = await getProgressForUser(user.id);
  const overall = getOverallLessonProgress(progress);
  const currentFocus = getCurrentLearningFocus(progress);
  const currentModule =
    currentFocus?.lesson.moduleSlug ? getModuleBySlug(currentFocus.lesson.moduleSlug) : null;
  const currentModuleProgress = currentModule
    ? getModuleProgress(progress, currentModule.slug)
    : null;
  const recentActivity = buildRecentActivity(progress);

  const continueHref =
    currentFocus?.type === "exercise"
      ? `/exercise/${currentFocus.exercise.slug}`
      : currentFocus?.lesson
        ? `/lesson/${currentFocus.lesson.slug}`
        : "/roadmap";

  const continueLabel =
    currentFocus?.type === "exercise"
      ? "Continue exercise"
      : currentFocus?.lesson
        ? "Continue lesson"
        : "View roadmap";

  return (
    <AppShell
      title={`Welcome back, ${user.name ?? "Learner"}`}
      description="Your roadmap progress now belongs to your account, so your learning path follows you across sessions."
      userName={user.name}
      actions={<SignOutButton />}
    >
      <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,251,255,1))]">
          <p className="text-sm font-semibold text-slate-500">Learning progress</p>
          <div className="mt-4 flex items-end justify-between gap-4">
            <div>
              <div className="text-4xl font-extrabold text-slate-900">{overall.percent}%</div>
              <div className="mt-2 text-sm text-slate-600">
                {overall.completed} of {overall.total} lessons completed
              </div>
            </div>
            <div className="rounded-[24px] bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">
              {overall.completed * 40} XP
            </div>
          </div>
          <ProgressBar value={overall.percent} className="mt-5" />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-[22px] bg-slate-50 px-4 py-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Target className="h-4 w-4 text-brand-600" />
                This week’s goal
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Finish 2 focused learning steps this week
              </p>
            </div>
            <div className="rounded-[22px] bg-slate-50 px-4 py-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <CalendarCheck2 className="h-4 w-4 text-brand-600" />
                Weekly progress
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {Math.min(overall.completed, 2)} of 2 steps completed
              </p>
            </div>
          </div>
        </Card>

        <div className="grid gap-5 sm:grid-cols-2">
          <Card className="rounded-[30px]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Current streak</p>
                <p className="text-2xl font-extrabold text-slate-900">3 days</p>
                <p className="mt-1 text-sm text-slate-500">One small step keeps it alive</p>
              </div>
            </div>
          </Card>
          <Card className="rounded-[30px]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Achievements</p>
                <p className="text-2xl font-extrabold text-slate-900">{achievements.length}</p>
                <p className="mt-1 text-sm text-slate-500">Progress now stays with your account</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <Card className="rounded-[30px]">
          <p className="text-sm font-semibold text-slate-500">Continue learning</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            {currentFocus?.type === "exercise"
              ? currentFocus.exercise.title
              : currentFocus?.lesson.title ?? "Your roadmap is ready"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {currentFocus?.type === "exercise"
              ? currentFocus.exercise.summary
              : currentFocus?.lesson.summary ??
                "Open the roadmap to choose your next lesson."}
          </p>
          {currentModule && currentModuleProgress ? (
            <div className="mt-5 rounded-[24px] bg-brand-50 p-4 text-sm text-brand-700">
              Current module: {currentModule.title} · {currentModuleProgress.completedLessons} of{" "}
              {currentModuleProgress.totalLessons} lessons complete
            </div>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={continueHref}
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white"
            >
              {continueLabel} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-800"
            >
              Open roadmap
            </Link>
          </div>
        </Card>

        <Card className="rounded-[30px]">
          <p className="text-sm font-semibold text-slate-500">Recent activity</p>
          <div className="mt-5 space-y-3">
            {recentActivity.map((item, index) => (
              <div key={item} className="rounded-[20px] bg-slate-50 px-4 py-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Update {index + 1}</p>
                <p className="mt-1">{item}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-[30px] bg-[linear-gradient(135deg,rgba(243,248,255,1),rgba(255,255,255,1))]">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-brand-500" />
            <p className="text-sm font-semibold text-slate-500">Suggested next step</p>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">
            {currentFocus?.type === "exercise"
              ? "Finish the linked exercise"
              : "Complete the next lesson in your roadmap"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Your lesson and exercise completions are now saved to your account, so the continue-learning flow remains consistent.
          </p>
        </Card>

        <Card className="rounded-[30px]">
          <p className="text-sm font-semibold text-slate-500">Achievements</p>
          <div className="mt-5 grid gap-3">
            {achievements.map((achievement) => (
              <AchievementChip key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </Card>
      </section>
    </AppShell>
  );
}
