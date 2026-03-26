import { DraftScope } from "@prisma/client";
import { NextResponse } from "next/server";
import { getServerAuthSession } from "@/lib/auth";
import { deleteDraftForUser, getDraftForUser, saveDraftForUser } from "@/lib/drafts";
import { DraftRequestBody } from "@/types";

function parseScope(scope?: string): DraftScope | null {
  return scope === "lesson" || scope === "exercise" ? scope : null;
}

export async function GET(request: Request) {
  const session = await getServerAuthSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const scope = parseScope(searchParams.get("scope") ?? undefined);
  const slug = searchParams.get("slug") ?? undefined;

  if (!scope || !slug) {
    return NextResponse.json({ error: "Faltan datos del borrador." }, { status: 400 });
  }

  const draft = await getDraftForUser({
    userId: session.user.id,
    scope,
    slug
  });

  return NextResponse.json({
    content: draft?.content ?? null,
    updatedAt: draft?.updatedAt ?? null
  });
}

export async function POST(request: Request) {
  const session = await getServerAuthSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  let body: DraftRequestBody;

  try {
    body = (await request.json()) as DraftRequestBody;
  } catch {
    return NextResponse.json({ error: "El cuerpo de la solicitud no es válido." }, { status: 400 });
  }

  const scope = parseScope(body.scope);
  const slug = body.slug?.trim();
  const content = body.content ?? "";

  if (!scope || !slug) {
    return NextResponse.json({ error: "Faltan datos del borrador." }, { status: 400 });
  }

  const draft = await saveDraftForUser({
    userId: session.user.id,
    scope,
    slug,
    content
  });

  return NextResponse.json({
    ok: true,
    updatedAt: draft.updatedAt
  });
}

export async function DELETE(request: Request) {
  const session = await getServerAuthSession();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  let body: DraftRequestBody;

  try {
    body = (await request.json()) as DraftRequestBody;
  } catch {
    return NextResponse.json({ error: "El cuerpo de la solicitud no es válido." }, { status: 400 });
  }

  const scope = parseScope(body.scope);
  const slug = body.slug?.trim();

  if (!scope || !slug) {
    return NextResponse.json({ error: "Faltan datos del borrador." }, { status: 400 });
  }

  await deleteDraftForUser({
    userId: session.user.id,
    scope,
    slug
  });

  return NextResponse.json({ ok: true });
}
