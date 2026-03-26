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
  const baseJourneyCompleted = hasCompletedCurrentBaseJourney(progress);

  return (
    <AppShell
      title="Ruta de aprendizaje"
      description="Una base de Python ordenada en tres rutas encadenadas: fundamentos, práctica útil y herramientas estructuradas."
      userName={user.name}
      actions={<SignOutButton />}
    >
      <Card className="rounded-[22px] border-brand-400/12 bg-[linear-gradient(180deg,rgba(12,23,35,0.97),rgba(8,16,26,0.98))] p-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Progreso general</p>
            <h2 className="mt-1.5 text-[1.7rem] font-bold text-slate-50">
              {overall.completed} de {overall.total} lecciones
            </h2>
          </div>
          <div className="rounded-[16px] border border-slate-800/70 bg-slate-950/60 px-3.5 py-2.5 text-sm text-slate-300">
            {completedModules} de {modules.length} módulos cerrados
          </div>
        </div>
        <ProgressBar value={overall.percent} className="mt-5" />
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-[16px] border border-slate-800/70 bg-slate-950/60 p-3.5 text-sm text-slate-300">
            <p className="font-semibold text-slate-100">Ruta 1</p>
            <p className="mt-2 text-slate-400">{foundationsModules.length} módulos de fundamentos y primer cierre formal.</p>
          </div>
          <div className="rounded-[16px] border border-slate-800/70 bg-slate-950/60 p-3.5 text-sm text-slate-300">
            <p className="font-semibold text-slate-100">Ruta 2</p>
            <p className="mt-2 text-slate-400">{secondTrackModules.length} módulos de utilidades, archivos e input.</p>
          </div>
          <div className="rounded-[16px] border border-slate-800/70 bg-slate-950/60 p-3.5 text-sm text-slate-300">
            <p className="font-semibold text-slate-100">Ruta 3</p>
            <p className="mt-2 text-slate-400">{thirdTrackModules.length} módulos de organización multiarchivo y cierre actual.</p>
          </div>
        </div>
        {baseJourneyCompleted ? (
          <div className="mt-4 rounded-[16px] border border-brand-400/14 bg-brand-500/10 p-3.5 text-sm text-brand-100">
            La base actual ya quedó cerrada. La ruta ahora funciona como historial útil para repasar y revisar proyectos.
          </div>
        ) : null}
      </Card>

      <RouteSection
        title="Ruta 1"
        subtitle="Fundamentos de Python"
        description="Variables, decisiones, bucles, funciones, estructuras de datos y primeros proyectos."
        modules={foundationsModules}
        progress={progress}
      />

      <RouteSection
        title="Ruta 2"
        subtitle="Python práctico 2"
        description="Archivos, organización simple, utilidades pequeñas y flujo de datos más útil."
        modules={secondTrackModules}
        progress={progress}
      />

      <RouteSection
        title="Ruta 3"
        subtitle="Herramientas estructuradas"
        description="Programas multiarchivo, reparto claro de responsabilidades y cierre de la base actual."
        modules={thirdTrackModules}
        progress={progress}
      />
    </AppShell>
  );
}

function RouteSection({
  title,
  subtitle,
  description,
  modules,
  progress
}: {
  title: string;
  subtitle: string;
  description: string;
  modules: ReturnType<typeof getAllModules>;
  progress: Awaited<ReturnType<typeof getProgressForUser>>;
}) {
  return (
    <section>
      <div className="mb-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">{title}</p>
        <h2 className="mt-1.5 text-[1.45rem] font-bold text-slate-50">{subtitle}</h2>
        <p className="mt-1.5 max-w-3xl text-sm leading-6 text-slate-400">{description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {modules.map((module) => {
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
    </section>
  );
}
