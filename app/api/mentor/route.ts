import { NextResponse } from "next/server";
import {
  buildMentorFallbackResponse,
  buildMentorSystemPrompt,
  buildMentorUserPrompt,
  sanitizeConversationHistory
} from "@/lib/mentor";
import { MentorRequestBody, MentorResponseBody } from "@/types";

export const runtime = "nodejs";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

interface GroqChatCompletionResponse {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
}

export async function POST(request: Request) {
  let body: MentorRequestBody;

  try {
    body = (await request.json()) as MentorRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const message = body.message?.trim();
  const mode = body.mode ?? "explain";

  if (!message) {
    return NextResponse.json(
      { error: "A message is required." },
      { status: 400 }
    );
  }

  const fallbackReply = buildMentorFallbackResponse(mode, message);
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    const payload: MentorResponseBody = {
      reply: fallbackReply,
      provider: "fallback",
      mode,
      error: "missing_api_key"
    };

    return NextResponse.json(payload);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 18000);

  try {
    const history = sanitizeConversationHistory(body.history);
    const groqMessages = [
      {
        role: "system",
        content: buildMentorSystemPrompt(mode)
      },
      ...history,
      {
        role: "user",
        content: buildMentorUserPrompt({
          message,
          mode,
          context: body.context
        })
      }
    ];

    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        temperature: mode === "hint" ? 0.35 : 0.5,
        max_tokens: mode === "steps" ? 420 : 320,
        messages: groqMessages
      }),
      signal: controller.signal,
      cache: "no-store"
    });

    if (!response.ok) {
      const payload: MentorResponseBody = {
        reply: fallbackReply,
        provider: "fallback",
        mode,
        error: `groq_http_${response.status}`
      };

      return NextResponse.json(payload, { status: 200 });
    }

    const data = (await response.json()) as GroqChatCompletionResponse;
    const reply = data.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      const payload: MentorResponseBody = {
        reply: fallbackReply,
        provider: "fallback",
        mode,
        error: "empty_model_response"
      };

      return NextResponse.json(payload, { status: 200 });
    }

    const payload: MentorResponseBody = {
      reply,
      provider: "groq",
      mode
    };

    return NextResponse.json(payload);
  } catch {
    const payload: MentorResponseBody = {
      reply:
        "I had trouble reaching the mentor service just now. Try again in a moment, or ask for one small hint so we can keep moving.",
      provider: "fallback",
      mode,
      error: "request_failed"
    };

    return NextResponse.json(payload, { status: 200 });
  } finally {
    clearTimeout(timeout);
  }
}
