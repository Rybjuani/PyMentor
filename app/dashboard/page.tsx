import Link from "next/link";
import { ArrowRight, CalendarCheck2, Flame, Radar, Sparkles, Swords, Target, Trophy, Zap } from "lucide-react";
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
  getOverallLessonProgress
  ,
  getSecondTrackModules,
  hasCompletedFoundationsTrack,
  isModuleInSecondTrack
} from "@/lib/course";
import { achievements } from "@/lib/mock-data";
import { getProgressForUser } from "@/lib/user-progress";

export default async function DashboardPage() {
  const user = await requireAppUser();
  const progress = await getProgressForUser(user.id);
  const overall = getOverallLessonProgress(progress);
  const modules = getAllModules();
  const foundationsModules = getFoundationsModules();
  const secondTrackModules = getSecondTrackModules();
  const currentFocus = getCurrentLearningFocus(progress);
  const currentModule =
    currentFocus?.lesson.moduleSlug ? getModuleBySlug(currentFocus.lesson.moduleSlug) : null;
  const currentModuleProgress = currentModule
    ? getModuleProgress(progress, currentModule.slug)
    : null;
  const recentActivity = await getRecentActivityForUser(user.id);
  const weeklyCompletedSteps = overall.completed === 0 ? 0 : Math.min(overall.completed, 2);
  const earnedAchievements = achievements.filter((achievement) => achievement.state === "earned").length;
  const foundationsCompleted = hasCompletedFoundationsTrack(progress);
  const completedModules = modules.filter(
    (module) => getModuleProgress(progress, module.slug).status === "completed"
  ).length;
  const foundationsLessonTotal = foundationsModules.reduce((sum, module) => sum + module.lessonCount, 0);
  const secondTrackFocus = Boolean(currentFocus?.lesson?.moduleSlug && isModuleInSecondTrack(currentFocus.lesson.moduleSlug));
  const secondTrackFirstModule = secondTrackModules[0] ?? null;

  const continueHref =
    currentFocus?.type === "exercise"
      ? `/exercise/${currentFocus.exercise.slug}`
      : currentFocus?.lesson
        ? `/lesson/${currentFocus.lesson.slug}`
        : "/roadmap";

  const continueLabel =
    foundationsCompleted && secondTrackFocus
      ? "Entrar a la nueva etapa"
      : currentFocus?.type === "exercise"
      ? "Continuar ejercicio"
      : currentFocus?.lesson
        ? "Continuar lección"
        : "Ver ruta";

  return (
    <AppShell
      title={`Qué bueno verte, ${user.name ?? "estudiante"}`}
      description={
        foundationsCompleted && secondTrackFocus
          ? "Terminaste la primera gran etapa y ya tienes desbloqueada la siguiente: una ruta más práctica, todavía guiada y pensada para programas un poco más útiles."
          : foundationsCompleted
            ? "Terminaste la primera gran etapa de PyMentor. Tu cuenta ya guarda una base real de Python y el recorrido completo quedó visible para volver a repasarlo cuando quieras."
          : "Tu cuenta ya sigue un camino real de progreso. Mantén tu racha viva, supera un checkpoint más y deja que la ruta te empuje hacia adelante."
      }
      userName={user.name}
      actions={<SignOutButton />}
    >
      <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="mission-grid rounded-[30px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.14),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(78,203,255,0.12),transparent_22%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))]">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
              Señal de progreso
            </p>
            <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
              Núcleo activo
            </div>
          </div>
          <div className="mt-4 flex items-end justify-between gap-4">
            <div>
              <div className="text-4xl font-extrabold text-slate-50">{overall.percent}%</div>
              <div className="mt-2 text-sm text-slate-400">
                {overall.completed} de {overall.total} lecciones completadas
              </div>
            </div>
            <div className="rounded-[24px] border border-brand-400/15 bg-brand-500/10 px-4 py-3 text-sm font-semibold text-brand-100 shadow-[0_0_28px_rgba(29,211,139,0.1)]">
              {overall.completed * 40} XP
            </div>
          </div>
          <ProgressBar value={overall.percent} className="mt-5" />
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Ruta activa</p>
              <p className="mt-2 text-lg font-bold text-slate-50">
                {secondTrackFocus ? "Python práctico 2" : foundationsCompleted ? "Ruta 1 cerrada" : "Fundamentos de Python"}
              </p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Checkpoint actual</p>
              <p className="mt-2 text-lg font-bold text-slate-50">
                {currentModule?.title ?? (foundationsCompleted ? "Ruta completada" : "Inicio")}
              </p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Estado</p>
              <p className="mt-2 text-lg font-bold text-slate-50">
                {overall.completed === 0 ? "Despegue" : foundationsCompleted && secondTrackFocus ? "Nuevo nivel" : "En avance"}
              </p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-[22px] border border-slate-800 bg-slate-950/70 px-4 py-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                <Target className="h-4 w-4 text-brand-300" />
                Objetivo de esta semana
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {overall.completed === 0
                  ? "Completa tu primera lección y su ejercicio vinculado esta semana"
                  : "Completa 2 pasos de aprendizaje enfocados esta semana"}
              </p>
            </div>
            <div className="rounded-[22px] border border-slate-800 bg-slate-950/70 px-4 py-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                <CalendarCheck2 className="h-4 w-4 text-brand-300" />
                Progreso semanal
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {weeklyCompletedSteps} de 2 pasos completados
              </p>
            </div>
          </div>
        </Card>

        <div className="grid gap-5 sm:grid-cols-2">
          <Card className="rounded-[30px]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/12 text-amber-300">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Racha actual</p>
                <p className="text-2xl font-extrabold text-slate-50">
                  {user.currentStreak} {user.currentStreak === 1 ? "día" : "días"}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {user.currentStreak > 0
                    ? "Un pequeño paso de aprendizaje la mantiene viva"
                    : "Tu primera acción de aprendizaje va a iniciar tu racha"}
                </p>
              </div>
            </div>
          </Card>
          <Card className="rounded-[30px]">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/12 text-emerald-300">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Logros desbloqueados</p>
                <p className="text-2xl font-extrabold text-slate-50">{earnedAchievements}</p>
                <p className="mt-1 text-sm text-slate-400">
                  {foundationsCompleted && secondTrackFocus
                    ? "Tu base quedó cerrada y ya abriste una nueva etapa dentro de tu cuenta"
                    : foundationsCompleted
                    ? "Ya cerraste una primera gran etapa y quedó guardada en tu cuenta"
                    : "Tu progreso y tus hitos ya quedan vinculados a tu cuenta"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <Card className="mission-grid rounded-[30px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(78,203,255,0.08),transparent_24%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))]">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
              Seguir aprendiendo
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/15 bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-100">
              <Radar className="h-3.5 w-3.5" />
              Misión en curso
            </div>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-slate-50">
            {foundationsCompleted && secondTrackFocus
              ? `Nueva etapa desbloqueada: ${secondTrackFirstModule?.title ?? "Python práctico 2"}`
              : foundationsCompleted
              ? "Terminaste tu primera gran ruta de Python"
              : currentFocus?.type === "exercise"
              ? currentFocus.exercise.title
              : currentFocus?.lesson.title ?? "Tu ruta ya está lista"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            {foundationsCompleted && secondTrackFocus
                ? "Ahora el foco cambia: ya no estás cerrando bases, sino aprendiendo a construir programas un poco más prácticos y útiles, empezando por guardar información fuera del programa."
              : foundationsCompleted
                ? "Ya completaste todas las lecciones de este primer recorrido. Este es un buen momento para repasar el capstone, revisar tus proyectos y notar cuánto terreno ya cubriste."
              : overall.completed === 0
                ? "Estás al comienzo de la ruta. Empieza con la primera lección y luego usa el ejercicio vinculado para afianzar la idea."
                : currentFocus?.type === "exercise"
                ? currentFocus.exercise.summary
                : currentFocus?.lesson.summary ??
                  "Abre la ruta para elegir tu próxima lección."}
          </p>
          {currentModule && currentModuleProgress ? (
            <div className="mt-5 rounded-[24px] border border-brand-400/15 bg-brand-500/10 p-4 text-sm text-brand-100">
              Módulo actual: {currentModule.title} · {currentModuleProgress.completedLessons} de{" "}
              {currentModuleProgress.totalLessons} lecciones completas
            </div>
          ) : foundationsCompleted ? (
            <div className="mt-5 rounded-[24px] border border-brand-400/15 bg-brand-500/10 p-4 text-sm text-brand-100">
              {secondTrackFocus
                ? `Primera etapa cerrada: ${foundationsModules.length} módulos y ${foundationsLessonTotal} lecciones completadas. Ahora empieza una ruta más práctica.`
                : `Ruta cerrada: ${completedModules} de ${modules.length} módulos completados en esta primera gran etapa.`}
            </div>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-3">
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
              Abrir ruta
            </Link>
          </div>
        </Card>

        <Card className="rounded-[30px]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
            Actividad reciente
          </p>
          <div className="mt-5 space-y-3">
            {recentActivity.length > 0 ? (
              recentActivity.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[20px] border border-slate-800 bg-slate-950/70 px-4 py-4 text-sm text-slate-300"
                >
                  <p className="font-semibold text-slate-100">{item.description}</p>
                  <p className="mt-1 text-slate-500">{formatActivityDate(item.createdAt)}</p>
                </div>
              ))
            ) : (
              <div className="rounded-[20px] border border-slate-800 bg-slate-950/70 px-4 py-4 text-sm text-slate-300">
                <p className="font-semibold text-slate-100">Tu actividad empieza aquí</p>
                <p className="mt-1">
                  Termina tu bienvenida y tu primera lección para empezar a construir impulso visible.
                </p>
              </div>
            )}
          </div>
        </Card>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="mission-grid rounded-[30px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.12),transparent_28%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))]">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-brand-300" />
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
              Próximo paso sugerido
            </p>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-50">
            {foundationsCompleted && secondTrackFocus
              ? "Dar el primer paso del nivel siguiente"
              : foundationsCompleted
              ? "Cierre de fundamentos conseguido"
              : currentFocus?.type === "exercise"
              ? "Termina el ejercicio vinculado"
              : overall.completed === 0
                ? "Da tu primer paso tranquilo en Python"
                : "Completa la siguiente lección de tu ruta"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            {foundationsCompleted && secondTrackFocus
              ? "Ya cuentas con la base. El objetivo ahora es usarla en programas que guardan información, se organizan mejor y se sienten más cercanos a algo útil."
              : foundationsCompleted
              ? "Tu siguiente movimiento ya no es desbloquear fundamentos, sino decidir qué quieres repasar, reforzar o convertir en proyecto propio."
              : overall.completed === 0
              ? "Empieza con una lección corta, usa el mentor cuando te trabes y deja que tu primera finalización desbloquee impulso."
              : "Cada finalización actualiza tu cuenta, tu ruta y el siguiente checkpoint que te está esperando."}
          </p>
          <div className="mt-5 rounded-[24px] border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">
            <div className="flex items-center gap-2 font-semibold text-slate-100">
              <Zap className="h-4 w-4 text-brand-300" />
              Energía para un paso más
            </div>
            <p className="mt-2 leading-6">
              {foundationsCompleted && secondTrackFocus
                ? "La nueva etapa no empieza desde cero: empieza sobre una base que ya terminaste. Eso te permite avanzar con más criterio y algo más de autonomía."
                : foundationsCompleted
                ? "Lo importante ahora es reconocer el cierre: ya no estás empezando desde cero. Tienes una primera base terminada y visible."
                : "PyMentor está diseñado para que el siguiente movimiento siempre sea claro, lo bastante pequeño como para empezar y satisfactorio al terminar."}
            </p>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                <Swords className="h-4 w-4 text-brand-300" />
                Sensación de avance
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {foundationsCompleted ? "La primera etapa ya quedó cerrada y visible en tu cuenta." : "Cada cierre de lección mueve la ruta de forma real y visible."}
              </p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                <Zap className="h-4 w-4 text-brand-300" />
                Momento actual
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {secondTrackFocus ? "Estás entrando a una fase más práctica y más útil de Python." : "Tu enfoque sigue siendo avanzar sin perder claridad ni ritmo."}
              </p>
            </div>
          </div>
        </Card>

        <Card className="rounded-[30px]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Logros</p>
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

function formatActivityDate(date: Date) {
  return new Intl.DateTimeFormat("es-AR", {
    month: "short",
    day: "numeric"
  }).format(date);
}
