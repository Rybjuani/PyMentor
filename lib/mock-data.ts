import { Achievement, MentorPrompt } from "@/types";

export const mentorPrompts: MentorPrompt[] = [
  {
    mode: "explain",
    label: "Explain this more simply",
    prompt: "Explain this in simpler words for a complete beginner who is seeing it for the first time."
  },
  {
    mode: "hint",
    label: "Give me a hint",
    prompt: "Give me a small hint without solving the whole exercise for me."
  },
  {
    mode: "steps",
    label: "Show step by step",
    prompt: "Walk me through this slowly, one step at a time, and do not skip beginner details."
  },
  {
    mode: "debug",
    label: "Help me debug",
    prompt: "Help me debug this like a beginner: what should I check first, second, and third?"
  }
];

export const achievements: Achievement[] = [
  {
    id: "first-lesson",
    title: "First lesson complete",
    description: "Finished one lesson in your roadmap.",
    state: "earned"
  },
  {
    id: "debugger",
    title: "Bug fixer",
    description: "Complete your first debugging exercise.",
    state: "next"
  },
  {
    id: "steady-progress",
    title: "Steady progress",
    description: "Finish every lesson in a module.",
    state: "locked"
  }
];

export const communityPreview = [
  "Guided study circles for beginners",
  "Ask-for-help threads that keep lesson context attached",
  "Celebrate first wins, first projects, and first bugs fixed"
];
