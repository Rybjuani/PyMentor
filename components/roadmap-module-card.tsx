import Link from "next/link";
import { Lock, Sparkles } from "lucide-react";
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
    <Card className="flex h-full flex-col justify-between rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,251,255,1))]">
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
        <h3 className="mt-4 text-xl font-bold text-slate-900">{module.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{module.description}</p>

        <div className="mt-5 rounded-[22px] bg-slate-50 p-4">
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-semibold text-slate-900">
              {progress.completedLessons} of {progress.totalLessons} lessons complete
            </span>
            <span className="text-slate-500">{progress.percent}%</span>
          </div>
          <ProgressBar value={progress.percent} className="mt-3" />
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between gap-4">
        <div className="text-sm text-slate-500">
          <div>{module.lessonCount} lessons</div>
          <div>{module.estimatedTime}</div>
          <div>{module.xp} XP</div>
        </div>
        {isLocked ? (
          <span className="text-sm font-semibold text-slate-400">Finish the previous module first</span>
        ) : (
          <Link href={href} className="text-sm font-semibold text-brand-600">
            Open module
          </Link>
        )}
      </div>
    </Card>
  );
}
