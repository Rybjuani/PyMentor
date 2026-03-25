import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { ExerciseWorkspace } from "@/components/exercise-workspace";
import { MentorWidget } from "@/components/mentor-widget";
import { getExerciseBySlug, getExerciseStatus, getLessonBySlug, getNextLesson, getProgressForRequest } from "@/lib/course";

export default function ExercisePage({
  params
}: {
  params: { slug: string };
}) {
  const exercise = getExerciseBySlug(params.slug);

  if (!exercise) {
    notFound();
  }

  const progress = getProgressForRequest();
  const status = getExerciseStatus(progress, exercise.slug);
  const lesson = getLessonBySlug(exercise.lessonSlug);
  const nextLesson = lesson ? getNextLesson(lesson.slug) : null;

  return (
    <AppShell
      title={`Exercise: ${exercise.title}`}
      description="Exercises are now part of the product progression flow, so completing them supports a more believable learning path."
    >
      <section className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <ExerciseWorkspace
          exercise={exercise}
          status={status}
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
