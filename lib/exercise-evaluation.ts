import {
  ExerciseData,
  ExerciseEvaluationCheck,
  ExerciseEvaluationResult,
  ExerciseValidationRule
} from "@/types";

function normalizeValue(value: string, caseSensitive?: boolean) {
  return caseSensitive ? value : value.toLowerCase();
}

function evaluateRule(answer: string, rule: ExerciseValidationRule) {
  const source = normalizeValue(answer, rule.caseSensitive);
  const target = normalizeValue(rule.value, rule.caseSensitive);

  switch (rule.type) {
    case "includes":
      return source.includes(target);
    case "excludes":
      return !source.includes(target);
    case "regex":
      return new RegExp(rule.value, rule.flags).test(answer);
    case "occurrences_at_least":
      return source.split(target).length - 1 >= (rule.count ?? 1);
    default:
      return false;
  }
}

export function evaluateExerciseAnswer(
  exercise: ExerciseData,
  answer: string
): ExerciseEvaluationResult {
  const trimmedAnswer = answer.trim();
  const checks: ExerciseEvaluationCheck[] = exercise.validation.rules.map((rule) => ({
    id: rule.id,
    label: rule.label,
    passed: evaluateRule(trimmedAnswer, rule),
    required: rule.required ?? true,
    feedbackWhenMissing: rule.feedbackWhenMissing
  }));

  const matchedRules = checks.filter((check) => check.passed).length;
  const totalRules = checks.length;
  const requiredChecksPassed = checks.every((check) => !check.required || check.passed);
  const passingScore = exercise.validation.passingScore ?? totalRules;
  const hasEnoughContent =
    trimmedAnswer.length >= (exercise.validation.minLength ?? Math.min(8, exercise.starterCode.length));

  if (!hasEnoughContent) {
    return {
      state: "incomplete",
      summary: "Add a little more before checking your answer.",
      coaching:
        "Use the starter code as your base, then make one careful change at a time so the feedback can guide you.",
      matchedRules,
      totalRules,
      canComplete: false,
      checks
    };
  }

  if (requiredChecksPassed && matchedRules >= passingScore) {
    return {
      state: "correct",
      summary: "This answer looks solid for this learning step.",
      coaching:
        "You fixed the key issue without changing the goal of the exercise. That is the habit we want to build.",
      matchedRules,
      totalRules,
      canComplete: true,
      checks
    };
  }

  if (matchedRules > 0) {
    return {
      state: "partial",
      summary: "You are close. One or two important details still need attention.",
      coaching:
        "Keep the idea, then scan the lines slowly for syntax, punctuation, and the exact output the exercise expects.",
      matchedRules,
      totalRules,
      canComplete: false,
      checks
    };
  }

  return {
    state: "incomplete",
    summary: "The answer is still missing the main signals this exercise is looking for.",
    coaching:
      "Start with the first instruction, make the smallest possible fix, then check again to see what changed.",
    matchedRules,
    totalRules,
    canComplete: false,
    checks
  };
}
