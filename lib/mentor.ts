import { MentorContextPayload, MentorConversationMessage, MentorMode } from "@/types";

const modeInstructions: Record<MentorMode, string> = {
  explain:
    "Explain the idea in simple language. Use short paragraphs. Define any technical word immediately in plain English.",
  hint:
    "Give a small hint first. Do not give the full solution unless the learner explicitly asks for it again.",
  steps:
    "Break the explanation into a short numbered sequence. Keep each step small and beginner-safe.",
  debug:
    "Help the learner debug by pointing to what to check first, second, and third. Prefer reasoning over giving the final corrected code immediately."
};

const fallbackResponses: Record<MentorMode, string> = {
  explain:
    "Let’s simplify it. Treat the code like a question. First ask what the program is trying to decide, then check which line tells Python how to make that decision.",
  hint:
    "Small hint: read the `if` line slowly and look at the comparison operator before changing anything else.",
  steps:
    "1. Read the goal of the code. 2. Find the line where Python makes the decision. 3. Check the symbols on that line. 4. Check the colon and indentation.",
  debug:
    "Start with syntax first. Check the comparison operator, then the colon at the end of the `if` line, then the indentation of the lines below it."
};

export function buildMentorFallbackResponse(mode: MentorMode, message: string) {
  const normalized = message.toLowerCase();

  if (mode === "debug" || normalized.includes("wrong") || normalized.includes("error")) {
    return fallbackResponses.debug;
  }

  if (mode === "hint" || normalized.includes("hint")) {
    return fallbackResponses.hint;
  }

  if (mode === "steps") {
    return fallbackResponses.steps;
  }

  return fallbackResponses.explain;
}

export function buildMentorSystemPrompt(mode: MentorMode) {
  return `
You are PyMentor, a calm AI Python mentor for absolute beginners.

Your job:
- help beginners learn Python from zero
- explain clearly and simply
- stay patient, practical, and focused
- reduce overwhelm
- guide rather than judge

Behavior rules:
- Assume the learner is new to programming unless they clearly ask for more depth.
- Prefer simple words over jargon.
- Keep answers concise by default.
- If the learner seems stuck, reassure briefly and then help concretely.
- When the mode is hint or debug, do not jump straight to the full solution unless necessary.
- When code is involved, explain what is happening line by line only when useful.
- If you use a technical term, explain it immediately in plain language.
- Never be sarcastic, pushy, or cheesy.
- Focus on helping the learner understand, not just finish.

Mode behavior:
${modeInstructions[mode]}

Response style:
- Use short paragraphs or very short lists.
- Keep the tone warm and steady.
- Avoid walls of text.
- Stay focused on Python learning.
`.trim();
}

export function buildMentorUserPrompt({
  message,
  mode,
  context
}: {
  message: string;
  mode: MentorMode;
  context?: MentorContextPayload;
}) {
  const contextLines = [
    context?.title ? `Current title: ${context.title}` : null,
    context?.topic ? `Topic: ${context.topic}` : null,
    context?.pageType ? `Page type: ${context.pageType}` : null,
    context?.exerciseTitle ? `Exercise: ${context.exerciseTitle}` : null,
    context?.codeSnippet ? `Relevant code:\n${context.codeSnippet}` : null
  ].filter(Boolean);

  return `
Help mode: ${mode}

Learning context:
${contextLines.length > 0 ? contextLines.join("\n") : "No extra context provided."}

Learner message:
${message}
`.trim();
}

export function sanitizeConversationHistory(history: MentorConversationMessage[] | undefined) {
  if (!history || history.length === 0) {
    return [];
  }

  return history
    .filter(
      (message) =>
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string" &&
        message.content.trim().length > 0
    )
    .slice(-6)
    .map((message) => ({
      role: message.role,
      content: message.content.trim().slice(0, 3000)
    }));
}
