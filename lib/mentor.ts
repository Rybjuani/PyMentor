const fallbackResponses = [
  "Start by describing what the code should do in one short sentence. Then compare that goal with what each line is doing now.",
  "Try checking the condition first. Ask yourself: what values make it true, and what values make it false?",
  "A good beginner move is to test one tiny change at a time. That makes the bug easier to spot."
];

export function buildMentorPlaceholderResponse(message: string) {
  const normalized = message.toLowerCase();

  if (normalized.includes("hint")) {
    return "Small hint: focus on the comparison and the punctuation around the `if` line before changing anything else.";
  }

  if (normalized.includes("wrong") || normalized.includes("error")) {
    return "Look for two things first: the comparison operator and whether the line ends the way Python expects.";
  }

  return fallbackResponses[message.length % fallbackResponses.length];
}
