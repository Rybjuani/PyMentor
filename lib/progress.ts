import { CourseProgress, ProgressStatus } from "@/types";

export const PROGRESS_COOKIE_NAME = "pymentor-progress";

export const emptyProgress: CourseProgress = {
  lessons: {},
  exercises: {}
};

export function getProgressFromValue(value?: string | null): CourseProgress {
  if (!value) {
    return emptyProgress;
  }

  try {
    const parsed = JSON.parse(value) as CourseProgress;

    return {
      lessons: parsed.lessons ?? {},
      exercises: parsed.exercises ?? {}
    };
  } catch {
    return emptyProgress;
  }
}

export function serializeProgress(progress: CourseProgress) {
  return JSON.stringify(progress);
}

export function updateLessonProgress(
  progress: CourseProgress,
  lessonSlug: string,
  status: ProgressStatus
) {
  return {
    ...progress,
    lessons: {
      ...progress.lessons,
      [lessonSlug]: status
    }
  };
}

export function updateExerciseProgress(
  progress: CourseProgress,
  exerciseSlug: string,
  status: ProgressStatus
) {
  return {
    ...progress,
    exercises: {
      ...progress.exercises,
      [exerciseSlug]: status
    }
  };
}
