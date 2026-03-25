"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, CircleAlert, LoaderCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CodePanel } from "@/components/code-panel";

type FeedbackState = "working" | "needs-improvement" | "great-job";

const feedbackMeta = {
  working: {
    title: "You are still working on it",
    description:
      "No pressure. Read your condition out loud and make sure the `if` line ends with a colon.",
    tone: "border-amber-200 bg-amber-50 text-amber-800",
    icon: LoaderCircle
  },
  "needs-improvement": {
    title: "Nice attempt, but two details still need attention",
    description:
      "The logic is close. Check the comparison operator and make sure the block under `if` is indented consistently.",
    tone: "border-rose-200 bg-rose-50 text-rose-900",
    icon: CircleAlert
  },
  "great-job": {
    title: "Great job, this version is ready",
    description:
      "You fixed the syntax and kept the logic easy to read. That is exactly the kind of small win that builds confidence.",
    tone: "border-emerald-200 bg-emerald-50 text-emerald-900",
    icon: CheckCircle2
  }
} as const;

export function ExerciseWorkspace() {
  const [answer, setAnswer] = useState(
    "# Rewrite the program here\nage = 18\n\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')"
  );
  const [state, setState] = useState<FeedbackState>("working");

  const checklist = useMemo(
    () => [
      {
        label: "Uses a valid comparison such as `>=`",
        done: answer.includes(">=")
      },
      {
        label: "Ends the `if` line with a colon",
        done: answer.includes(":")
      },
      {
        label: "Keeps the print statements indented",
        done: answer.includes("\n    print")
      }
    ],
    [answer]
  );

  const feedback = feedbackMeta[state];
  const Icon = feedback.icon;

  return (
    <div className="space-y-5">
      <Card className="rounded-[30px]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-500">Challenge brief</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Fix the conditional so the program can run
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">
              The goal is not just to get the right answer. The goal is to notice the syntax details beginners often miss and learn how to spot them calmly.
            </p>
          </div>
          <div className="rounded-[24px] bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-700">
            Estimated time: 8 minutes
          </div>
        </div>
      </Card>

      <div className="grid gap-5 xl:grid-cols-[1fr_0.9fr]">
        <Card className="rounded-[30px]">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-slate-900">Broken code</h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              Syntax bug
            </span>
          </div>
          <div className="mt-4">
            <CodePanel
              code={"age = 18\n\nif age => 18\n    print('Adult')\nelse:\n    print('Minor')"}
            />
          </div>
        </Card>

        <Card className="rounded-[30px] bg-[linear-gradient(180deg,rgba(243,248,255,0.8),rgba(255,255,255,1))]">
          <p className="text-sm font-semibold text-slate-500">Before you submit</p>
          <div className="mt-4 space-y-3">
            {checklist.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-[20px] border border-slate-200 bg-white px-4 py-3"
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${item.done ? "bg-emerald-500" : "bg-slate-300"}`}
                />
                <span className="text-sm text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[24px] bg-slate-950 p-4 text-sm text-slate-200">
            <p className="font-semibold text-white">Beginner reminder</p>
            <p className="mt-2 leading-6 text-slate-300">
              If your code does not run yet, focus on syntax first. Make Python happy before you worry about style.
            </p>
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
          <Button>Check answer</Button>
          <Button variant="subtle">Save draft</Button>
          <Button variant="secondary">Ask mentor for a hint</Button>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Placeholder logic only for now. This UI is ready for a future Python execution and rubric pipeline.
        </p>
      </Card>

      <Card className={`rounded-[30px] border ${feedback.tone}`}>
        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70">
            <Icon className={`h-5 w-5 ${state === "working" ? "animate-spin" : ""}`} />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-70">
              Feedback
            </p>
            <h3 className="mt-2 text-xl font-bold">{feedback.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7">{feedback.description}</p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <div className="rounded-[20px] bg-white/70 px-4 py-4 text-sm">
            <p className="font-semibold">What went well</p>
            <p className="mt-2 leading-6">You focused on one small bug instead of rewriting everything.</p>
          </div>
          <div className="rounded-[20px] bg-white/70 px-4 py-4 text-sm">
            <p className="font-semibold">What to check next</p>
            <p className="mt-2 leading-6">Read the `if` line character by character. Tiny syntax details matter here.</p>
          </div>
          <div className="rounded-[20px] bg-white/70 px-4 py-4 text-sm">
            <p className="font-semibold">Why this matters</p>
            <p className="mt-2 leading-6">Learning to debug syntax early reduces frustration in every later lesson.</p>
          </div>
        </div>

        <div className="mt-5 rounded-[24px] bg-white/70 p-4 text-sm text-slate-700">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <Sparkles className="h-4 w-4 text-brand-600" />
            Suggested correction flow
          </div>
          <p className="mt-2 leading-6">
            1. Fix the comparison operator. 2. Add the missing colon. 3. Check the indentation under `if` and `else`. 4. Run it again.
          </p>
        </div>
      </Card>
    </div>
  );
}
