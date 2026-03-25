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
      description="Los ejercicios ya forman parte del flujo real de progreso del producto y su finalización queda vinculada a tu cuenta."
      userName={user.name}
      actions={<SignOutButton />}
    >
      <section className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <ExerciseWorkspace
          exercise={exercise}
          status={status}
          initialAnswer={draft?.content ?? (exercise.responseFormat === "code" ? exercise.starterCode : "")}
          restoredDraftUpdatedAt={draft?.updatedAt ?? null}
          lessonHref={lesson ? `/lesson/${lesson.slug}` : "/roadmap"}
          nextLessonHref={nextLesson ? `/lesson/${nextLesson.slug}` : null}
        />
        <div>
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
