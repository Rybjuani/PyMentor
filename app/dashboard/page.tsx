import Link from "next/link";
import { ArrowRight, CalendarCheck2, Flame, Sparkles, Target, Trophy } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { AchievementChip } from "@/components/achievement-chip";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { achievements, dashboardStats, recentActivity, roadmapModules } from "@/lib/mock-data";

export default function DashboardPage() {
  const currentModule = roadmapModules.find(
    (module) => module.title === dashboardStats.currentModule
  );

  return (
    <AppShell
      title={`Welcome back, ${dashboardStats.learnerName}`}
      description="You’re making steady progress. Keep the pace gentle, finish one focused lesson, and use the mentor whenever something feels unclear."
    >
      <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,251,255,1))]">
          <p className="text-sm font-semibold text-slate-500">Learning progress</p>
          <div className="mt-4 flex items-end justify-between gap-4">
            <div>
              <div className="text-4xl font-extrabold text-slate-900">
                {dashboardStats.progressPercent}%
              </div>
              <div className="mt-2 text-sm text-slate-600">
                2 modules completed, 1 active module right now
              </div>
            </div>
            <div className="rounded-[24px] bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">
              {dashboardStats.totalXp} XP
            </div>
          </div>
          <ProgressBar value={dashboardStats.progressPercent} className="mt-5" />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-[22px] bg-slate-50 px-4 py-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Target className="h-4 w-4 text-brand-600" />
                This week’s goal
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{dashboardStats.weeklyGoal}</p>
            </div>
            <div className="rounded-[22px] bg-slate-50 px-4 py-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <CalendarCheck2 className="h-4 w-4 text-brand-600" />
                Weekly progress
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {dashboardStats.weeklyProgress} of {dashboardStats.weeklyTarget} lessons done
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
                <p className="text-2xl font-extrabold text-slate-900">{dashboardStats.streakDays} days</p>
                <p className="mt-1 text-sm text-slate-500">Keep it alive with one short session today</p>
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
                <p className="text-2xl font-extrabold text-slate-900">2 earned</p>
                <p className="mt-1 text-sm text-slate-500">Your next badge is one bug fix away</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <Card className="rounded-[30px]">
          <p className="text-sm font-semibold text-slate-500">Current module</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            {currentModule?.title ?? "Conditionals"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">{currentModule?.description}</p>
          <div className="mt-5 rounded-[24px] bg-brand-50 p-4 text-sm text-brand-700">
            Small win: understand how Python decides between two paths, then fix a conditional bug with support from the mentor.
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/lesson/${dashboardStats.nextLessonSlug}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white"
            >
              Continue lesson <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/exercise/fix-the-conditional"
              className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-800"
            >
              Practice debugging
            </Link>
          </div>
        </Card>

        <Card className="rounded-[30px]">
          <p className="text-sm font-semibold text-slate-500">Recent activity</p>
          <div className="mt-5 space-y-3">
            {recentActivity.map((item, index) => (
              <div key={item} className="rounded-[20px] bg-slate-50 px-4 py-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Step {index + 1}</p>
                <p className="mt-1">{item}</p>
              </div>
            ))}
            <div className="rounded-[20px] border border-dashed border-slate-300 bg-white px-4 py-4 text-sm text-slate-500">
              Your next session will appear here after you finish the current lesson.
            </div>
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
            Finish your conditionals lesson
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            You are close to unlocking loops. One short lesson plus one bug-fixing challenge will keep momentum high without feeling heavy.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Why now</p>
              <p className="mt-2 leading-6">Conditionals are the foundation for loops, functions, and real program flow.</p>
            </div>
            <div className="rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Best next move</p>
              <p className="mt-2 leading-6">Read the lesson, ask one mentor question, then try the debugging exercise.</p>
            </div>
          </div>
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
