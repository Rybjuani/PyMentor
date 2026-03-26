import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { ModuleProgressSummary, RoadmapModule } from "@/types";
import { ProgressBar } from "@/components/ui/progress-bar";

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
        ? "En curso"
        : isLocked
          ? "Bloqueado"
          : "Disponible";

  return (
    <article className="flex h-full flex-col justify-between rounded-[24px] border border-slate-800 bg-[linear-gradient(180deg,rgba(11,20,31,0.96),rgba(8,15,24,0.98))] p-5">
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-slate-300">
            {statusLabel}
          </span>
          <span className="text-xs font-semibold text-slate-500">{module.estimatedTime}</span>
        </div>

        <h3 className="mt-4 text-xl font-bold text-slate-50">{module.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{module.description}</p>

        <div className="mt-4 rounded-[18px] border border-slate-800 bg-slate-950/70 p-4">
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-semibold text-slate-100">
              {progress.completedLessons} de {progress.totalLessons} lecciones
            </span>
            <span className="text-slate-400">{progress.percent}%</span>
          </div>
          <ProgressBar value={progress.percent} className="mt-3" />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 text-sm">
        <div className="text-slate-500">{module.xp} XP</div>
        {isLocked ? (
          <div className="inline-flex items-center gap-2 text-slate-500">
            <Lock className="h-4 w-4" />
            Cierra el módulo anterior
          </div>
        ) : (
          <Link href={href} className="inline-flex items-center gap-2 font-semibold text-brand-300">
            {progress.status === "completed" ? "Revisar" : "Abrir"}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </article>
  );
}
