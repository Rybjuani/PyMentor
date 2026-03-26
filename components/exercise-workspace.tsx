"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, CircleAlert, LoaderCircle } from "lucide-react";
import { ExerciseData, ExerciseEvaluationResult, ExerciseExecutionResult, ProgressStatus } from "@/types";
import { CodePanel } from "@/components/code-panel";
import { PythonPlayground } from "@/components/python-playground";
import { ProgressAction } from "@/components/progress-action";
import { Button } from "@/components/ui/button";

const feedbackMeta = {
  incomplete: {
    title: "Todavía no alcanza",
    tone: "border-amber-400/20 bg-amber-500/10 text-amber-100",
    icon: LoaderCircle
  },
  partial: {
    title: "Vas bien, pero falta un ajuste",
    tone: "border-rose-400/20 bg-rose-500/10 text-rose-100",
    icon: CircleAlert
  },
  correct: {
    title: "Respuesta lista",
    tone: "border-emerald-400/20 bg-emerald-500/10 text-emerald-100",
    icon: CheckCircle2
  }
} as const;

export function ExerciseWorkspace({
  exercise,
  status,
  initialAnswer,
  restoredDraftUpdatedAt,
  lessonHref,
  nextLessonHref,
  isModuleCapstone = false,
  isFinalModuleCapstone = false
}: {
  exercise: ExerciseData;
  status: ProgressStatus;
  initialAnswer?: string;
  restoredDraftUpdatedAt?: string | Date | null;
  lessonHref: string;
  nextLessonHref?: string | null;
  isModuleCapstone?: boolean;
  isFinalModuleCapstone?: boolean;
}) {
  const [answer, setAnswer] = useState(
    initialAnswer ?? (exercise.responseFormat === "code" ? exercise.starterCode : "")
  );
  const [evaluation, setEvaluation] = useState<ExerciseEvaluationResult | null>(null);
  const [checkingAnswer, setCheckingAnswer] = useState(false);
  const [requestError, setRequestError] = useState<string | null>(null);
  const [execution, setExecution] = useState<ExerciseExecutionResult>({
    didRun: false,
    output: "",
    error: ""
  });

  const latestEvaluation = useMemo(
    () =>
      evaluation ?? {
        state: "incomplete" as const,
        summary: "Revisa tu respuesta para ver qué tan cerca está del objetivo.",
        coaching: "Primero confirma la idea principal. Después corrige el detalle que falta.",
        evaluatorType: exercise.evaluator.type,
        matchedRules: 0,
        totalRules:
          exercise.evaluator.type === "rule_based"
            ? exercise.evaluator.rules.length
            : exercise.evaluator.type === "exact_answer"
              ? 1
              : exercise.evaluator.type === "ordered_concepts"
                ? exercise.evaluator.concepts.length + (exercise.evaluator.requireOrder ? 1 : 0)
                : exercise.evaluator.requiredPatterns.length +
                  (exercise.evaluator.forbiddenPatterns?.length ?? 0) +
                  (exercise.evaluator.orderedPatternIds?.length ? 1 : 0),
        canComplete: false,
        checks: []
      },
    [evaluation, exercise.evaluator]
  );

  const displayEvaluation =
    status === "completed"
      ? {
          ...latestEvaluation,
          state: "correct" as const,
          summary: "Este ejercicio ya figura como completado en tu progreso.",
          coaching: "Puedes seguir probando variantes, volver a la lección o pasar al siguiente paso."
        }
      : latestEvaluation;

  const feedbackState = displayEvaluation.state;
  const feedback = feedbackMeta[feedbackState];
  const Icon = feedback.icon;
  const hasCheckedAnswer = evaluation !== null;
  const canComplete = status === "completed" || (hasCheckedAnswer && evaluation.canComplete);

  async function checkAnswer() {
    setCheckingAnswer(true);
    setRequestError(null);

    try {
      const response = await fetch("/api/exercises/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          exerciseSlug: exercise.slug,
          answer,
          execution
        })
      });

      const payload = (await response.json().catch(() => null)) as
        | ExerciseEvaluationResult
        | { error?: string }
        | null;

      if (!response.ok) {
        setRequestError(payload && "error" in payload ? payload.error ?? "No se pudo evaluar esta respuesta." : "No se pudo evaluar esta respuesta.");
        return;
      }

      setEvaluation(payload as ExerciseEvaluationResult);
    } finally {
      setCheckingAnswer(false);
    }
  }

  function handleAnswerChange(value: string) {
    setAnswer(value);
    setEvaluation(null);
    setRequestError(null);
    if (exercise.executionValidation) {
      setExecution({
        didRun: false,
        output: "",
        error: ""
      });
    }
  }

  return (
    <article className="rounded-[22px] border border-slate-800 bg-[linear-gradient(180deg,rgba(11,20,31,0.96),rgba(8,15,24,0.98))] p-5">
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Qué tienes que hacer</p>
        <h2 className="mt-2 text-lg font-bold text-slate-50">{exercise.prompt}</h2>
        <div className="mt-3 rounded-[18px] border border-slate-800 bg-slate-950/55 px-4 py-3 text-sm text-slate-300">
          {exercise.instructions[0]}
        </div>
      </section>

      <section className="mt-8 border-t border-slate-800 pt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Práctica principal</p>
        <div className="mt-4">
          {exercise.playground ? (
            <PythonPlayground
              config={exercise.playground}
              compact
              initialCode={initialAnswer}
              restoredDraftUpdatedAt={restoredDraftUpdatedAt}
              code={exercise.responseFormat === "code" ? answer : undefined}
              onCodeChange={exercise.responseFormat === "code" ? handleAnswerChange : undefined}
              onRunComplete={setExecution}
              draftScope={exercise.responseFormat === "code" ? "exercise" : undefined}
              draftSlug={exercise.responseFormat === "code" ? exercise.slug : undefined}
            />
          ) : null}
        </div>

        <div className="mt-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold text-slate-50">{exercise.responseLabel}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                {exercise.responseFormat === "code"
                  ? "Edita la solución, ejecuta si hace falta y luego revísala."
                  : "Escribe una respuesta breve y revísala contra el objetivo."}
              </p>
            </div>
            <div className="rounded-full border border-slate-800 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-300">
              {hasCheckedAnswer
                ? `${displayEvaluation.matchedRules} de ${displayEvaluation.totalRules} comprobaciones`
                : "Sin revisar"}
            </div>
          </div>

          <textarea
            rows={exercise.responseFormat === "code" ? 10 : 7}
            className="mt-4 w-full rounded-[18px] border border-slate-800 bg-slate-950/90 px-4 py-4 font-mono text-sm leading-7 text-slate-100 outline-none focus:border-brand-400"
            value={answer}
            placeholder={exercise.responsePlaceholder}
            onChange={(event) => handleAnswerChange(event.target.value)}
          />

          {restoredDraftUpdatedAt ? (
            <p className="mt-3 text-xs font-medium text-brand-300">
              Recuperamos tu trabajo guardado.
            </p>
          ) : null}
        </div>
      </section>

      <section className="mt-8 border-t border-slate-800 pt-8">
        <div className={`rounded-[18px] border px-4 py-4 text-sm ${feedback.tone}`}>
          <div className="flex items-start gap-3">
            <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${feedbackState === "incomplete" ? "animate-spin" : ""}`} />
            <div>
              <p className="font-semibold">{feedback.title}</p>
              <p className="mt-1 leading-6">{displayEvaluation.summary}</p>
              <p className="mt-1 leading-6 opacity-90">{displayEvaluation.coaching}</p>
            </div>
          </div>
        </div>

        <details className="mt-4 rounded-[16px] border border-slate-800 bg-slate-950/60 px-4 py-3">
          <summary className="cursor-pointer text-sm font-semibold text-slate-200">
            Ver código base, pasos y pistas
          </summary>
          <div className="mt-3 grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0">
              <CodePanel code={exercise.starterCode} />
            </div>
            <div className="space-y-4">
              <div className="space-y-2 text-sm leading-6 text-slate-400">
                {exercise.instructions.slice(1).map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
              <div className="space-y-2 text-sm leading-6 text-slate-400">
                {exercise.hints.map((hint) => (
                  <div key={hint}>{hint}</div>
                ))}
              </div>
            </div>
          </div>
        </details>

        {displayEvaluation.checks.length > 0 ? (
          <details className="mt-4 rounded-[16px] border border-slate-800 bg-slate-950/60 px-4 py-3">
            <summary className="cursor-pointer text-sm font-semibold text-slate-200">
              Ver comprobaciones
            </summary>
            <div className="mt-3 space-y-3">
              {displayEvaluation.checks.map((check) => (
                <div key={check.id} className="text-sm leading-6 text-slate-400">
                  <span className="font-semibold text-slate-100">{check.label}:</span>{" "}
                  {check.passed ? "bien" : check.feedbackWhenMissing}
                </div>
              ))}
            </div>
          </details>
        ) : null}

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {status === "not_started" ? (
            <ProgressAction entityType="exercise" slug={exercise.slug} status="in_progress" variant="secondary">
              En progreso
            </ProgressAction>
          ) : null}
          <Button variant="secondary" className="w-full gap-2 sm:w-auto" onClick={() => void checkAnswer()} disabled={checkingAnswer}>
            {checkingAnswer ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
            Revisar respuesta
          </Button>
          <ProgressAction
            entityType="exercise"
            slug={exercise.slug}
            status="completed"
            disabled={!canComplete}
            requestBody={{ answer, execution }}
            onError={setRequestError}
          >
            Completar ejercicio
          </ProgressAction>
          <a
            href={lessonHref}
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 ring-1 ring-slate-700 sm:w-auto"
          >
            Volver a la lección
          </a>
        </div>

        {!canComplete ? (
          <p className="mt-4 text-sm leading-6 text-slate-500">
            {exercise.executionValidation?.requireRunBeforeComplete
              ? "Ejecuta y revisa la respuesta antes de marcarla."
              : "Revisa la respuesta antes de marcarla como completada."}
          </p>
        ) : null}

        {requestError ? (
          <div className="mt-4 rounded-[18px] border border-rose-400/20 bg-rose-500/10 px-4 py-4 text-sm text-rose-100">
            {requestError}
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-4 text-sm">
          <div className="text-slate-400">
            {status === "completed"
              ? isFinalModuleCapstone
                ? "Este cierre ya cuenta dentro de la base actual."
                : isModuleCapstone
                  ? "Este cierre ya cuenta para abrir el siguiente módulo."
                  : "Ejercicio resuelto."
              : canComplete
                ? "La respuesta ya se sostiene. Puedes cerrarla."
                : "Ajusta lo que falta y vuelve a revisar."}
          </div>
          <div className="flex flex-wrap gap-4">
            {nextLessonHref ? (
              <a href={nextLessonHref} className="font-semibold text-brand-300">
                {isModuleCapstone ? "Abrir siguiente módulo" : "Siguiente lección"}
              </a>
            ) : null}
            {isFinalModuleCapstone ? (
              <a href="/dashboard" className="font-semibold text-brand-300">
                Volver al panel
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </article>
  );
}
