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
  getFoundationsModules,
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
  const foundationsModules = getFoundationsModules();
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
      ? "Revisar la ruta"
      : currentFocus?.type === "exercise"
        ? "Seguir ejercicio"
        : currentFocus?.lesson
          ? "Seguir lección"
          : "Abrir ruta";

  const achievementPreview = [
    {
      id: "first-lesson",
      title: "Primera lección completada",
      description: "Abriste la ruta con una primera victoria real.",
      state: overall.completed > 0 ? "earned" : "next"
    },
    {
      id: "foundations-finish",
      title: "Ruta 1 cerrada",
      description: "Terminaste la base de fundamentos.",
      state: foundationsCompleted ? "earned" : overall.completed > 0 ? "next" : "locked"
    },
    {
      id: "route2-finish",
      title: "Ruta 2 cerrada",
      description: "Convertiste la base en utilidades más útiles.",
      state: secondTrackCompleted ? "earned" : foundationsCompleted ? "next" : "locked"
    },
    {
      id: "base-finish",
      title: "Base actual completada",
      description: "Cerraste las tres rutas actuales.",
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
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <Card className="rounded-[26px] border-brand-400/15 bg-[linear-gradient(180deg,rgba(12,23,35,0.98),rgba(8,16,26,0.98))] p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Progreso general</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-50">{overall.percent}%</h2>
              <p className="mt-2 text-sm text-slate-400">
                {overall.completed} de {overall.total} lecciones completadas
              </p>
            </div>
            <div className="rounded-[18px] border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">
              {completedModules} de {modules.length} módulos cerrados
            </div>
          </div>

          <ProgressBar value={overall.percent} className="mt-5" />

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-[18px] border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Dónde estás</p>
              <p className="mt-2 text-sm font-semibold text-slate-100">
                {baseJourneyCompleted
                  ? "Base actual cerrada"
                  : thirdTrackFocus
                    ? "Ruta 3 activa"
                    : secondTrackFocus
                      ? "Ruta 2 activa"
                      : foundationsCompleted
                        ? "Fundamentos cerrados"
                        : "Ruta 1 activa"}
              </p>
            </div>
            <div className="rounded-[18px] border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Módulo actual</p>
              <p className="mt-2 text-sm font-semibold text-slate-100">
                {currentModule?.title ?? (baseJourneyCompleted ? "Sin módulo pendiente" : "Listo para empezar")}
              </p>
            </div>
            <div className="rounded-[18px] border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Siguiente acción</p>
              <p className="mt-2 text-sm font-semibold text-slate-100">
                {currentFocus?.type === "exercise" ? "Resolver ejercicio" : currentFocus?.lesson ? "Continuar lección" : "Abrir ruta"}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
              Ver ruta completa
            </Link>
          </div>
        </Card>

        <div className="grid gap-6">
          <Card className="rounded-[26px] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/12 text-amber-300">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Racha</p>
                <p className="text-2xl font-bold text-slate-50">
                  {user.currentStreak} {user.currentStreak === 1 ? "día" : "días"}
                </p>
              </div>
            </div>
          </Card>

          <Card className="rounded-[26px] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/12 text-emerald-300">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Logros visibles</p>
                <p className="text-2xl font-bold text-slate-50">
                  {achievementPreview.filter((item) => item.state === "earned").length}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <Card className="rounded-[26px] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">En foco</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-50">
            {baseJourneyCompleted
              ? "La base actual ya está cerrada"
              : currentFocus?.type === "exercise"
                ? currentFocus.exercise.title
                : currentFocus?.lesson?.title ?? "Todo listo para empezar"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            {baseJourneyCompleted
              ? "Ya cerraste fundamentos, práctica útil y herramientas estructuradas. Este punto ya sirve para repasar capstones y revisar proyectos con más criterio."
              : currentFocus?.type === "exercise"
                ? currentFocus.exercise.summary
                : currentFocus?.lesson?.summary ?? "Abre la ruta y empieza el primer paso."}
          </p>
          {currentModule && currentModuleProgress ? (
            <div className="mt-4 rounded-[18px] border border-brand-400/15 bg-brand-500/10 p-4 text-sm text-brand-100">
              {currentModule.title}: {currentModuleProgress.completedLessons} de {currentModuleProgress.totalLessons} lecciones
            </div>
          ) : null}
        </Card>

        <Card className="rounded-[26px] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Rutas cerradas</p>
          <div className="mt-4 space-y-3">
            <div className="rounded-[18px] border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">
              Ruta 1: {foundationsCompleted ? "cerrada" : `${foundationsModules.length} módulos en progreso`}
            </div>
            <div className="rounded-[18px] border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">
              Ruta 2: {secondTrackCompleted ? "cerrada" : "pendiente o en progreso"}
            </div>
            <div className="rounded-[18px] border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">
              Ruta 3: {baseJourneyCompleted ? "cerrada" : thirdTrackFocus ? "en progreso" : "pendiente"}
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <Card className="rounded-[26px] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Actividad reciente</p>
          <div className="mt-4 space-y-3">
            {recentActivity.length > 0 ? (
              recentActivity.map((item) => (
                <div key={item.id} className="rounded-[18px] border border-slate-800 bg-slate-950/70 px-4 py-3">
                  <p className="text-sm font-semibold text-slate-100">{item.description}</p>
                  <p className="mt-1 text-xs text-slate-500">{formatActivityDate(item.createdAt)}</p>
                </div>
              ))
            ) : (
              <div className="rounded-[18px] border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">
                Tu actividad empieza con la primera lección y su ejercicio vinculado.
              </div>
            )}
          </div>
        </Card>

        <Card className="rounded-[26px] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Logros</p>
          <div className="mt-4 grid gap-3">
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
