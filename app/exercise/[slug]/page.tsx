import { notFound } from "next/navigation";
import { Flag, Trophy } from "lucide-react";
import { requireAppUser } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { ExerciseWorkspace } from "@/components/exercise-workspace";
import { MentorWidget } from "@/components/mentor-widget";
import { SignOutButton } from "@/components/sign-out-button";
import { getExerciseBySlug, getExerciseStatus, getLessonBySlug, getNextLesson } from "@/lib/course";
import { getDraftForUser } from "@/lib/drafts";
import { getProgressForUser } from "@/lib/user-progress";

export default async function ExercisePage({
  params
}: {
  params: { slug: string };
}) {
  const user = await requireAppUser();
  const exercise = getExerciseBySlug(params.slug);

  if (!exercise) {
    notFound();
  }

  const progress = await getProgressForUser(user.id);
  const status = getExerciseStatus(progress, exercise.slug);
  const lesson = getLessonBySlug(exercise.lessonSlug);
  const nextLesson = lesson ? getNextLesson(lesson.slug) : null;
  const isFoundationsCapstone = exercise.moduleSlug === "foundations-capstone";
  const exerciseSections = [
    { href: "#desafio", label: "Desafío" },
    { href: "#workspace", label: "Workspace" },
    { href: "#feedback", label: "Feedback" },
    { href: "#mentor", label: "Mentor" },
    { href: "#siguiente-paso", label: "Siguiente paso" }
  ];
  const draft =
    exercise.responseFormat === "code"
      ? await getDraftForUser({
          userId: user.id,
          scope: "exercise",
          slug: exercise.slug
        })
      : null;

  return (
    <AppShell
      title={`Ejercicio: ${exercise.title}`}
      description={
        isFoundationsCapstone
          ? "Este ejercicio forma parte del cierre de fundamentos. Cuando lo completas, la etapa final de tu primera gran ruta de Python queda visible en tu cuenta."
          : "Los ejercicios ya forman parte del flujo real de progreso del producto y su finalización queda vinculada a tu cuenta."
      }
      userName={user.name}
      actions={<SignOutButton />}
    >
      <section className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="space-y-5">
          <div className="mission-grid rounded-[30px] border border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.1),transparent_28%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))] p-5 text-slate-100 shadow-soft">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Espacio de desafío</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-50">{exercise.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                  {lesson
                    ? `Estás aplicando lo aprendido en ${lesson.title}. Aquí importa construir, revisar y cerrar el checkpoint con una respuesta que se sostenga.`
                    : "Aquí importa construir, revisar y cerrar el checkpoint con una respuesta que se sostenga."}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm">
                  <div className="flex items-center gap-2 font-semibold text-slate-100">
                    <Flag className="h-4 w-4 text-brand-300" />
                    Estado
                  </div>
                  <p className="mt-2 text-slate-400">
                    {status === "completed" ? "Completado" : status === "in_progress" ? "En progreso" : "Listo para empezar"}
                  </p>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm">
                  <div className="flex items-center gap-2 font-semibold text-slate-100">
                    <Trophy className="h-4 w-4 text-brand-300" />
                    Recompensa
                  </div>
                  <p className="mt-2 text-slate-400">Este paso empuja tu ruta y deja avance visible.</p>
                </div>
              </div>
            </div>
            <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.03] px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Ruta dentro del ejercicio</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exerciseSections.map((section) => (
                  <a
                    key={section.href}
                    href={section.href}
                    className="rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:border-brand-400/15 hover:text-brand-200"
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <ExerciseWorkspace
            exercise={exercise}
            status={status}
            initialAnswer={draft?.content ?? (exercise.responseFormat === "code" ? exercise.starterCode : "")}
            restoredDraftUpdatedAt={draft?.updatedAt ?? null}
            lessonHref={lesson ? `/lesson/${lesson.slug}` : "/roadmap"}
            nextLessonHref={nextLesson ? `/lesson/${nextLesson.slug}` : null}
          />
        </div>
        <div id="mentor" className="xl:sticky xl:top-4 xl:self-start scroll-mt-24">
          <MentorWidget
            context={{
              title: exercise.title,
              topic: lesson?.module ?? "Python",
              pageType: "exercise",
              exerciseTitle: exercise.title,
              codeSnippet: exercise.starterCode
            }}
            compact
          />
        </div>
      </section>
    </AppShell>
  );
}
