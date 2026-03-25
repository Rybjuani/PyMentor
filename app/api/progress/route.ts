import { NextResponse } from "next/server";
import { recordActivity } from "@/lib/activity";
import { getServerAuthSession } from "@/lib/auth";
import { getExerciseBySlug, getLessonBySlug } from "@/lib/course";
import { evaluateExerciseAnswer } from "@/lib/exercise-evaluation";
import { saveProgress } from "@/lib/user-progress";
import { ProgressStatus } from "@/types";

interface ProgressRequestBody {
  entityType?: "lesson" | "exercise";
  slug?: string;
  status?: ProgressStatus;
  answer?: string;
}

export async function POST(request: Request) {
  const session = await getServerAuthSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  let body: ProgressRequestBody;

  try {
    body = (await request.json()) as ProgressRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body.entityType || !body.slug || !body.status) {
    return NextResponse.json({ error: "Missing progress fields." }, { status: 400 });
  }

  if (body.entityType === "exercise" && body.status === "completed") {
    const exercise = getExerciseBySlug(body.slug);

    if (!exercise) {
      return NextResponse.json({ error: "Exercise not found." }, { status: 404 });
    }

    const evaluation = evaluateExerciseAnswer(exercise, body.answer ?? "");

    if (!evaluation.canComplete) {
      return NextResponse.json(
        {
          error: "This exercise is not ready to be marked complete yet.",
          evaluation
        },
        { status: 422 }
      );
    }
  }

  const result = await saveProgress({
    userId: session.user.id,
    entityType: body.entityType,
    slug: body.slug,
    status: body.status
  });

  const entity =
    body.entityType === "lesson" ? getLessonBySlug(body.slug) : getExerciseBySlug(body.slug);

  const progressDescription = getProgressDescription({
    entityType: body.entityType,
    status: body.status,
    title: entity?.title
  });

  if (result.changed && progressDescription) {
    await recordActivity({
      userId: session.user.id,
      type: `${body.entityType}_${body.status}`,
      description: progressDescription
    });
  }

  return NextResponse.json({ ok: true });
}

function getProgressDescription({
  entityType,
  status,
  title
}: {
  entityType: "lesson" | "exercise";
  status: ProgressStatus;
  title?: string;
}) {
  if (!title) {
    return null;
  }

  const label = entityType === "lesson" ? "lesson" : "exercise";

  if (status === "completed") {
    return `Completed ${label}: ${title}`;
  }

  if (status === "in_progress") {
    return `Started ${label}: ${title}`;
  }

  return `Reset ${label}: ${title}`;
}
