import { notFound } from "next/navigation";
import { Flag } from "lucide-react";
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
  const isRoute3Capstone = exercise.moduleSlug === "route3-capstone";
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
      description={exercise.summary}
      userName={user.name}
      actions={<SignOutButton />}
    >
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-6">
          <div className="rounded-[26px] border border-brand-400/15 bg-[linear-gradient(180deg,rgba(12,23,35,0.98),rgba(8,16,26,0.98))] p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-300">
                  <Flag className="h-3.5 w-3.5 text-brand-300" />
                  {status === "completed" ? "Completado" : status === "in_progress" ? "En progreso" : "Listo para empezar"}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {lesson
                    ? `Aplicás lo visto en ${lesson.title}. El objetivo es resolver algo concreto y sostenerlo con una respuesta clara.`
                    : "Resuelve el problema con una respuesta clara y comprobable."}
                </p>
              </div>
              <div className="rounded-full border border-slate-800 bg-slate-950/70 px-3 py-1 text-sm font-semibold text-slate-300">
                {exercise.duration}
              </div>
            </div>
          </div>

          <div className="xl:hidden">
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

          <ExerciseWorkspace
            exercise={exercise}
            status={status}
            initialAnswer={draft?.content ?? (exercise.responseFormat === "code" ? exercise.starterCode : "")}
            restoredDraftUpdatedAt={draft?.updatedAt ?? null}
            lessonHref={lesson ? `/lesson/${lesson.slug}` : "/roadmap"}
            nextLessonHref={nextLesson ? `/lesson/${nextLesson.slug}` : null}
            isFoundationsCapstone={isFoundationsCapstone}
            isRoute3Capstone={isRoute3Capstone}
          />
        </div>

        <div className="hidden xl:block xl:sticky xl:top-4 xl:self-start">
          <MentorWidget
            context={{
              title: exercise.title,
              topic: lesson?.module ?? "Python",
              pageType: "exercise",
              exerciseTitle: exercise.title,
              codeSnippet: exercise.starterCode
            }}
          />
        </div>
      </section>
    </AppShell>
  );
}
