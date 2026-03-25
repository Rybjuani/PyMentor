import { AppShell } from "@/components/app-shell";
import { RoadmapModuleCard } from "@/components/roadmap-module-card";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { roadmapModules } from "@/lib/mock-data";

export default function RoadmapPage() {
  return (
    <AppShell
      title="Python learning roadmap"
      description="A clear beginner path with one concept at a time. Locked modules prevent overload, maintain order, and help beginners stay focused."
    >
      <Card className="rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,251,255,1))]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-500">Overall roadmap progress</p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900">2 of 8 modules completed</h2>
          </div>
          <div className="rounded-[24px] bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">
            Beginner pace, no rush
          </div>
        </div>
        <ProgressBar value={28} className="mt-5" />
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <div className="rounded-[22px] bg-slate-50 px-4 py-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Completed</p>
            <p className="mt-2 leading-6">You already understand programming basics and variables.</p>
          </div>
          <div className="rounded-[22px] bg-slate-50 px-4 py-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">In progress</p>
            <p className="mt-2 leading-6">Conditionals are teaching you how programs make decisions.</p>
          </div>
          <div className="rounded-[22px] bg-slate-50 px-4 py-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Coming soon</p>
            <p className="mt-2 leading-6">Loops unlock after you finish the current module.</p>
          </div>
        </div>
      </Card>

      <section className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
        {roadmapModules.map((module) => (
          <RoadmapModuleCard key={module.slug} module={module} />
        ))}
      </section>
    </AppShell>
  );
}
