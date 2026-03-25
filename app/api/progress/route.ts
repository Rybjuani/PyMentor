import { NextResponse } from "next/server";
import { recordActivity } from "@/lib/activity";
import { getServerAuthSession } from "@/lib/auth";
import { getExerciseBySlug, getLessonBySlug } from "@/lib/course";
import { evaluateExerciseAnswer } from "@/lib/exercise-evaluation";
import { saveProgress } from "@/lib/user-progress";
import { ExerciseExecutionResult, ProgressStatus } from "@/types";

interface ProgressRequestBody {
  entityType?: "lesson" | "exercise";
  slug?: string;
  status?: ProgressStatus;
  answer?: string;
  execution?: ExerciseExecutionResult;
}

export async function POST(request: Request) {
  const session = await getServerAuthSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  let body: ProgressRequestBody;

  try {
    body = (await request.json()) as ProgressRequestBody;
  } catch {
    return NextResponse.json({ error: "El cuerpo de la solicitud no es válido." }, { status: 400 });
  }

  if (!body.entityType || !body.slug || !body.status) {
    return NextResponse.json({ error: "Faltan campos de progreso." }, { status: 400 });
  }

  if (body.entityType === "exercise" && body.status === "completed") {
    const exercise = getExerciseBySlug(body.slug);

    if (!exercise) {
      return NextResponse.json({ error: "No se encontró el ejercicio." }, { status: 404 });
    }

    const evaluation = evaluateExerciseAnswer(exercise, body.answer ?? "", body.execution);

    if (!evaluation.canComplete) {
      return NextResponse.json(
        {
          error: "Este ejercicio todavía no está listo para marcarse como completado.",
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

  const label = entityType === "lesson" ? "lección" : "ejercicio";

  if (status === "completed") {
    return `Completaste ${label}: ${title}`;
  }

  if (status === "in_progress") {
    return `Comenzaste ${label}: ${title}`;
  }

  return `Reiniciaste ${label}: ${title}`;
}
