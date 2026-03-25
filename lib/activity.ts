import { prisma } from "@/lib/db";

function startOfUtcDay(date: Date) {
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}

export async function touchUserActivity(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      lastActiveAt: true,
      currentStreak: true
    }
  });

  const now = new Date();
  const today = startOfUtcDay(now);

  if (!user?.lastActiveAt) {
    await prisma.user.update({
      where: { id: userId },
      data: {
        lastActiveAt: now,
        currentStreak: 1
      }
    });

    return;
  }

  const previousDay = startOfUtcDay(user.lastActiveAt);
  const dayDifference = Math.floor((today - previousDay) / (1000 * 60 * 60 * 24));

  if (dayDifference <= 0) {
    await prisma.user.update({
      where: { id: userId },
      data: {
        lastActiveAt: now
      }
    });

    return;
  }

  await prisma.user.update({
    where: { id: userId },
    data: {
      lastActiveAt: now,
      currentStreak: dayDifference === 1 ? user.currentStreak + 1 : 1
    }
  });
}

export async function recordActivity({
  userId,
  type,
  description
}: {
  userId: string;
  type: string;
  description: string;
}) {
  await prisma.activityEvent.create({
    data: {
      userId,
      type,
      description
    }
  });

  await touchUserActivity(userId);
}

export async function getRecentActivityForUser(userId: string) {
  return prisma.activityEvent.findMany({
    where: { userId },
    orderBy: {
      createdAt: "desc"
    },
    take: 4
  });
}
