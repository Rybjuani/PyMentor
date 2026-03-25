import { NextResponse } from "next/server";
import { getServerAuthSession } from "@/lib/auth";
import { recordActivity } from "@/lib/activity";
import { prisma } from "@/lib/db";

export async function POST() {
  const session = await getServerAuthSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      onboardingCompletedAt: true
    }
  });

  if (!user) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  if (user.onboardingCompletedAt) {
    return NextResponse.json({ ok: true });
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data: {
      onboardingCompletedAt: new Date()
    }
  });

  await recordActivity({
    userId: session.user.id,
    type: "onboarding_completed",
    description: "Terminaste el inicio guiado y desbloqueaste la primera lección."
  });

  return NextResponse.json({ ok: true });
}
