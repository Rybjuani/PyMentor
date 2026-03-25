import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { PROGRESS_COOKIE_NAME, getProgressFromValue, serializeProgress, updateExerciseProgress, updateLessonProgress } from "@/lib/progress";
import { ProgressStatus } from "@/types";

interface ProgressRequestBody {
  entityType?: "lesson" | "exercise";
  slug?: string;
  status?: ProgressStatus;
}

export async function POST(request: Request) {
  let body: ProgressRequestBody;

  try {
    body = (await request.json()) as ProgressRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body.entityType || !body.slug || !body.status) {
    return NextResponse.json({ error: "Missing progress fields." }, { status: 400 });
  }

  const cookieStore = cookies();
  const current = getProgressFromValue(cookieStore.get(PROGRESS_COOKIE_NAME)?.value);
  const next =
    body.entityType === "lesson"
      ? updateLessonProgress(current, body.slug, body.status)
      : updateExerciseProgress(current, body.slug, body.status);

  const response = NextResponse.json({ ok: true });

  response.cookies.set(PROGRESS_COOKIE_NAME, serializeProgress(next), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 180
  });

  return response;
}
