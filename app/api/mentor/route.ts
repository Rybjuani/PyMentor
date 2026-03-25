import { NextResponse } from "next/server";
import { buildMentorPlaceholderResponse } from "@/lib/mentor";

interface MentorRequestBody {
  message?: string;
  contextTitle?: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as MentorRequestBody;
  const message = body.message?.trim();

  if (!message) {
    return NextResponse.json(
      { error: "A message is required." },
      { status: 400 }
    );
  }

  const groqConfigured = Boolean(process.env.GROQ_API_KEY);

  if (groqConfigured) {
    return NextResponse.json({
      reply:
        "GROQ_API_KEY is present. Replace the placeholder branch in app/api/mentor/route.ts with the real Groq chat request and stream handling.",
      provider: "groq",
      contextTitle: body.contextTitle ?? null
    });
  }

  return NextResponse.json({
    reply: buildMentorPlaceholderResponse(message),
    provider: "mock",
    contextTitle: body.contextTitle ?? null
  });
}
