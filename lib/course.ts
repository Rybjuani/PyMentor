import { courseExercises, courseLessons, courseModules } from "@/lib/course-content";
import { CourseProgress, ExerciseData, LessonData, ModuleProgressSummary, ProgressStatus } from "@/types";

export const FOUNDATIONS_CAPSTONE_MODULE_SLUG = "foundations-capstone";
export const SECOND_TRACK_START_MODULE_SLUG = "basic-files";

export function getAllModules() {
  return [...courseModules].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getFoundationsModules() {
  const capstoneOrder = getModuleBySlug(FOUNDATIONS_CAPSTONE_MODULE_SLUG)?.order ?? Number.MAX_SAFE_INTEGER;
  return getAllModules().filter((module) => (module.order ?? 0) <= capstoneOrder);
}

export function getSecondTrackModules() {
  const capstoneOrder = getModuleBySlug(FOUNDATIONS_CAPSTONE_MODULE_SLUG)?.order ?? Number.MAX_SAFE_INTEGER;
  return getAllModules().filter((module) => (module.order ?? 0) > capstoneOrder);
}

export function getAllLessons() {
  return [...courseLessons].sort((a, b) => {
    if (a.moduleSlug === b.moduleSlug) {
      return (a.order ?? 0) - (b.order ?? 0);
    }

    const moduleA = getModuleBySlug(a.moduleSlug ?? "");
    const moduleB = getModuleBySlug(b.moduleSlug ?? "");
    return (moduleA?.order ?? 0) - (moduleB?.order ?? 0);
  });
}

export function getModuleBySlug(slug: string) {
  return courseModules.find((module) => module.slug === slug);
}

export function isModuleInSecondTrack(moduleSlug: string) {
  const module = getModuleBySlug(moduleSlug);
  const capstoneOrder = getModuleBySlug(FOUNDATIONS_CAPSTONE_MODULE_SLUG)?.order ?? Number.MAX_SAFE_INTEGER;
  return Boolean(module && (module.order ?? 0) > capstoneOrder);
}

export function getLessonsByModuleSlug(moduleSlug: string) {
  return getAllLessons().filter((lesson) => lesson.moduleSlug === moduleSlug);
}

export function getLessonBySlug(slug: string) {
  return courseLessons.find((lesson) => lesson.slug === slug);
}

export function getExerciseBySlug(slug: string) {
  return courseExercises.find((exercise) => exercise.slug === slug);
}

export function getExerciseByLessonSlug(lessonSlug: string) {
  return courseExercises.find((exercise) => exercise.lessonSlug === lessonSlug);
}

export function getPreviousLesson(lessonSlug: string) {
  const lessons = getAllLessons();
  const index = lessons.findIndex((lesson) => lesson.slug === lessonSlug);

  if (index <= 0) {
    return null;
  }

  return lessons[index - 1];
}

export function getNextLesson(lessonSlug: string) {
  const lessons = getAllLessons();
  const index = lessons.findIndex((lesson) => lesson.slug === lessonSlug);

  if (index < 0 || index === lessons.length - 1) {
    return null;
  }

  return lessons[index + 1];
}

export function getLessonPosition(lesson: LessonData) {
  const lessons = getLessonsByModuleSlug(lesson.moduleSlug ?? "");
  const index = lessons.findIndex((item) => item.slug === lesson.slug);

  return {
    current: index + 1,
    total: lessons.length
  };
}

export function getLessonStatus(progress: CourseProgress, lessonSlug: string): ProgressStatus {
  return progress.lessons[lessonSlug] ?? "not_started";
}

export function getExerciseStatus(progress: CourseProgress, exerciseSlug: string): ProgressStatus {
  return progress.exercises[exerciseSlug] ?? "not_started";
}

export function getModuleProgress(progress: CourseProgress, moduleSlug: string): ModuleProgressSummary {
  const lessons = getLessonsByModuleSlug(moduleSlug);
  const completedLessons = lessons.filter(
    (lesson) => getLessonStatus(progress, lesson.slug) === "completed"
  ).length;
  const hasStarted = lessons.some(
    (lesson) => getLessonStatus(progress, lesson.slug) !== "not_started"
  );

  const percent = lessons.length === 0 ? 0 : Math.round((completedLessons / lessons.length) * 100);

  return {
    completedLessons,
    totalLessons: lessons.length,
    percent,
    status: completedLessons === lessons.length && lessons.length > 0
      ? "completed"
      : hasStarted
        ? "in_progress"
        : "not_started"
  };
}

export function isModuleUnlocked(progress: CourseProgress, moduleSlug: string) {
  const modules = getAllModules();
  const moduleIndex = modules.findIndex((module) => module.slug === moduleSlug);

  if (moduleIndex <= 0) {
    return true;
  }

  const previousModule = modules[moduleIndex - 1];
  return getModuleProgress(progress, previousModule.slug).status === "completed";
}

export function getOverallLessonProgress(progress: CourseProgress) {
  const lessons = getAllLessons();
  const completed = lessons.filter(
    (lesson) => getLessonStatus(progress, lesson.slug) === "completed"
  ).length;

  return {
    completed,
    total: lessons.length,
    percent: lessons.length === 0 ? 0 : Math.round((completed / lessons.length) * 100)
  };
}

export function hasCompletedFoundationsTrack(progress: CourseProgress) {
  return getModuleProgress(progress, FOUNDATIONS_CAPSTONE_MODULE_SLUG).status === "completed";
}

export function getCurrentLearningFocus(progress: CourseProgress) {
  const lessons = getAllLessons();

  const inProgressLesson = lessons.find(
    (lesson) => getLessonStatus(progress, lesson.slug) === "in_progress"
  );

  if (inProgressLesson) {
    return {
      type: "lesson" as const,
      lesson: inProgressLesson
    };
  }

  const completedLessonWithPendingExercise = lessons.find((lesson) => {
    const exercise = getExerciseByLessonSlug(lesson.slug);

    return (
      getLessonStatus(progress, lesson.slug) === "completed" &&
      exercise &&
      getExerciseStatus(progress, exercise.slug) !== "completed"
    );
  });

  if (completedLessonWithPendingExercise) {
    return {
      type: "exercise" as const,
      lesson: completedLessonWithPendingExercise,
      exercise: getExerciseByLessonSlug(completedLessonWithPendingExercise.slug) as ExerciseData
    };
  }

  const nextNotStartedLesson = lessons.find(
    (lesson) => getLessonStatus(progress, lesson.slug) === "not_started"
  );

  if (nextNotStartedLesson) {
    return {
      type: "lesson" as const,
      lesson: nextNotStartedLesson
    };
  }

  return null;
}

export function buildRecentActivity(progress: CourseProgress) {
  const items = [
    ...Object.entries(progress.lessons)
      .filter(([, status]) => status === "completed")
      .map(([slug]) => {
        const lesson = getLessonBySlug(slug);
        return lesson ? `Lección completada: ${lesson.title}` : null;
      }),
    ...Object.entries(progress.exercises)
      .filter(([, status]) => status === "completed")
      .map(([slug]) => {
        const exercise = getExerciseBySlug(slug);
        return exercise ? `Ejercicio completado: ${exercise.title}` : null;
      })
  ].filter(Boolean) as string[];

  if (items.length === 0) {
    return [
      "Empezaste tu ruta de Python",
      "Abriste tu espacio de aprendizaje",
      "Tu primer paso completado va a aparecer aquí"
    ];
  }

  return items.slice(-3).reverse();
}
