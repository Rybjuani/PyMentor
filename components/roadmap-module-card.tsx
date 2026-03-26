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
      ? "Completado"
      : progress.status === "in_progress"
        ? "En progreso"
        : isLocked
          ? "Bloqueado"
          : "Listo para empezar";

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
          {module.slug === "foundations-capstone" ? "Hito final" : `Etapa ${module.order}`}
        </div>
        <h3 className="mt-3 text-xl font-bold text-slate-50">{module.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">{module.description}</p>

        <div className="mt-5 rounded-[22px] border border-slate-800 bg-slate-950/70 p-4">
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-semibold text-slate-100">
              {progress.completedLessons} de {progress.totalLessons} lecciones completas
            </span>
            <span className="text-brand-200">{progress.percent}%</span>
          </div>
          <ProgressBar value={progress.percent} className="mt-3" />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="text-sm text-slate-400">
          <div>{module.lessonCount} lecciones</div>
          <div>{module.estimatedTime}</div>
          <div>{module.xp} XP</div>
        </div>
        {isLocked ? (
          <span className="text-sm font-semibold text-slate-500">Termina primero el módulo anterior</span>
        ) : (
          <Link href={href} className="text-sm font-semibold text-brand-300">
            {module.slug === "foundations-capstone"
              ? "Abrir cierre de fundamentos"
              : progress.status === "completed"
                ? "Revisar módulo"
                : "Abrir módulo"}
          </Link>
        )}
      </div>
    </Card>
  );
}
