import {
  ExactAnswerEvaluatorConfig,
  ExerciseData,
  ExerciseEvaluationCheck,
  ExerciseEvaluationResult,
  ExerciseExecutionResult,
  ExerciseValidationRule,
  OrderedConceptEvaluatorConfig,
  OrderedConceptEvaluatorConcept,
  StructureCheckEvaluatorConfig
} from "@/types";

function normalizeValue(value: string, caseSensitive?: boolean) {
  return caseSensitive ? value : value.toLowerCase();
}

function normalizeAnswerForExactMatch(
  value: string,
  {
    normalizeWhitespace = true,
    ignoreCase = true
  }: Pick<ExactAnswerEvaluatorConfig, "normalizeWhitespace" | "ignoreCase">
) {
  const collapsed = normalizeWhitespace ? value.trim().replace(/\s+/g, " ") : value.trim();
  return ignoreCase ? collapsed.toLowerCase() : collapsed;
}

function buildResult({
  evaluatorType,
  checks,
  hasEnoughContent,
  passingScore,
  successSummary,
  successCoaching,
  partialSummary,
  partialCoaching,
  incompleteSummary,
  incompleteCoaching
}: {
  evaluatorType: ExerciseEvaluationResult["evaluatorType"];
  checks: ExerciseEvaluationCheck[];
  hasEnoughContent: boolean;
  passingScore: number;
  successSummary: string;
  successCoaching: string;
  partialSummary: string;
  partialCoaching: string;
  incompleteSummary: string;
  incompleteCoaching: string;
}): ExerciseEvaluationResult {
  const matchedRules = checks.filter((check) => check.passed).length;
  const totalRules = checks.length;
  const requiredChecksPassed = checks.every((check) => !check.required || check.passed);

  if (!hasEnoughContent) {
    return {
      state: "incomplete",
      summary: incompleteSummary,
      coaching: incompleteCoaching,
      evaluatorType,
      matchedRules,
      totalRules,
      canComplete: false,
      checks
    };
  }

  if (requiredChecksPassed && matchedRules >= passingScore) {
    return {
      state: "correct",
      summary: successSummary,
      coaching: successCoaching,
      evaluatorType,
      matchedRules,
      totalRules,
      canComplete: true,
      checks
    };
  }

  if (matchedRules > 0) {
    return {
      state: "partial",
      summary: partialSummary,
      coaching: partialCoaching,
      evaluatorType,
      matchedRules,
      totalRules,
      canComplete: false,
      checks
    };
  }

  return {
    state: "incomplete",
    summary: incompleteSummary,
    coaching: incompleteCoaching,
    evaluatorType,
    matchedRules,
    totalRules,
    canComplete: false,
    checks
  };
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

function evaluateRuleBasedExercise(exercise: ExerciseData, answer: string): ExerciseEvaluationResult {
  const trimmedAnswer = answer.trim();
  const evaluator = exercise.evaluator;

  if (evaluator.type !== "rule_based") {
    throw new Error("Invalid evaluator type for rule-based exercise.");
  }

  const checks: ExerciseEvaluationCheck[] = evaluator.rules.map((rule) => ({
    id: rule.id,
    label: rule.label,
    passed: evaluateRule(trimmedAnswer, rule),
    required: rule.required ?? true,
    feedbackWhenMissing: rule.feedbackWhenMissing
  }));

  return buildResult({
    evaluatorType: "rule_based",
    checks,
    hasEnoughContent:
      trimmedAnswer.length >= (evaluator.minLength ?? Math.min(8, exercise.starterCode.length)),
    passingScore: evaluator.passingScore ?? checks.length,
    successSummary: "This answer looks solid for this learning step.",
    successCoaching:
      "You fixed the key issue without changing the goal of the exercise. That is the habit we want to build.",
    partialSummary: "You are close. One or two important details still need attention.",
    partialCoaching:
      "Keep the idea, then scan the lines slowly for syntax, punctuation, and the exact output the exercise expects.",
    incompleteSummary: "The answer is still missing the main signals this exercise is looking for.",
    incompleteCoaching:
      "Start with the first instruction, make the smallest possible fix, then check again to see what changed."
  });
}

function evaluateExactAnswerExercise(exercise: ExerciseData, answer: string): ExerciseEvaluationResult {
  const trimmedAnswer = answer.trim();
  const evaluator = exercise.evaluator;

  if (evaluator.type !== "exact_answer") {
    throw new Error("Invalid evaluator type for exact-answer exercise.");
  }

  const normalizedAnswer = normalizeAnswerForExactMatch(trimmedAnswer, evaluator);
  const matches = evaluator.acceptableAnswers.some(
    (candidate) => normalizeAnswerForExactMatch(candidate, evaluator) === normalizedAnswer
  );

  const checks: ExerciseEvaluationCheck[] = [
    {
      id: "expected-output",
      label: "Matches the expected output in the right order",
      passed: matches,
      required: true,
      feedbackWhenMissing:
        "Read the program from top to bottom and write the printed lines in that same order."
    }
  ];

  return buildResult({
    evaluatorType: "exact_answer",
    checks,
    hasEnoughContent: trimmedAnswer.length >= (evaluator.minLength ?? 3),
    passingScore: 1,
    successSummary: "You captured the expected output correctly.",
    successCoaching:
      "This shows you are reading the program in sequence, which is one of the most important early Python habits.",
    partialSummary: "Your answer has some useful content, but the final output still does not fully match.",
    partialCoaching:
      "Compare each output line with the program again. A small order change is often the whole issue here.",
    incompleteSummary: "Add the output you expect before checking this step.",
    incompleteCoaching:
      "Write one output line per line. That makes it easier to compare your thinking with what the program would show."
  });
}

function findConceptPosition(answer: string, concept: OrderedConceptEvaluatorConcept) {
  const loweredAnswer = answer.toLowerCase();

  return concept.keywords.reduce((bestPosition, keyword) => {
    const position = loweredAnswer.indexOf(keyword.toLowerCase());

    if (position === -1) {
      return bestPosition;
    }

    if (bestPosition === -1) {
      return position;
    }

    return Math.min(bestPosition, position);
  }, -1);
}

function evaluateOrderedConceptExercise(
  exercise: ExerciseData,
  answer: string
): ExerciseEvaluationResult {
  const trimmedAnswer = answer.trim();
  const evaluator = exercise.evaluator;

  if (evaluator.type !== "ordered_concepts") {
    throw new Error("Invalid evaluator type for ordered-concepts exercise.");
  }

  const positions = evaluator.concepts.map((concept) => ({
    concept,
    position: findConceptPosition(trimmedAnswer, concept)
  }));

  const checks: ExerciseEvaluationCheck[] = positions.map(({ concept, position }) => ({
    id: concept.id,
    label: concept.label,
    passed: position !== -1,
    required: true,
    feedbackWhenMissing: concept.feedbackWhenMissing
  }));

  if (evaluator.requireOrder) {
    const foundPositions = positions.filter((item) => item.position !== -1);
    const ordered =
      foundPositions.length < 2 ||
      foundPositions.every((item, index) => index === 0 || item.position > foundPositions[index - 1].position);

    checks.push({
      id: "concept-order",
      label: "Explains the ideas in a sensible order",
      passed: ordered,
      required: true,
      feedbackWhenMissing:
        "Try explaining the steps in sequence instead of listing them in a mixed order."
    });
  }

  return buildResult({
    evaluatorType: "ordered_concepts",
    checks,
    hasEnoughContent: trimmedAnswer.length >= (evaluator.minLength ?? 18),
    passingScore: evaluator.passingScore ?? checks.length,
    successSummary: "Your explanation covers the main idea clearly.",
    successCoaching:
      "You named the key concepts in a way a beginner can follow. That is strong reasoning practice, not just memorizing syntax.",
    partialSummary: "Your explanation has the right direction, but it is still missing one idea the lesson is aiming at.",
    partialCoaching:
      "Use the missing check as a guide and add one short sentence for that idea instead of rewriting everything.",
    incompleteSummary: "Add a short explanation before checking this step.",
    incompleteCoaching:
      "Keep it simple. A few clear lines that mention the key ideas are enough for this exercise."
  });
}

function evaluateStructureCheckExercise(
  exercise: ExerciseData,
  answer: string
): ExerciseEvaluationResult {
  const trimmedAnswer = answer.trim();
  const evaluator = exercise.evaluator;

  if (evaluator.type !== "structure_check") {
    throw new Error("Invalid evaluator type for structure-check exercise.");
  }

  const patternResults = evaluator.requiredPatterns.map((pattern) => ({
    pattern,
    match: new RegExp(pattern.pattern, pattern.flags).exec(trimmedAnswer)
  }));
  const forbiddenPatternResults =
    evaluator.forbiddenPatterns?.map((pattern) => ({
      pattern,
      match: new RegExp(pattern.pattern, pattern.flags).exec(trimmedAnswer)
    })) ?? [];

  const checks: ExerciseEvaluationCheck[] = patternResults.map(({ pattern, match }) => ({
    id: pattern.id,
    label: pattern.label,
    passed: Boolean(match),
    required: true,
    feedbackWhenMissing: pattern.feedbackWhenMissing
  }));

  checks.push(
    ...forbiddenPatternResults.map(({ pattern, match }) => ({
      id: pattern.id,
      label: pattern.label,
      passed: !match,
      required: true,
      feedbackWhenMissing: pattern.feedbackWhenMissing
    }))
  );

  if (evaluator.orderedPatternIds?.length) {
    const orderedMatches = evaluator.orderedPatternIds
      .map((id) => patternResults.find((patternResult) => patternResult.pattern.id === id))
      .filter(Boolean) as typeof patternResults;

    const isOrdered =
      orderedMatches.every((item) => item.match) &&
      orderedMatches.every(
        (item, index) => index === 0 || (item.match?.index ?? -1) > (orderedMatches[index - 1].match?.index ?? -1)
      );

    checks.push({
      id: "structure-order",
      label: "Keeps the conditional structure in the right order",
      passed: isOrdered,
      required: true,
      feedbackWhenMissing:
        "Keep the `if` branch first, then the `else` branch after it so the code reads like one clear decision."
    });
  }

  return buildResult({
    evaluatorType: "structure_check",
    checks,
    hasEnoughContent: trimmedAnswer.length >= (evaluator.minLength ?? 18),
    passingScore: evaluator.passingScore ?? checks.length,
    successSummary: "The structure of this answer looks correct for the lesson goal.",
    successCoaching:
      "You repaired both the syntax and the shape of the conditional, which is exactly what this exercise is teaching.",
    partialSummary: "The structure is improving, but one important piece is still out of place.",
    partialCoaching:
      "Focus on the missing structure check instead of rewriting the whole answer. One careful fix is usually enough here.",
    incompleteSummary: "The answer is still too incomplete to confirm the structure.",
    incompleteCoaching:
      "Start by fixing the condition line, then make sure each branch is still present and readable."
  });
}

export function evaluateExerciseAnswer(
  exercise: ExerciseData,
  answer: string,
  execution?: ExerciseExecutionResult
): ExerciseEvaluationResult {
  let baseResult: ExerciseEvaluationResult;

  switch (exercise.evaluator.type) {
    case "rule_based":
      baseResult = evaluateRuleBasedExercise(exercise, answer);
      break;
    case "exact_answer":
      baseResult = evaluateExactAnswerExercise(exercise, answer);
      break;
    case "ordered_concepts":
      baseResult = evaluateOrderedConceptExercise(exercise, answer);
      break;
    case "structure_check":
      baseResult = evaluateStructureCheckExercise(exercise, answer);
      break;
    default:
      throw new Error("Unsupported exercise evaluator.");
  }

  return applyExecutionValidation(exercise, baseResult, execution);
}

function applyExecutionValidation(
  exercise: ExerciseData,
  baseResult: ExerciseEvaluationResult,
  execution?: ExerciseExecutionResult
): ExerciseEvaluationResult {
  const config = exercise.executionValidation;

  if (!config) {
    return baseResult;
  }

  const didRun = execution?.didRun ?? false;
  const runtimeError = execution?.error?.trim() ?? "";
  const rawOutput = execution?.output ?? "";
  const normalizedOutput = normalizeRuntimeOutput(rawOutput, {
    normalizeWhitespace: config.normalizeOutputWhitespace ?? true,
    ignoreCase: config.ignoreOutputCase ?? false
  });
  const acceptableOutputs =
    config.expectedOutput?.map((output) =>
      normalizeRuntimeOutput(output, {
        normalizeWhitespace: config.normalizeOutputWhitespace ?? true,
        ignoreCase: config.ignoreOutputCase ?? false
      })
    ) ?? [];
  const outputMatches =
    acceptableOutputs.length === 0 || acceptableOutputs.some((output) => output === normalizedOutput);

  const extraChecks: ExerciseEvaluationCheck[] = [];

  if (config.requireRunBeforeCheck || config.requireRunBeforeComplete || acceptableOutputs.length > 0) {
    extraChecks.push({
      id: "browser-run",
      label: "Runs the code in the browser playground",
      passed: didRun,
      required: true,
      feedbackWhenMissing:
        "Run your code in the playground first so PyMentor can check what it actually prints."
    });
  }

  if (config.requireNoRuntimeError) {
    extraChecks.push({
      id: "no-runtime-error",
      label: "Runs without a Python error",
      passed: didRun && runtimeError.length === 0,
      required: true,
      feedbackWhenMissing:
        runtimeError.length > 0
          ? `Python still stops with an error: ${runtimeError}`
          : "Run the code first so PyMentor can confirm it finishes cleanly."
    });
  }

  if (acceptableOutputs.length > 0) {
    extraChecks.push({
      id: "expected-runtime-output",
      label: "Prints the expected output",
      passed: didRun && runtimeError.length === 0 && outputMatches,
      required: true,
      feedbackWhenMissing:
        runtimeError.length > 0
          ? "Fix the Python error first, then run the code again to compare the output."
          : "The output still does not match the result this exercise expects."
    });
  }

  const checks = [...baseResult.checks, ...extraChecks];
  const matchedRules = checks.filter((check) => check.passed).length;
  const totalRules = checks.length;
  const canComplete =
    baseResult.canComplete &&
    extraChecks.every((check) => check.passed) &&
    (!config.requireRunBeforeComplete || didRun);

  if ((config.requireRunBeforeCheck || config.requireRunBeforeComplete) && !didRun) {
    return {
      ...baseResult,
      state: "incomplete",
      summary: "Run your code once before PyMentor can check this exercise properly.",
      coaching:
        "For this step, the platform uses the browser output as part of the review. Run the code, look at the output, then check again.",
      matchedRules,
      totalRules,
      canComplete: false,
      checks
    };
  }

  if (runtimeError.length > 0 && config.requireNoRuntimeError) {
    return {
      ...baseResult,
      state: "partial",
      summary: "Your code is close, but Python is still stopping with an error.",
      coaching:
        "Use the runtime error as a clue, fix one line at a time, then run the code again before checking completion.",
      matchedRules,
      totalRules,
      canComplete: false,
      checks
    };
  }

  if (!canComplete && extraChecks.some((check) => !check.passed) && baseResult.state === "correct") {
    return {
      ...baseResult,
      state: "partial",
      summary: "The written answer looks good, but the browser run still needs one more fix.",
      coaching:
        "Look at the missing output-related check, adjust the code, and run it again so the result matches what the lesson is teaching.",
      matchedRules,
      totalRules,
      canComplete,
      checks
    };
  }

  return {
    ...baseResult,
    matchedRules,
    totalRules,
    canComplete,
    checks
  };
}

function normalizeRuntimeOutput(
  value: string,
  {
    normalizeWhitespace,
    ignoreCase
  }: {
    normalizeWhitespace: boolean;
    ignoreCase: boolean;
  }
) {
  const normalizedWhitespace = normalizeWhitespace
    ? value.trim().replace(/\r\n/g, "\n").replace(/[ \t]+/g, " ").replace(/\n+/g, "\n")
    : value.trim();

  return ignoreCase ? normalizedWhitespace.toLowerCase() : normalizedWhitespace;
}
