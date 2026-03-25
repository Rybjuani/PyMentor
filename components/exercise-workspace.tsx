"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, CircleAlert, LoaderCircle, Sparkles } from "lucide-react";
import { ExerciseData, ExerciseEvaluationResult, ProgressStatus } from "@/types";
import { Card } from "@/components/ui/card";
import { CodePanel } from "@/components/code-panel";
import { PythonPlayground } from "@/components/python-playground";
import { ProgressAction } from "@/components/progress-action";
import { Button } from "@/components/ui/button";

const feedbackMeta = {
  incomplete: {
    title: "You are still shaping the answer",
    tone: "border-amber-200 bg-amber-50 text-amber-900",
    icon: LoaderCircle
  },
  partial: {
    title: "The main idea is there, but one detail still needs work",
    tone: "border-rose-200 bg-rose-50 text-rose-900",
    icon: CircleAlert
  },
  correct: {
    title: "This looks ready to count as completed",
    tone: "border-emerald-200 bg-emerald-50 text-emerald-900",
    icon: CheckCircle2
  }
} as const;

export function ExerciseWorkspace({
  exercise,
  status,
  lessonHref,
  nextLessonHref
}: {
  exercise: ExerciseData;
  status: ProgressStatus;
  lessonHref: string;
  nextLessonHref?: string | null;
}) {
  const [answer, setAnswer] = useState(
    exercise.responseFormat === "code"
      ? exercise.starterCode
      : ""
  );
  const [evaluation, setEvaluation] = useState<ExerciseEvaluationResult | null>(null);
  const [checkingAnswer, setCheckingAnswer] = useState(false);
  const [requestError, setRequestError] = useState<string | null>(null);

  const latestEvaluation = useMemo(
    () =>
      evaluation ?? {
        state: "incomplete" as const,
        summary: "Check your answer to see how close it is to the goal of this exercise.",
        coaching:
          "The feedback panel will point out the parts that already look strong and the next detail to fix.",
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
          summary: "This exercise is already completed in your roadmap.",
          coaching: "You can still practice here, review the lesson, or continue to the next step."
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
          answer
        })
      });

      const payload = (await response.json().catch(() => null)) as
        | ExerciseEvaluationResult
        | { error?: string }
        | null;

      if (!response.ok) {
        setRequestError(payload && "error" in payload ? payload.error ?? "Could not evaluate this answer." : "Could not evaluate this answer.");
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
  }

  return (
    <div className="space-y-5">
      <Card className="rounded-[30px]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-500">Exercise</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">{exercise.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">{exercise.summary}</p>
          </div>
          <div className="rounded-[24px] bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">
            {exercise.duration}
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[24px] bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">Your task</p>
            <p className="mt-3 text-sm leading-7 text-slate-700">{exercise.prompt}</p>
          </div>
          <div className="rounded-[24px] bg-brand-50 p-5 text-brand-900">
            <p className="text-sm font-semibold text-brand-700">Completion standard</p>
            <p className="mt-3 text-sm leading-7">
              This step only counts as complete when the answer shows the key signals the lesson is teaching.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <Card className="rounded-[30px]">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-slate-900">Starter code</h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {exercise.exerciseType === "bug_fix" ? "Bug-fix practice" : "Practice step"}
            </span>
          </div>
          <div className="mt-4">
            <CodePanel code={exercise.starterCode} />
          </div>
        </Card>

        <Card className="rounded-[30px] bg-[linear-gradient(180deg,rgba(243,248,255,0.8),rgba(255,255,255,1))]">
          <p className="text-sm font-semibold text-slate-500">How to approach it</p>
          <div className="mt-4 space-y-3">
            {exercise.instructions.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-[24px] bg-slate-950 p-4 text-sm text-slate-200">
            <p className="font-semibold text-white">Helpful hints</p>
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

      {exercise.playground ? <PythonPlayground config={exercise.playground} compact /> : null}

      <Card className="rounded-[30px]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">{exercise.responseLabel}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {exercise.responseFormat === "code"
                ? "Edit the code carefully, then check your answer to get exercise-specific feedback."
                : "Write a short answer, then check it to see what still needs attention."}
            </p>
          </div>
          <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {hasCheckedAnswer
              ? `${displayEvaluation.matchedRules} of ${displayEvaluation.totalRules} learning checks matched`
              : "Check your answer for guided feedback"}
          </div>
        </div>

        <textarea
          rows={13}
          className="mt-4 w-full rounded-[24px] border border-slate-200 px-4 py-4 font-mono text-sm leading-7 outline-none focus:border-brand-300"
          value={answer}
          placeholder={exercise.responsePlaceholder}
          onChange={(event) => handleAnswerChange(event.target.value)}
        />

        <div className="mt-4 flex flex-wrap gap-3">
          {status === "not_started" ? (
            <ProgressAction entityType="exercise" slug={exercise.slug} status="in_progress" variant="secondary">
              Mark exercise in progress
            </ProgressAction>
          ) : null}
          <Button variant="secondary" className="gap-2" onClick={() => void checkAnswer()} disabled={checkingAnswer}>
            {checkingAnswer ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
            Check my answer
          </Button>
          <ProgressAction
            entityType="exercise"
            slug={exercise.slug}
            status="completed"
            disabled={!canComplete}
            requestBody={{ answer }}
            onError={setRequestError}
          >
            Mark exercise complete
          </ProgressAction>
          <a
            href={lessonHref}
            className="inline-flex items-center justify-center rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-800"
          >
            Review lesson
          </a>
        </div>

        {!canComplete ? (
          <p className="mt-4 text-sm leading-6 text-slate-500">
            Complete the check first. The exercise only unlocks completion after a reviewed answer shows the key learning checks.
          </p>
        ) : null}
        {requestError ? (
          <div className="mt-4 rounded-[20px] border border-rose-200 bg-rose-50 px-4 py-4 text-sm text-rose-800">
            {requestError}
          </div>
        ) : null}
      </Card>

      <Card className={`rounded-[30px] border ${feedback.tone}`}>
        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70">
            <Icon className={`h-5 w-5 ${feedbackState === "incomplete" ? "animate-spin" : ""}`} />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-70">Feedback</p>
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
                    ? "border-emerald-200 bg-white/80 text-slate-800"
                    : "border-white/40 bg-white/60 text-slate-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      check.passed ? "bg-emerald-500" : "bg-slate-400"
                    }`}
                  />
                  <p className="font-semibold text-slate-900">{check.label}</p>
                </div>
                <p className="mt-2 leading-6">
                  {check.passed ? "This part looks good." : check.feedbackWhenMissing}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-[22px] bg-white/70 px-4 py-4 text-sm text-slate-700">
            Run the answer check to see exercise-specific feedback from the server.
          </div>
        )}

        <div className="mt-5 rounded-[24px] bg-white/70 p-4 text-sm text-slate-700">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <Sparkles className="h-4 w-4 text-brand-600" />
            Next move
          </div>
          <p className="mt-2 leading-6">
            {status === "completed"
              ? "This exercise is already marked complete. You can revisit the lesson or move on when you are ready."
              : canComplete
                ? "Your answer looks strong enough for this step. Mark it complete to update your roadmap."
                : "Use the missing checks above as your guide, then run the answer check again."}
          </p>
          {nextLessonHref ? (
            <a href={nextLessonHref} className="mt-4 inline-flex text-sm font-semibold text-brand-600">
              Continue to the next lesson
            </a>
          ) : null}
        </div>
      </Card>
    </div>
  );
}
