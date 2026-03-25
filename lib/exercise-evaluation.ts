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
    successSummary: "Esta respuesta se ve sólida para este paso de aprendizaje.",
    successCoaching:
      "Corregiste lo importante sin cambiar el objetivo del ejercicio. Ese es el hábito que queremos construir.",
    partialSummary: "Vas bien. Todavía falta ajustar uno o dos detalles importantes.",
    partialCoaching:
      "Mantén la idea principal y revisa las líneas despacio: sintaxis, puntuación y la salida exacta que espera el ejercicio.",
    incompleteSummary: "Tu respuesta todavía no muestra las señales principales que busca este ejercicio.",
    incompleteCoaching:
      "Empieza por la primera instrucción, haz el cambio más pequeño posible y vuelve a revisar qué cambió."
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
      label: "Coincide con la salida esperada en el orden correcto",
      passed: matches,
      required: true,
      feedbackWhenMissing:
        "Lee el programa de arriba hacia abajo y escribe las líneas impresas en ese mismo orden."
    }
  ];

  return buildResult({
    evaluatorType: "exact_answer",
    checks,
    hasEnoughContent: trimmedAnswer.length >= (evaluator.minLength ?? 3),
    passingScore: 1,
    successSummary: "Captaste correctamente la salida esperada.",
    successCoaching:
      "Eso muestra que estás leyendo el programa en secuencia, que es uno de los hábitos más importantes al empezar con Python.",
    partialSummary: "Tu respuesta tiene algo útil, pero la salida final todavía no coincide del todo.",
    partialCoaching:
      "Vuelve a comparar cada línea de salida con el programa. A veces el problema es solo un cambio pequeño de orden.",
    incompleteSummary: "Agrega la salida que esperas antes de revisar este paso.",
    incompleteCoaching:
      "Escribe una línea de salida por renglón. Eso facilita comparar tu idea con lo que mostraría el programa."
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
      label: "Explica las ideas en un orden claro",
      passed: ordered,
      required: true,
      feedbackWhenMissing:
        "Intenta explicar los pasos en secuencia en vez de mezclarlos."
    });
  }

  return buildResult({
    evaluatorType: "ordered_concepts",
    checks,
    hasEnoughContent: trimmedAnswer.length >= (evaluator.minLength ?? 18),
    passingScore: evaluator.passingScore ?? checks.length,
    successSummary: "Tu explicación cubre la idea principal con claridad.",
    successCoaching:
      "Nombraste los conceptos clave de una forma que un principiante puede seguir. Eso es buen razonamiento, no solo memoria de sintaxis.",
    partialSummary: "Tu explicación va en la dirección correcta, pero todavía le falta una idea que esta lección quiere reforzar.",
    partialCoaching:
      "Usa la comprobación faltante como guía y agrega una oración corta sobre esa idea en vez de reescribir todo.",
    incompleteSummary: "Agrega una explicación breve antes de revisar este paso.",
    incompleteCoaching:
      "Mantenlo simple. Unas pocas líneas claras que nombren las ideas clave alcanzan para este ejercicio."
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
        "Mantén primero la rama `if` y después la rama `else` para que el código se lea como una sola decisión clara."
    });
  }

  return buildResult({
    evaluatorType: "structure_check",
    checks,
    hasEnoughContent: trimmedAnswer.length >= (evaluator.minLength ?? 18),
    passingScore: evaluator.passingScore ?? checks.length,
    successSummary: "La estructura de esta respuesta se ve correcta para el objetivo de la lección.",
    successCoaching:
      "Corregiste tanto la sintaxis como la forma del código, que es exactamente lo que este ejercicio quiere enseñar.",
    partialSummary: "La estructura está mejorando, pero una parte importante todavía está fuera de lugar.",
    partialCoaching:
      "Concéntrate en la comprobación estructural que falta en vez de reescribir toda la respuesta. Un ajuste cuidadoso suele alcanzar.",
    incompleteSummary: "La respuesta todavía está demasiado incompleta para confirmar la estructura.",
    incompleteCoaching:
      "Empieza por corregir la línea de la condición y luego asegúrate de que cada bloque siga presente y legible."
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
      throw new Error("Tipo de evaluador no compatible.");
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
      label: "Ejecuta el código en el playground del navegador",
      passed: didRun,
      required: true,
      feedbackWhenMissing:
        "Ejecuta primero tu código en el playground para que PyMentor pueda revisar lo que realmente imprime."
    });
  }

  if (config.requireNoRuntimeError) {
    extraChecks.push({
      id: "no-runtime-error",
      label: "Se ejecuta sin un error de Python",
      passed: didRun && runtimeError.length === 0,
      required: true,
      feedbackWhenMissing:
        runtimeError.length > 0
          ? `Python todavía se detiene con un error: ${runtimeError}`
          : "Ejecuta primero el código para que PyMentor pueda confirmar que termina sin problemas."
    });
  }

  if (acceptableOutputs.length > 0) {
    extraChecks.push({
      id: "expected-runtime-output",
      label: "Imprime la salida esperada",
      passed: didRun && runtimeError.length === 0 && outputMatches,
      required: true,
      feedbackWhenMissing:
        runtimeError.length > 0
          ? "Corrige primero el error de Python y luego vuelve a ejecutar el código para comparar la salida."
          : "La salida todavía no coincide con el resultado que espera este ejercicio."
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
      summary: "Ejecuta tu código una vez antes de que PyMentor pueda revisar bien este ejercicio.",
      coaching:
        "En este paso, la plataforma usa la salida del navegador como parte de la revisión. Ejecuta el código, mira la salida y luego vuelve a revisar.",
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
      summary: "Tu código está cerca, pero Python todavía se detiene con un error.",
      coaching:
        "Usa el error como una pista, corrige una línea por vez y luego vuelve a ejecutar el código antes de revisar la finalización.",
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
      summary: "La respuesta escrita se ve bien, pero la ejecución en el navegador todavía necesita un ajuste más.",
      coaching:
        "Mira la comprobación de salida que falta, ajusta el código y vuelve a ejecutarlo para que el resultado coincida con lo que enseña la lección.",
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
