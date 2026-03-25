import Link from "next/link";
import { ArrowRight, CalendarCheck2, Flame, Sparkles, Target, Trophy, Zap } from "lucide-react";
import { getRecentActivityForUser } from "@/lib/activity";
import { requireAppUser } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { AchievementChip } from "@/components/achievement-chip";
import { SignOutButton } from "@/components/sign-out-button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import {
  getCurrentLearningFocus,
  getModuleBySlug,
  getModuleProgress,
  getOverallLessonProgress
} from "@/lib/course";
import { achievements } from "@/lib/mock-data";
import { getProgressForUser } from "@/lib/user-progress";

export default async function DashboardPage() {
  const user = await requireAppUser();
  const progress = await getProgressForUser(user.id);
  const overall = getOverallLessonProgress(progress);
  const currentFocus = getCurrentLearningFocus(progress);
  const currentModule =
    currentFocus?.lesson.moduleSlug ? getModuleBySlug(currentFocus.lesson.moduleSlug) : null;
  const currentModuleProgress = currentModule
    ? getModuleProgress(progress, currentModule.slug)
    : null;
  const recentActivity = await getRecentActivityForUser(user.id);
  const weeklyCompletedSteps = overall.completed === 0 ? 0 : Math.min(overall.completed, 2);

  const continueHref =
    currentFocus?.type === "exercise"
      ? `/exercise/${currentFocus.exercise.slug}`
      : currentFocus?.lesson
        ? `/lesson/${currentFocus.lesson.slug}`
        : "/roadmap";

  const continueLabel =
    currentFocus?.type === "exercise"
      ? "Continuar ejercicio"
      : currentFocus?.lesson
        ? "Continuar lección"
        : "Ver ruta";

  return (
    <AppShell
      title={`Qué bueno verte, ${user.name ?? "estudiante"}`}
      description="Tu cuenta ya sigue un camino real de progreso. Mantén tu racha viva, supera un checkpoint más y deja que la ruta te empuje hacia adelante."
      userName={user.name}
      actions={<SignOutButton />}
    >
      <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-[30px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.14),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(78,203,255,0.12),transparent_22%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">
            Señal de progreso
          </p>
          <div className="mt-4 flex items-end justify-between gap-4">
            <div>
              <div className="text-4xl font-extrabold text-slate-50">{overall.percent}%</div>
              <div className="mt-2 text-sm text-slate-400">
                {overall.completed} de {overall.total} lecciones completadas
              </div>
            </div>
            <div className="rounded-[24px] border border-brand-400/15 bg-brand-500/10 px-4 py-3 text-sm font-semibold text-brand-100">
              {overall.completed * 40} XP
            </div>
          </div>
          <ProgressBar value={overall.percent} className="mt-5" />
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
                <p className="text-2xl font-extrabold text-slate-50">{achievements.length}</p>
                <p className="mt-1 text-sm text-slate-400">Tu progreso ahora queda guardado en tu cuenta</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <Card className="rounded-[30px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(78,203,255,0.08),transparent_24%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
            Seguir aprendiendo
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-50">
            {currentFocus?.type === "exercise"
              ? currentFocus.exercise.title
              : currentFocus?.lesson.title ?? "Your roadmap is ready"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            {overall.completed === 0
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
          ) : null}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={continueHref}
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#0CB971,#2de6a4)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow"
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
        <Card className="rounded-[30px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.12),transparent_28%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))]">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-brand-300" />
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
              Próximo paso sugerido
            </p>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-50">
            {currentFocus?.type === "exercise"
              ? "Termina el ejercicio vinculado"
              : overall.completed === 0
                ? "Da tu primer paso tranquilo en Python"
                : "Completa la siguiente lección de tu ruta"}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            {overall.completed === 0
              ? "Empieza con una lección corta, usa el mentor cuando te trabes y deja que tu primera finalización desbloquee impulso."
              : "Cada finalización actualiza tu cuenta, tu ruta y el siguiente checkpoint que te está esperando."}
          </p>
          <div className="mt-5 rounded-[24px] border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">
            <div className="flex items-center gap-2 font-semibold text-slate-100">
              <Zap className="h-4 w-4 text-brand-300" />
              Energía para un paso más
            </div>
            <p className="mt-2 leading-6">
              PyMentor está diseñado para que el siguiente movimiento siempre sea claro, lo bastante pequeño como para empezar y satisfactorio al terminar.
            </p>
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
