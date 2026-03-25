"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, CircleAlert, LoaderCircle, Sparkles } from "lucide-react";
import { ExerciseData, ProgressStatus } from "@/types";
import { Card } from "@/components/ui/card";
import { CodePanel } from "@/components/code-panel";
import { ProgressAction } from "@/components/progress-action";

type FeedbackState = "working" | "needs-improvement" | "great-job";

const feedbackMeta = {
  working: {
    title: "You are still working on it",
    description:
      "No pressure. Read the key line out loud and change one detail at a time.",
    tone: "border-amber-200 bg-amber-50 text-amber-800",
    icon: LoaderCircle
  },
  "needs-improvement": {
    title: "Nice attempt, but one or two details still need attention",
    description:
      "The idea is close. Check the syntax first, then re-read the indentation.",
    tone: "border-rose-200 bg-rose-50 text-rose-900",
    icon: CircleAlert
  },
  "great-job": {
    title: "Great job, this step is complete",
    description:
      "You fixed the problem calmly and kept the code readable. That is real beginner progress.",
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
  const [answer, setAnswer] = useState(`# Rewrite the program here\n${exercise.starterCode}`);
  const [state, setState] = useState<FeedbackState>(
    status === "completed" ? "great-job" : "working"
  );

  const checklist = useMemo(
    () =>
      exercise.successCriteria.map((item) => ({
        label: item,
        done:
          (item.includes("comparison") && answer.includes(">=")) ||
          (item.includes("colon") && answer.includes(":")) ||
          (item.includes("prints `Adult`") && answer.includes("Adult")) ||
          (!item.includes("comparison") &&
            !item.includes("colon") &&
            !item.includes("prints `Adult`") &&
            answer.trim().length > 0)
      })),
    [answer, exercise.successCriteria]
  );

  const feedback = feedbackMeta[state];
  const Icon = feedback.icon;

  return (
    <div className="space-y-5">
      <Card className="rounded-[30px]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-500">Exercise</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">{exercise.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">
              {exercise.summary}
            </p>
          </div>
          <div className="rounded-[24px] bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">
            {exercise.duration}
          </div>
        </div>
      </Card>

      <div className="grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <Card className="rounded-[30px]">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-slate-900">Starter code</h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              Debugging step
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
            <p className="font-semibold text-white">Completion cues</p>
            <div className="mt-3 space-y-2">
              {checklist.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className={`h-2.5 w-2.5 rounded-full ${item.done ? "bg-emerald-400" : "bg-slate-500"}`} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <Card className="rounded-[30px]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-slate-900">Your answer</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setState("working")}
              className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700"
            >
              Working
            </button>
            <button
              onClick={() => setState("needs-improvement")}
              className="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700"
            >
              Needs improvement
            </button>
            <button
              onClick={() => setState("great-job")}
              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
            >
              Great job
            </button>
          </div>
        </div>

        <textarea
          rows={13}
          className="mt-4 w-full rounded-[24px] border border-slate-200 px-4 py-4 font-mono text-sm leading-7 outline-none focus:border-brand-300"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />

        <div className="mt-4 flex flex-wrap gap-3">
          {status === "not_started" ? (
            <ProgressAction entityType="exercise" slug={exercise.slug} status="in_progress" variant="secondary">
              Mark exercise in progress
            </ProgressAction>
          ) : null}
          <ProgressAction entityType="exercise" slug={exercise.slug} status="completed">
            Mark exercise complete
          </ProgressAction>
          <a
            href={lessonHref}
            className="inline-flex items-center justify-center rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-800"
          >
            Review lesson
          </a>
        </div>
      </Card>

      <Card className={`rounded-[30px] border ${feedback.tone}`}>
        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70">
            <Icon className={`h-5 w-5 ${state === "working" ? "animate-spin" : ""}`} />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-70">Feedback</p>
            <h3 className="mt-2 text-xl font-bold">{feedback.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7">{feedback.description}</p>
          </div>
        </div>

        <div className="mt-5 rounded-[24px] bg-white/70 p-4 text-sm text-slate-700">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <Sparkles className="h-4 w-4 text-brand-600" />
            Next move
          </div>
          <p className="mt-2 leading-6">
            {status === "completed"
              ? "This exercise is marked complete. Use the next lesson link to keep your momentum going."
              : "When the code feels stable, mark the exercise complete so your roadmap and dashboard can move forward with you."}
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
