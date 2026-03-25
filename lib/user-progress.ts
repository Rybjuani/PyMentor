import { CourseProgress, ProgressStatus } from "@/types";
import { prisma } from "@/lib/db";

export function emptyProgress(): CourseProgress {
  return {
    lessons: {},
    exercises: {}
  };
}

export async function getProgressForUser(userId: string): Promise<CourseProgress> {
  const [lessons, exercises] = await Promise.all([
    prisma.lessonProgress.findMany({
      where: { userId }
    }),
    prisma.exerciseProgress.findMany({
      where: { userId }
    })
  ]);

  return {
    lessons: Object.fromEntries(lessons.map((item) => [item.lessonSlug, item.status])),
    exercises: Object.fromEntries(exercises.map((item) => [item.exerciseSlug, item.status]))
  };
}

export async function saveProgress({
  userId,
  entityType,
  slug,
  status
}: {
  userId: string;
  entityType: "lesson" | "exercise";
  slug: string;
  status: ProgressStatus;
}) {
  if (entityType === "lesson") {
    await prisma.lessonProgress.upsert({
      where: {
        userId_lessonSlug: {
          userId,
          lessonSlug: slug
        }
      },
      create: {
        userId,
        lessonSlug: slug,
        status
      },
      update: {
        status
      }
    });

    return;
  }

  await prisma.exerciseProgress.upsert({
    where: {
      userId_exerciseSlug: {
        userId,
        exerciseSlug: slug
      }
    },
    create: {
      userId,
      exerciseSlug: slug,
      status
    },
    update: {
      status
    }
  });
}
