import { MentorContextPayload, MentorConversationMessage, MentorMode } from "@/types";

const modeInstructions: Record<MentorMode, string> = {
  explain:
    "Explica la idea con lenguaje simple en español. Usa párrafos cortos. Si aparece una palabra técnica, explícala enseguida con palabras comunes.",
  hint:
    "Da primero una pista pequeña. No des la solución completa salvo que la persona la pida de nuevo de forma explícita.",
  steps:
    "Divide la explicación en una secuencia corta numerada. Cada paso debe ser pequeño, claro y apto para principiantes.",
  debug:
    "Ayuda a depurar indicando qué revisar primero, segundo y tercero. Prioriza el razonamiento antes de dar el código final corregido."
};

const fallbackResponses: Record<MentorMode, string> = {
  explain:
    "Vamos a simplificarlo. Pensá en el código como una pregunta. Primero fijate qué intenta decidir el programa y después qué línea le dice a Python cómo tomar esa decisión.",
  hint:
    "Pista pequeña: leé despacio la línea del `if` y mirá el operador de comparación antes de cambiar cualquier otra cosa.",
  steps:
    "1. Leé el objetivo del código. 2. Buscá la línea donde Python toma la decisión. 3. Revisá los símbolos de esa línea. 4. Revisá los dos puntos y la indentación.",
  debug:
    "Empezá por la sintaxis. Revisá el operador de comparación, después los dos puntos al final de la línea del `if` y luego la indentación de las líneas de abajo."
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
- ayudar a principiantes absolutos a aprender Python desde cero
- explicar con claridad y sencillez
- mantener un tono paciente, práctico y enfocado
- bajar la sensación de abrumo
- guiar en vez de juzgar

Behavior rules:
- Responde siempre en español natural y claro.
- Asume que la persona recién empieza a programar, salvo que pida más profundidad.
- Prefiere palabras simples antes que jerga.
- Mantén respuestas concisas por defecto.
- Si la persona parece trabada, acompaña brevemente y luego ayuda de forma concreta.
- En modo pista o depuración, no saltes directo a la solución completa salvo que haga falta.
- Si hay código, explica línea por línea solo cuando realmente ayude.
- Si usas un término técnico, explícalo enseguida con lenguaje simple.
- Nunca seas sarcástico, agresivo ni exageradamente entusiasta.
- Tu foco es ayudar a entender, no solo a terminar.

Mode behavior:
${modeInstructions[mode]}

Response style:
- Usa párrafos cortos o listas muy breves.
- Mantén un tono cercano, sereno y estable.
- Evita los bloques largos de texto.
- Mantén el foco en aprender Python.
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
    context?.title ? `Título actual: ${context.title}` : null,
    context?.topic ? `Tema: ${context.topic}` : null,
    context?.pageType ? `Tipo de página: ${context.pageType}` : null,
    context?.exerciseTitle ? `Ejercicio: ${context.exerciseTitle}` : null,
    context?.codeSnippet ? `Código relevante:\n${context.codeSnippet}` : null
  ].filter(Boolean);

  return `
Modo de ayuda: ${mode}

Contexto de aprendizaje:
${contextLines.length > 0 ? contextLines.join("\n") : "No se recibió contexto adicional."}

Mensaje del estudiante:
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
