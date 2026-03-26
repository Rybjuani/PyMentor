"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, CircleAlert, Crosshair, LoaderCircle, ShieldCheck, Sparkles, Swords } from "lucide-react";
import { ExerciseData, ExerciseEvaluationResult, ExerciseExecutionResult, ProgressStatus } from "@/types";
import { Card } from "@/components/ui/card";
import { CodePanel } from "@/components/code-panel";
import { PythonPlayground } from "@/components/python-playground";
import { ProgressAction } from "@/components/progress-action";
import { Button } from "@/components/ui/button";

const feedbackMeta = {
  incomplete: {
    title: "Todavía estás armando la respuesta",
    tone: "border-amber-400/20 bg-amber-500/10 text-amber-100",
    icon: LoaderCircle
  },
  partial: {
    title: "La idea principal está, pero todavía hay un detalle por ajustar",
    tone: "border-rose-400/20 bg-rose-500/10 text-rose-100",
    icon: CircleAlert
  },
  correct: {
    title: "Esto ya parece listo para contar como completado",
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
  nextLessonHref
}: {
  exercise: ExerciseData;
  status: ProgressStatus;
  initialAnswer?: string;
  restoredDraftUpdatedAt?: string | Date | null;
  lessonHref: string;
  nextLessonHref?: string | null;
}) {
  const [answer, setAnswer] = useState(
    initialAnswer ??
      (exercise.responseFormat === "code"
        ? exercise.starterCode
        : "")
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
        summary: "Revisa tu respuesta para ver qué tan cerca está del objetivo de este ejercicio.",
        coaching:
          "El panel de feedback te va a mostrar qué partes ya están bien y cuál es el siguiente detalle a corregir.",
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
          summary: "Este ejercicio ya figura como completado en tu ruta.",
          coaching: "Igual puedes seguir practicando aquí, revisar la lección o continuar con el siguiente paso."
        }
      : latestEvaluation;
  const feedbackState = displayEvaluation.state;
  const feedback = feedbackMeta[feedbackState];
  const Icon = feedback.icon;
  const hasCheckedAnswer = evaluation !== null;
  const canComplete = status === "completed" || (hasCheckedAnswer && evaluation.canComplete);
  const isFoundationsCapstone = exercise.moduleSlug === "foundations-capstone";

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
    <div className="space-y-5">
      <Card id="desafio" className="mission-grid rounded-[30px] scroll-mt-24">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Ejercicio</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-50">{exercise.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{exercise.summary}</p>
          </div>
          <div className="rounded-[24px] border border-brand-400/15 bg-brand-500/10 px-4 py-3 text-sm font-semibold text-brand-100">
            {exercise.duration}
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[24px] border border-slate-800 bg-slate-950/70 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
              <Crosshair className="h-4 w-4 text-brand-300" />
              Tu tarea
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-400">{exercise.prompt}</p>
          </div>
          <div className="rounded-[24px] border border-brand-400/15 bg-brand-500/10 p-5 text-brand-100 shadow-[0_0_22px_rgba(29,211,139,0.08)]">
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-200">
              <ShieldCheck className="h-4 w-4" />
              Criterio de finalización
            </div>
            <p className="mt-3 text-sm leading-7">
              Este paso solo cuenta como completado cuando la respuesta muestra las señales clave que enseña la lección.
            </p>
          </div>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Formato</p>
            <p className="mt-2 text-sm font-semibold text-slate-100">
              {exercise.responseFormat === "code" ? "Código" : "Texto"}
            </p>
          </div>
          <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Estado</p>
            <p className="mt-2 text-sm font-semibold text-slate-100">
              {status === "completed" ? "Checkpoint cerrado" : status === "in_progress" ? "Checkpoint activo" : "Listo para empezar"}
            </p>
          </div>
          <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Meta</p>
            <p className="mt-2 text-sm font-semibold text-slate-100">Resolver con claridad, no con prisa</p>
          </div>
        </div>
      </Card>

      <div id="workspace" className="grid gap-5 xl:grid-cols-[1fr_0.9fr] scroll-mt-24">
        <Card className="rounded-[30px]">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-slate-50">Código inicial</h2>
            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-300 ring-1 ring-slate-700">
              {exercise.exerciseType === "bug_fix" ? "Práctica de depuración" : "Paso de práctica"}
            </span>
          </div>
          <div className="mt-4">
            <CodePanel code={exercise.starterCode} />
          </div>
        </Card>

        <Card className="mission-grid rounded-[30px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.08),transparent_28%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Cómo encararlo</p>
          <div className="mt-4 space-y-3">
            {exercise.instructions.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-[24px] border border-slate-800 bg-slate-950 p-4 text-sm text-slate-200">
            <p className="font-semibold text-white">Pistas útiles</p>
            <div className="mt-3 space-y-2">
              {exercise.hints.map((hint) => (
                <div key={hint} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-400" />
                  <span>{hint}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

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

      <Card className="rounded-[30px]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-50">{exercise.responseLabel}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {exercise.responseFormat === "code"
                ? exercise.executionValidation?.requireRunBeforeCheck
                  ? "Edita el código, ejecútalo en el playground y luego revisa tu respuesta para que PyMentor vea la salida real."
                  : "Edita el código con cuidado y luego revisa tu respuesta para recibir feedback específico del ejercicio."
              : "Escribe una respuesta corta y luego revísala para ver qué todavía necesita atención."}
            </p>
            {restoredDraftUpdatedAt ? (
              <p className="mt-2 text-xs font-medium text-brand-300">
                Recuperamos tu trabajo guardado para que puedas seguir desde donde lo dejaste.
              </p>
            ) : null}
          </div>
          <div className="w-full rounded-full bg-slate-900 px-3 py-1 text-center text-xs font-semibold text-slate-300 ring-1 ring-slate-700 sm:w-auto sm:text-left">
            {hasCheckedAnswer
              ? `${displayEvaluation.matchedRules} de ${displayEvaluation.totalRules} comprobaciones superadas`
              : "Revisa tu respuesta para recibir feedback guiado"}
          </div>
        </div>

        <textarea
          rows={11}
          className="mt-4 w-full rounded-[24px] border border-slate-800 bg-slate-950/80 px-4 py-4 font-mono text-sm leading-7 text-slate-100 outline-none focus:border-brand-400"
          value={answer}
          placeholder={exercise.responsePlaceholder}
          onChange={(event) => handleAnswerChange(event.target.value)}
        />

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {status === "not_started" ? (
            <ProgressAction entityType="exercise" slug={exercise.slug} status="in_progress" variant="secondary">
              Marcar ejercicio en progreso
            </ProgressAction>
          ) : null}
          <Button variant="secondary" className="w-full gap-2 sm:w-auto" onClick={() => void checkAnswer()} disabled={checkingAnswer}>
            {checkingAnswer ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
            Revisar mi respuesta
          </Button>
          <ProgressAction
            entityType="exercise"
            slug={exercise.slug}
            status="completed"
            disabled={!canComplete}
            requestBody={{ answer, execution }}
            onError={setRequestError}
          >
            Marcar ejercicio como completado
          </ProgressAction>
          <a
            href={lessonHref}
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 ring-1 ring-slate-700 sm:w-auto"
          >
            Revisar lección
          </a>
        </div>

        {!canComplete ? (
          <p className="mt-4 text-sm leading-6 text-slate-500">
            {exercise.executionValidation?.requireRunBeforeComplete
              ? "Ejecuta el código y completa la revisión primero. Este ejercicio usa la salida del navegador como parte de la finalización."
              : "Completa la revisión primero. El ejercicio solo se puede completar cuando una respuesta revisada muestra las comprobaciones clave de aprendizaje."}
          </p>
        ) : null}
        {requestError ? (
          <div className="mt-4 rounded-[20px] border border-rose-400/20 bg-rose-500/10 px-4 py-4 text-sm text-rose-100">
            {requestError}
          </div>
        ) : null}
      </Card>

      <Card id="feedback" className={`mission-grid rounded-[30px] border ${feedback.tone} scroll-mt-24`}>
        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-black/15 ring-1 ring-white/10">
            <Icon className={`h-5 w-5 ${feedbackState === "incomplete" ? "animate-spin" : ""}`} />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-70">Retroalimentación</p>
            <h3 className="mt-2 text-xl font-bold">{feedback.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7">{displayEvaluation.summary}</p>
            <p className="mt-2 max-w-2xl text-sm leading-7 opacity-90">{displayEvaluation.coaching}</p>
          </div>
        </div>

        {displayEvaluation.checks.length > 0 ? (
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {displayEvaluation.checks.map((check) => (
              <div
                key={check.id}
                className={`rounded-[22px] border px-4 py-4 text-sm ${
                  check.passed
                    ? "border-emerald-400/20 bg-black/15 text-slate-200"
                    : "border-white/10 bg-black/10 text-slate-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      check.passed ? "bg-emerald-500" : "bg-slate-400"
                    }`}
                  />
                  <p className="font-semibold text-slate-50">{check.label}</p>
                </div>
                <p className="mt-2 leading-6">
                  {check.passed ? "Esta parte se ve bien." : check.feedbackWhenMissing}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-[22px] bg-black/10 px-4 py-4 text-sm text-slate-300">
            Ejecuta la revisión de la respuesta para ver feedback específico desde el servidor.
          </div>
        )}

        <div id="siguiente-paso" className="mt-5 rounded-[24px] border border-white/10 bg-black/10 p-4 text-sm text-slate-300 scroll-mt-24">
          <div className="flex items-center gap-2 font-semibold text-slate-50">
            <Sparkles className="h-4 w-4 text-brand-300" />
            Siguiente movimiento
          </div>
          <p className="mt-2 leading-6">
            {status === "completed"
              ? isFoundationsCapstone
                ? "Este paso final ya quedó marcado. Desde aquí puedes volver al panel o entrar a la nueva etapa con la base ya cerrada."
                : "Este ejercicio ya está marcado como completado. Puedes volver a la lección o seguir cuando quieras."
              : canComplete
                ? isFoundationsCapstone
                  ? "Tu respuesta ya sostiene este cierre de fundamentos. Márcala como completada para cerrar la etapa y abrir la siguiente con claridad."
                  : "Tu respuesta ya se ve suficientemente sólida para este paso. Márcala como completada para actualizar tu ruta."
                : isFoundationsCapstone
                  ? "Usa las comprobaciones que faltan como guía. Este capstone busca que cierres la etapa con una solución clara, no perfecta."
              : "Usa las comprobaciones que faltan como guía y luego vuelve a revisar la respuesta."}
            </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                <Swords className="h-4 w-4 text-brand-300" />
                Recompensa
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Cuando este ejercicio se cierre, tu ruta mostrará un avance visible y más sólido.
              </p>
            </div>
            <div className="rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                <ShieldCheck className="h-4 w-4 text-brand-300" />
                Enfoque
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Aquí importa sostener la idea principal y el resultado, no buscar una perfección rígida.
              </p>
            </div>
          </div>
          {nextLessonHref ? (
            <a href={nextLessonHref} className="mt-4 inline-flex text-sm font-semibold text-brand-300">
              Continuar a la siguiente lección
            </a>
          ) : isFoundationsCapstone ? (
            <a href="/dashboard" className="mt-4 inline-flex text-sm font-semibold text-brand-300">
              Volver al panel de cierre
            </a>
          ) : null}
        </div>
      </Card>
    </div>
  );
}
