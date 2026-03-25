export type ModuleStatus = "locked" | "available" | "completed";
export type ProgressStatus = "not_started" | "in_progress" | "completed";
export type ExerciseType = "bug_fix" | "guided_code" | "concept_check" | "output_check";
export type ExerciseResponseFormat = "code" | "text";
export type ExerciseEvaluationState = "incomplete" | "partial" | "correct";

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
  exerciseType: ExerciseType;
  responseFormat: ExerciseResponseFormat;
  moduleSlug: string;
  lessonSlug: string;
  order: number;
  duration: string;
  summary: string;
  prompt: string;
  responseLabel: string;
  responsePlaceholder: string;
  instructions: string[];
  hints: string[];
  starterCode: string;
  successCriteria: string[];
  validation: ExerciseValidationConfig;
}

export interface ExerciseValidationRule {
  id: string;
  label: string;
  type: "includes" | "excludes" | "regex" | "occurrences_at_least";
  value: string;
  count?: number;
  flags?: string;
  required?: boolean;
  caseSensitive?: boolean;
  feedbackWhenMissing: string;
}

export interface ExerciseValidationConfig {
  minLength?: number;
  passingScore?: number;
  rules: ExerciseValidationRule[];
}

export interface ExerciseEvaluationCheck {
  id: string;
  label: string;
  passed: boolean;
  required: boolean;
  feedbackWhenMissing: string;
}

export interface ExerciseEvaluationResult {
  state: ExerciseEvaluationState;
  summary: string;
  coaching: string;
  matchedRules: number;
  totalRules: number;
  canComplete: boolean;
  checks: ExerciseEvaluationCheck[];
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
