import { NextResponse } from "next/server";
import { getServerAuthSession } from "@/lib/auth";
import { saveProgress } from "@/lib/user-progress";
import { ProgressStatus } from "@/types";

interface ProgressRequestBody {
  entityType?: "lesson" | "exercise";
  slug?: string;
  status?: ProgressStatus;
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

  await saveProgress({
    userId: session.user.id,
    entityType: body.entityType,
    slug: body.slug,
    status: body.status
  });

  return NextResponse.json({ ok: true });
}
