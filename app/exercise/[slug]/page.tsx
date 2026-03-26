import { notFound } from "next/navigation";
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
      title={exercise.title}
      description={exercise.summary}
      userName={user.name}
      actions={<SignOutButton />}
    >
      <section className="space-y-4">
        <div className="rounded-[20px] border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-400">
          {lesson ? `${lesson.module} · ${lesson.title}` : "Ejercicio"} · {exercise.duration} · {status === "completed" ? "completado" : status === "in_progress" ? "en progreso" : "sin empezar"}
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
      </section>

      <MentorWidget
        context={{
          title: exercise.title,
          topic: lesson?.module ?? "Python",
          pageType: "exercise",
          exerciseTitle: exercise.title,
          codeSnippet: exercise.starterCode
        }}
      />
    </AppShell>
  );
}
