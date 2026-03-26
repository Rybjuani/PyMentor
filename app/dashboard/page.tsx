import Link from "next/link";
import { ArrowRight, Flame, Trophy } from "lucide-react";
import { getRecentActivityForUser } from "@/lib/activity";
import { requireAppUser } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { AchievementChip } from "@/components/achievement-chip";
import { SignOutButton } from "@/components/sign-out-button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import {
  getAllModules,
  getCurrentLearningFocus,
  getModuleBySlug,
  getModuleProgress,
  getOverallLessonProgress,
  hasCompletedCurrentBaseJourney,
  hasCompletedFoundationsTrack,
  hasCompletedSecondTrack,
  isModuleInSecondTrack,
  isModuleInThirdTrack
} from "@/lib/course";
import { getProgressForUser } from "@/lib/user-progress";

export default async function DashboardPage() {
  const user = await requireAppUser();
  const progress = await getProgressForUser(user.id);
  const overall = getOverallLessonProgress(progress);
  const modules = getAllModules();
  const currentFocus = getCurrentLearningFocus(progress);
  const currentModule =
    currentFocus?.lesson.moduleSlug ? getModuleBySlug(currentFocus.lesson.moduleSlug) : null;
  const currentModuleProgress = currentModule ? getModuleProgress(progress, currentModule.slug) : null;
  const recentActivity = await getRecentActivityForUser(user.id);
  const foundationsCompleted = hasCompletedFoundationsTrack(progress);
  const secondTrackCompleted = hasCompletedSecondTrack(progress);
  const baseJourneyCompleted = hasCompletedCurrentBaseJourney(progress);
  const completedModules = modules.filter(
    (module) => getModuleProgress(progress, module.slug).status === "completed"
  ).length;
  const secondTrackFocus = Boolean(currentFocus?.lesson?.moduleSlug && isModuleInSecondTrack(currentFocus.lesson.moduleSlug));
  const thirdTrackFocus = Boolean(currentFocus?.lesson?.moduleSlug && isModuleInThirdTrack(currentFocus.lesson.moduleSlug));

  const continueHref =
    baseJourneyCompleted
      ? "/roadmap"
      : currentFocus?.type === "exercise"
        ? `/exercise/${currentFocus.exercise.slug}`
        : currentFocus?.lesson
          ? `/lesson/${currentFocus.lesson.slug}`
          : "/roadmap";

  const continueLabel =
    baseJourneyCompleted
      ? "Revisar módulos"
      : currentFocus?.type === "exercise"
        ? "Seguir ejercicio"
        : currentFocus?.lesson
          ? "Seguir lección"
          : "Abrir módulos";

  const achievementPreview = [
    {
      id: "first-lesson",
      title: "Primera lección completada",
      description: "Abriste la base con una primera victoria real.",
      state: overall.completed > 0 ? "earned" : "next"
    },
    {
      id: "foundations-finish",
      title: "Módulo 1 cerrado",
      description: "Terminaste la base inicial de fundamentos útiles.",
      state: foundationsCompleted ? "earned" : overall.completed > 0 ? "next" : "locked"
    },
    {
      id: "route2-finish",
      title: "Módulo 2 cerrado",
      description: "Convertiste la base en utilidades que ya trabajan con datos.",
      state: secondTrackCompleted ? "earned" : foundationsCompleted ? "next" : "locked"
    },
    {
      id: "base-finish",
      title: "Base actual completada",
      description: "Cerraste los tres módulos actuales.",
      state: baseJourneyCompleted ? "earned" : secondTrackCompleted ? "next" : "locked"
    }
  ] as const;

  return (
    <AppShell
      title={`Panel de ${user.name ?? "tu cuenta"}`}
      description="Tu progreso, tu siguiente paso y el estado real de la base que ya llevas construida."
      userName={user.name}
      actions={<SignOutButton />}
    >
      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_280px]">
        <Card className="rounded-[22px] border-brand-400/12 bg-[linear-gradient(180deg,rgba(12,23,35,0.97),rgba(8,16,26,0.98))] p-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Progreso general</p>
              <h2 className="mt-1.5 text-[1.85rem] font-bold text-slate-50">{overall.percent}%</h2>
              <p className="mt-1.5 text-sm text-slate-400">
                {overall.completed} de {overall.total} lecciones completadas
              </p>
            </div>
            <div className="rounded-[16px] border border-slate-800/70 bg-slate-950/60 px-3.5 py-2.5 text-sm text-slate-300">
              {completedModules} de {modules.length} módulos cerrados
            </div>
          </div>

          <ProgressBar value={overall.percent} className="mt-4" />

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-[16px] border border-slate-800/70 bg-slate-950/60 p-3.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Dónde estás</p>
              <p className="mt-2 text-sm font-semibold text-slate-100">
                {baseJourneyCompleted
                  ? "Base actual cerrada"
                  : thirdTrackFocus
                    ? "Módulo 3 activo"
                    : secondTrackFocus
                      ? "Módulo 2 activo"
                      : foundationsCompleted
                        ? "Módulo 1 cerrado"
                        : "Módulo 1 activo"}
              </p>
            </div>
            <div className="rounded-[16px] border border-slate-800/70 bg-slate-950/60 p-3.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Módulo actual</p>
              <p className="mt-2 text-sm font-semibold text-slate-100">
                {currentModule?.title ?? (baseJourneyCompleted ? "Sin módulo pendiente" : "Listo para empezar")}
              </p>
            </div>
            <div className="rounded-[16px] border border-slate-800/70 bg-slate-950/60 p-3.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Siguiente acción</p>
              <p className="mt-2 text-sm font-semibold text-slate-100">
                {currentFocus?.type === "exercise" ? "Resolver ejercicio" : currentFocus?.lesson ? "Continuar lección" : "Abrir módulos"}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <Link
              href={continueHref}
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#0CB971,#2de6a4)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:brightness-110"
            >
              {continueLabel} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/roadmap"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 ring-1 ring-slate-700"
            >
              Ver módulos
            </Link>
          </div>
        </Card>

        <div className="grid gap-3">
          <Card className="rounded-[20px] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-[16px] bg-amber-500/12 text-amber-300">
                <Flame className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Racha</p>
                <p className="text-xl font-bold text-slate-50">
                  {user.currentStreak} {user.currentStreak === 1 ? "día" : "días"}
                </p>
              </div>
            </div>
          </Card>

          <Card className="rounded-[20px] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-[16px] bg-emerald-500/12 text-emerald-300">
                <Trophy className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Logros visibles</p>
                <p className="text-xl font-bold text-slate-50">
                  {achievementPreview.filter((item) => item.state === "earned").length}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_280px]">
        <Card className="rounded-[22px] p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">En foco</p>
          <h2 className="mt-1.5 text-[1.5rem] font-bold text-slate-50">
            {baseJourneyCompleted
              ? "La base actual ya está cerrada"
              : currentFocus?.type === "exercise"
                ? currentFocus.exercise.title
                : currentFocus?.lesson?.title ?? "Todo listo para empezar"}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {baseJourneyCompleted
              ? "Ya cerraste fundamentos útiles, datos con intención y herramientas estructuradas. Este punto ya sirve para repasar capstones y revisar proyectos con más criterio."
              : currentFocus?.type === "exercise"
                ? currentFocus.exercise.summary
                : currentFocus?.lesson?.summary ?? "Abre los módulos y empieza el primer paso."}
          </p>
          {currentModule && currentModuleProgress ? (
            <div className="mt-3 rounded-[16px] border border-brand-400/14 bg-brand-500/10 p-3.5 text-sm text-brand-100">
              {currentModule.title}: {currentModuleProgress.completedLessons} de {currentModuleProgress.totalLessons} lecciones
            </div>
          ) : null}
        </Card>

        <Card className="rounded-[20px] p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Estado por módulo</p>
          <div className="mt-3 space-y-2.5">
            <div className="rounded-[16px] border border-slate-800/70 bg-slate-950/60 px-3.5 py-2.5 text-sm text-slate-300">
              Módulo 1: {foundationsCompleted ? "cerrado" : "en progreso"}
            </div>
            <div className="rounded-[16px] border border-slate-800/70 bg-slate-950/60 px-3.5 py-2.5 text-sm text-slate-300">
              Módulo 2: {secondTrackCompleted ? "cerrado" : secondTrackFocus ? "en progreso" : "pendiente"}
            </div>
            <div className="rounded-[16px] border border-slate-800/70 bg-slate-950/60 px-3.5 py-2.5 text-sm text-slate-300">
              Módulo 3: {baseJourneyCompleted ? "cerrado" : thirdTrackFocus ? "en progreso" : "pendiente"}
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_280px]">
        <Card className="rounded-[22px] p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Actividad reciente</p>
          <div className="mt-3 space-y-2.5">
            {recentActivity.length > 0 ? (
              recentActivity.map((item) => (
                <div key={item.id} className="rounded-[16px] border border-slate-800/70 bg-slate-950/60 px-3.5 py-2.5">
                  <p className="text-sm font-semibold text-slate-100">{item.description}</p>
                  <p className="mt-1 text-xs text-slate-500">{formatActivityDate(item.createdAt)}</p>
                </div>
              ))
            ) : (
              <div className="rounded-[16px] border border-slate-800/70 bg-slate-950/60 px-3.5 py-2.5 text-sm text-slate-300">
                Tu actividad empieza con la primera lección y su ejercicio vinculado.
              </div>
            )}
          </div>
        </Card>

        <Card className="rounded-[20px] p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Logros</p>
          <div className="mt-3 grid gap-2.5">
            {achievementPreview.map((achievement) => (
              <AchievementChip key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </Card>
      </section>
    </AppShell>
  );
}

function formatActivityDate(date: Date) {
  return new Intl.DateTimeFormat("es-AR", {
    month: "short",
    day: "numeric"
  }).format(date);
}
