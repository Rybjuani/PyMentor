import Link from "next/link";
import { Lock, Sparkles, Zap } from "lucide-react";
import { ModuleProgressSummary, RoadmapModule } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";

const statusTone = {
  completed: "success",
  in_progress: "brand",
  not_started: "neutral"
} as const;

export function RoadmapModuleCard({
  module,
  progress,
  isLocked,
  href
}: {
  module: RoadmapModule;
  progress: ModuleProgressSummary;
  isLocked: boolean;
  href: string;
}) {
  const statusLabel =
    progress.status === "completed"
      ? "Completed"
      : progress.status === "in_progress"
        ? "In progress"
        : isLocked
          ? "Locked"
          : "Ready to start";

  return (
    <Card className="flex h-full flex-col justify-between rounded-[30px] border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.08),transparent_28%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))]">
      <div>
        <div className="flex items-center justify-between gap-3">
          <Badge tone={progress.status === "not_started" && isLocked ? "warning" : statusTone[progress.status]}>
            {statusLabel}
          </Badge>
          {isLocked ? (
            <Lock className="h-4 w-4 text-slate-400" />
          ) : (
            <Sparkles className="h-4 w-4 text-brand-500" />
          )}
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          <Zap className="h-3.5 w-3.5 text-brand-300" />
          Stage {module.order}
        </div>
        <h3 className="mt-3 text-xl font-bold text-slate-50">{module.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">{module.description}</p>

        <div className="mt-5 rounded-[22px] border border-slate-800 bg-slate-950/70 p-4">
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-semibold text-slate-100">
              {progress.completedLessons} of {progress.totalLessons} lessons complete
            </span>
            <span className="text-brand-200">{progress.percent}%</span>
          </div>
          <ProgressBar value={progress.percent} className="mt-3" />
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between gap-4">
        <div className="text-sm text-slate-400">
          <div>{module.lessonCount} lessons</div>
          <div>{module.estimatedTime}</div>
          <div>{module.xp} XP</div>
        </div>
        {isLocked ? (
          <span className="text-sm font-semibold text-slate-500">Finish the previous module first</span>
        ) : (
          <Link href={href} className="text-sm font-semibold text-brand-300">
            Open module
          </Link>
        )}
      </div>
    </Card>
  );
}
