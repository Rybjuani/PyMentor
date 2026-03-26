import Link from "next/link";
import { ArrowUpRight, Lock, Sparkles, Swords, Zap } from "lucide-react";
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

  const stageLabel =
    module.slug === "foundations-capstone"
      ? "Ruta 1 · Cierre"
      : module.slug === "basic-files"
        ? "Ruta 2 · Apertura"
        : module.slug === "simple-multi-file-programs"
        ? "Ruta 3 · Apertura"
        : module.slug === "practical-multi-file-utilities"
          ? "Ruta 3 · Utilidad real"
        : module.slug === "coordinated-multi-file-tools"
          ? "Ruta 3 · Coordinación"
        : module.slug === "route3-practical-projects"
          ? "Ruta 3 · Proyectos"
        : module.slug === "route2-practical-projects"
          ? "Ruta 2 · Proyectos"
          : module.slug === "route2-capstone"
            ? "Ruta 2 · Cierre"
        : module.slug === "small-organized-utilities"
          ? "Ruta 2 · Utilidad real"
          : `Etapa ${module.order}`;

  return (
    <Card className="mission-grid flex h-full flex-col justify-between rounded-[30px] border-slate-800 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.08),transparent_28%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))]">
      <div>
        <div className="flex items-center justify-between gap-3">
          <Badge tone={progress.status === "not_started" && isLocked ? "warning" : statusTone[progress.status]}>
            {statusLabel}
          </Badge>
          {isLocked ? (
            <Lock className="h-4 w-4 text-slate-400" />
          ) : (
            <div className="status-orb rounded-full">
              <Sparkles className="h-4 w-4 text-brand-500" />
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            <Zap className="h-3.5 w-3.5 text-brand-300" />
            {stageLabel}
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            {module.xp} XP
          </span>
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
          <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1">{module.lessonCount} lecciones</span>
            <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1">{module.estimatedTime}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="text-sm text-slate-400">
          <div className="flex items-center gap-2 text-slate-300">
            <Swords className="h-4 w-4 text-brand-300" />
            {progress.status === "completed"
              ? "Checkpoint cerrado"
              : isLocked
                ? "Aún bloqueado"
                : "Checkpoint disponible"}
          </div>
          <div className="mt-1">{module.xp} XP de ruta</div>
        </div>
        {isLocked ? (
          <span className="text-sm font-semibold text-slate-500">Termina primero el módulo anterior</span>
        ) : (
          <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300">
            {module.slug === "foundations-capstone"
              ? "Abrir cierre de fundamentos"
              : module.slug === "route2-capstone"
                ? "Abrir cierre de Ruta 2"
                : module.slug === "simple-multi-file-programs"
                  ? "Abrir Ruta 3"
                : module.slug === "practical-multi-file-utilities"
                  ? "Abrir módulo práctico"
                : module.slug === "coordinated-multi-file-tools"
                  ? "Abrir módulo coordinado"
                : module.slug === "route3-practical-projects"
                  ? "Abrir proyectos"
                : progress.status === "completed"
                  ? "Revisar módulo"
                  : "Abrir módulo"}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </Card>
  );
}
