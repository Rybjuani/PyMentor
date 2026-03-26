import { requireAppUser } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { RoadmapModuleCard } from "@/components/roadmap-module-card";
import { SignOutButton } from "@/components/sign-out-button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import {
  getAllModules,
  getFoundationsModules,
  getLessonsByModuleSlug,
  getModuleProgress,
  getOverallLessonProgress,
  getSecondTrackModules,
  hasCompletedFoundationsTrack,
  isModuleUnlocked
} from "@/lib/course";
import { getProgressForUser } from "@/lib/user-progress";

export default async function RoadmapPage() {
  const user = await requireAppUser();
  const progress = await getProgressForUser(user.id);
  const modules = getAllModules();
  const foundationsModules = getFoundationsModules();
  const secondTrackModules = getSecondTrackModules();
  const overall = getOverallLessonProgress(progress);
  const completedModules = modules.filter(
    (module) => getModuleProgress(progress, module.slug).status === "completed"
  ).length;
  const foundationsCompleted = hasCompletedFoundationsTrack(progress);

  return (
    <AppShell
      title="Ruta de aprendizaje de Python"
      description={
        foundationsCompleted
          ? "Cerraste la primera gran ruta de PyMentor. Aquí queda visible todo el camino completado y el punto exacto donde terminaste esta etapa."
          : "Tu mapa de progreso: desbloqueos visibles, finalización vinculada a tu cuenta y un camino claro de Python que te sigue empujando hacia adelante."
      }
      userName={user.name}
      actions={<SignOutButton />}
    >
      <Card className="rounded-[30px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.12),transparent_28%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">Progreso general</p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-50">
              {overall.completed} de {overall.total} lecciones completadas
            </h2>
          </div>
          <div className="rounded-[24px] border border-brand-400/15 bg-brand-500/10 px-4 py-3 text-sm font-semibold text-brand-100">
            Progreso guardado en tu cuenta
          </div>
        </div>
        <ProgressBar value={overall.percent} className="mt-5" />
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <div className="rounded-[22px] border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">
            <p className="font-semibold text-slate-100">{completedModules} de {modules.length} módulos completos</p>
            <p className="mt-2 leading-6 text-slate-400">
              {foundationsCompleted
                ? "Toda la primera ruta quedó cerrada. Ya tienes una base real y visible dentro de PyMentor."
                : "Cada módulo cerrado fortalece la sensación de avance y desbloquea el siguiente tramo de la ruta."}
            </p>
          </div>
          <div className="rounded-[22px] border border-brand-400/15 bg-brand-500/10 p-4 text-sm text-brand-100">
            <p className="font-semibold text-brand-200">
              {foundationsCompleted ? "Etapa completada" : "Siguiente checkpoint"}
            </p>
            <p className="mt-2 leading-6">
              {foundationsCompleted
                ? "Tu cierre de fundamentos ya forma parte de la ruta. Puedes volver a cualquier módulo para repasar o reforzar confianza."
                : "El siguiente módulo abierto marca el punto más útil para continuar sin perder el hilo del recorrido."}
            </p>
          </div>
        </div>
      </Card>

      <section className="space-y-10">
        <div>
          <div className="mb-5 rounded-[26px] border border-slate-800 bg-slate-950/70 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Ruta 1</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-50">Fundamentos de Python</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
              Aquí vive la primera gran etapa de PyMentor: desde empezar completamente desde cero hasta cerrar fundamentos con proyectos y capstone.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
            {foundationsModules.map((module) => {
              const moduleProgress = getModuleProgress(progress, module.slug);
              const firstLesson = getLessonsByModuleSlug(module.slug)[0];

              return (
                <RoadmapModuleCard
                  key={module.slug}
                  module={module}
                  progress={moduleProgress}
                  isLocked={!isModuleUnlocked(progress, module.slug)}
                  href={firstLesson ? `/lesson/${firstLesson.slug}` : "/roadmap"}
                />
              );
            })}
          </div>
        </div>

        <div>
          <div className="mb-5 rounded-[26px] border border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(78,203,255,0.08),transparent_28%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Ruta 2</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-50">Python práctico 2</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
              {foundationsCompleted
                ? "Esta nueva etapa arranca sobre una base ya cerrada. El foco ahora pasa a programas más útiles, mejor organizados y con contacto más claro con tareas del mundo real."
                : "Esta segunda gran etapa se desbloquea cuando cierres la primera ruta completa. Va a abrir una versión más práctica y un poco más autónoma del aprendizaje."}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
            {secondTrackModules.map((module) => {
              const moduleProgress = getModuleProgress(progress, module.slug);
              const firstLesson = getLessonsByModuleSlug(module.slug)[0];

              return (
                <RoadmapModuleCard
                  key={module.slug}
                  module={module}
                  progress={moduleProgress}
                  isLocked={!isModuleUnlocked(progress, module.slug)}
                  href={firstLesson ? `/lesson/${firstLesson.slug}` : "/roadmap"}
                />
              );
            })}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
