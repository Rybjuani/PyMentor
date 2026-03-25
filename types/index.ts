export type ModuleStatus = "locked" | "available" | "completed";
export type ProgressStatus = "not_started" | "in_progress" | "completed";

export interface LessonSection {
  title: string;
  body: string;
}

export interface LessonKeyIdea {
  title: string;
  description: string;
}

export interface LessonData {
  slug: string;
  title: string;
  module: string;
  moduleSlug?: string;
  order?: number;
  duration: string;
  difficulty: "Beginner" | "Starter";
  summary: string;
  warmup: string;
  goal: string;
  keyIdeas: LessonKeyIdea[];
  explanation: LessonSection[];
  example: string;
  practicePrompt: string;
  practiceChecklist: string[];
  commonMistakes: string[];
  bugChallenge: {
    prompt: string;
    brokenCode: string;
    expectedLearning: string;
  };
  exerciseSlug?: string;
}

export interface RoadmapModule {
  slug: string;
  title: string;
  description: string;
  order?: number;
  status: ModuleStatus;
  lessonCount: number;
  estimatedTime: string;
  xp: number;
}

export interface ExerciseData {
  slug: string;
  title: string;
  moduleSlug: string;
  lessonSlug: string;
  order: number;
  duration: string;
  summary: string;
  instructions: string[];
  starterCode: string;
  successCriteria: string[];
}

export interface CourseProgress {
  lessons: Record<string, ProgressStatus>;
  exercises: Record<string, ProgressStatus>;
}

export interface ModuleProgressSummary {
  completedLessons: number;
  totalLessons: number;
  percent: number;
  status: ProgressStatus;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  state: "earned" | "next" | "locked";
}

export interface MentorPrompt {
  mode: "explain" | "hint" | "steps" | "debug";
  label: string;
  prompt: string;
}

export type MentorMode = MentorPrompt["mode"];

export interface MentorConversationMessage {
  role: "user" | "assistant";
  content: string;
}

export interface MentorContextPayload {
  title: string;
  topic?: string;
  pageType?: "lesson" | "exercise" | "general";
  exerciseTitle?: string;
  codeSnippet?: string;
}

export interface MentorRequestBody {
  message?: string;
  mode?: MentorMode;
  history?: MentorConversationMessage[];
  context?: MentorContextPayload;
}

export interface MentorResponseBody {
  reply: string;
  provider: "groq" | "fallback";
  mode: MentorMode;
  error?: string;
}
