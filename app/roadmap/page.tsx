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
  getThirdTrackModules,
  hasCompletedCurrentBaseJourney,
  hasCompletedFoundationsTrack,
  hasCompletedSecondTrack,
  hasCompletedThirdTrack,
  isModuleUnlocked
} from "@/lib/course";
import { getProgressForUser } from "@/lib/user-progress";

export default async function RoadmapPage() {
  const user = await requireAppUser();
  const progress = await getProgressForUser(user.id);
  const modules = getAllModules();
  const foundationsModules = getFoundationsModules();
  const secondTrackModules = getSecondTrackModules();
  const thirdTrackModules = getThirdTrackModules();
  const overall = getOverallLessonProgress(progress);
  const completedModules = modules.filter(
    (module) => getModuleProgress(progress, module.slug).status === "completed"
  ).length;
  const foundationsCompleted = hasCompletedFoundationsTrack(progress);
  const secondTrackCompleted = hasCompletedSecondTrack(progress);
  const thirdTrackCompleted = hasCompletedThirdTrack(progress);
  const baseJourneyCompleted = hasCompletedCurrentBaseJourney(progress);

  return (
    <AppShell
      title="Ruta de aprendizaje de Python"
      description={
        baseJourneyCompleted
          ? "Aquí ya se leen tres etapas con intención clara y cierre formal: Fundamentos, Python práctico 2 y Herramientas estructuradas. El recorrido base actual ya aparece como una ruta completa, no como una suma de módulos, y tiene una meta actual claramente cerrada."
        : thirdTrackModules.length > 0
          ? "Aquí ya se leen tres etapas con intención clara: Fundamentos, Python práctico 2 y una nueva Ruta 3 que abre el siguiente nivel sin romper el cierre de las rutas anteriores."
        : foundationsCompleted
          ? "Cerraste la primera gran ruta de PyMentor y abriste una segunda etapa práctica. Aquí queda visible todo el camino completado y el punto exacto donde cambió el tipo de aprendizaje."
          : "Tu mapa de progreso: desbloqueos visibles, finalización vinculada a tu cuenta y un camino claro de Python que te sigue empujando hacia adelante."
      }
      userName={user.name}
      actions={<SignOutButton />}
    >
      <Card className="mission-grid rounded-[30px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.12),transparent_28%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))]">
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
              {thirdTrackModules.length > 0
                ? baseJourneyCompleted
                  ? "Las tres rutas actuales ya quedaron cerradas. El recorrido base de PyMentor se ve como una experiencia completa, con cierres claros y etapas bien diferenciadas."
                  : "Las dos primeras rutas ya quedaron cerradas y la tercera ya aparece como una nueva fase visible, con un foco más estructurado y más cercano a herramientas reales."
                : foundationsCompleted
                ? "Toda la primera ruta quedó cerrada y la segunda ya aparece como una etapa práctica distinta dentro de PyMentor."
                : "Cada módulo cerrado fortalece la sensación de avance y desbloquea el siguiente tramo de la ruta."}
            </p>
          </div>
          <div className="rounded-[22px] border border-brand-400/15 bg-brand-500/10 p-4 text-sm text-brand-100">
            <p className="font-semibold text-brand-200">
              {baseJourneyCompleted ? "Base actual cerrada" : thirdTrackModules.length > 0 ? "Ruta 3 abierta" : foundationsCompleted ? "Cambio de etapa" : "Siguiente checkpoint"}
            </p>
            <p className="mt-2 leading-6">
              {baseJourneyCompleted
                ? "La tercera etapa ya no aparece como apertura: ahora también tiene cierre propio y convierte el recorrido actual en una base completa, sólida, usable y visible en la cuenta."
                : thirdTrackModules.length > 0
                ? "La siguiente gran etapa ya no es una promesa vacía: Ruta 3 aparece como apertura real y deja claro que el recorrido sigue creciendo por fases, no por módulos sueltos."
                : foundationsCompleted
                ? "Tu cierre de fundamentos ya forma parte de la ruta y la segunda etapa aparece como continuación intencional, no como una lista suelta de módulos."
                : "El siguiente módulo abierto marca el punto más útil para continuar sin perder el hilo del recorrido."}
            </p>
          </div>
        </div>
        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Ruta 1</p>
            <p className="mt-2 text-lg font-bold text-slate-50">{foundationsModules.length} módulos</p>
            <p className="mt-2 leading-6 text-slate-400">Base cerrada y visible desde cero hasta capstone.</p>
          </div>
          <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Ruta 2</p>
            <p className="mt-2 text-lg font-bold text-slate-50">{secondTrackModules.length} módulos</p>
            <p className="mt-2 leading-6 text-slate-400">Tramo práctico para programas más útiles y más ordenados.</p>
          </div>
          <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Ruta 3</p>
            <p className="mt-2 text-lg font-bold text-slate-50">{thirdTrackModules.length} módulos</p>
            <p className="mt-2 leading-6 text-slate-400">
              {thirdTrackCompleted
                ? "Herramientas estructuradas ya cerró con su propio capstone y deja visible el final del aprendizaje base actual."
                : "Herramientas más estructuradas, con programas repartidos en varios archivos simples y un archivo principal más claro."}
            </p>
          </div>
        </div>
      </Card>

      <section className="space-y-10">
        <div>
          <div className="mission-grid mb-5 rounded-[26px] border border-slate-800 bg-slate-950/70 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Ruta 1</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-50">Fundamentos de Python</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
              Aquí vive la primera gran etapa de PyMentor: desde empezar completamente desde cero hasta cerrar fundamentos con proyectos y capstone.
            </p>
            {foundationsCompleted ? (
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-400/15 bg-brand-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-100">
                Ruta 1 cerrada
              </div>
            ) : null}
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
          <div className="mission-grid mb-5 rounded-[26px] border border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(78,203,255,0.08),transparent_28%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Ruta 2</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-50">Python práctico 2</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
              {secondTrackCompleted
                ? "Esta segunda etapa ya quedó cerrada como un tramo práctico completo: archivos, organización, utilidades, consulta, actualización y proyectos de cierre propios."
                : foundationsCompleted
                ? "Esta nueva etapa arranca sobre una base ya cerrada. El foco ahora pasa a programas más útiles, mejor organizados y con contacto más claro con tareas del mundo real."
                : "Esta segunda gran etapa se desbloquea cuando cierres la primera ruta completa. Va a abrir una versión más práctica y un poco más autónoma del aprendizaje."}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-400/15 bg-brand-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-100">
              {secondTrackCompleted ? "Ruta 2 cerrada" : "Ruta de utilidad real"}
            </div>
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

        <div>
          <div className="mission-grid mb-5 rounded-[26px] border border-cyan-400/15 bg-[radial-gradient(circle_at_top_left,rgba(78,203,255,0.12),transparent_28%),linear-gradient(180deg,rgba(12,20,34,0.98),rgba(7,14,26,0.98))] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Ruta 3</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-50">Herramientas estructuradas</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
              {thirdTrackCompleted
                ? "La tercera etapa ya quedó cerrada como un tramo completo de herramientas estructuradas: programas multiarchivo simples, utilidades más coordinadas, proyectos prácticos y un cierre final que también marca el fin del aprendizaje base actual."
                : "Esta tercera etapa arranca justo después del cierre práctico de Ruta 2. El foco ya no es solo construir utilidades útiles, sino repartirlas mejor para que se lean como programas más reales, más claros y más fáciles de hacer crecer."}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100">
              {thirdTrackCompleted ? "Ruta 3 cerrada" : "Ruta 3 abierta"}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
            {thirdTrackModules.map((module) => {
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

        <Card className="rounded-[30px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.08),transparent_26%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Panorama general</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-50">
            {baseJourneyCompleted
              ? "Tres etapas completas, aprendizaje base actual cerrado"
            : thirdTrackModules.length > 0
              ? "Dos etapas cerradas, tercera etapa ya abierta"
              : foundationsCompleted
                ? "Primera etapa cerrada, segunda etapa activa"
                : "Primera etapa en construcción"}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
            {baseJourneyCompleted
              ? "PyMentor ya se siente como un producto de tres rutas encadenadas y completas: una base fuerte, una etapa práctica cerrada y una tercera etapa estructurada también cerrada. La experiencia actual ya tiene una línea de llegada clara y no necesita fingir contenido que todavía no existe."
            : thirdTrackModules.length > 0
              ? "PyMentor ya se siente como un producto de etapas encadenadas: una base fuerte, una ruta práctica cerrada y una tercera apertura que eleva la organización del código sin saltar todavía a complejidad dura."
              : foundationsCompleted
                ? "El mapa ya no se lee como una acumulación de módulos. Se entiende una primera etapa cerrada y una segunda etapa práctica que toma el relevo con otra intención."
                : "La primera etapa sigue empujando el recorrido. Cada cierre mueve la cuenta y desbloquea el siguiente tramo de forma visible."}
          </p>
          {baseJourneyCompleted ? (
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300">
                <p className="font-semibold text-slate-100">Fundamentos cerrados</p>
                <p className="mt-2 leading-6 text-slate-400">Variables, condicionales, bucles, funciones y primera confianza real con Python.</p>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300">
                <p className="font-semibold text-slate-100">Práctica útil cerrada</p>
                <p className="mt-2 leading-6 text-slate-400">Archivos, organización, consulta, actualización y herramientas pequeñas con más sentido práctico.</p>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300">
                <p className="font-semibold text-slate-100">Estructura cerrada</p>
                <p className="mt-2 leading-6 text-slate-400">Programas multiarchivo simples, coordinación más clara y utilidades más reales como cierre del recorrido base.</p>
              </div>
            </div>
          ) : null}
        </Card>
      </section>
    </AppShell>
  );
}
