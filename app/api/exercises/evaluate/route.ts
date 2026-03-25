import { NextResponse } from "next/server";
import { getServerAuthSession } from "@/lib/auth";
import { getExerciseBySlug } from "@/lib/course";
import { evaluateExerciseAnswer } from "@/lib/exercise-evaluation";
import { ExerciseEvaluationRequestBody } from "@/types";

export async function POST(request: Request) {
  const session = await getServerAuthSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  let body: ExerciseEvaluationRequestBody;

  try {
    body = (await request.json()) as ExerciseEvaluationRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body.exerciseSlug) {
    return NextResponse.json({ error: "Exercise slug is required." }, { status: 400 });
  }

  const exercise = getExerciseBySlug(body.exerciseSlug);

  if (!exercise) {
    return NextResponse.json({ error: "Exercise not found." }, { status: 404 });
  }

  const result = evaluateExerciseAnswer(exercise, body.answer ?? "");

  return NextResponse.json(result);
}
