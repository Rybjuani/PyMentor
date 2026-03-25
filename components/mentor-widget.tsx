"use client";

import { useState } from "react";
import {
  Bot,
  Bug,
  CornerDownLeft,
  Lightbulb,
  ListOrdered,
  LoaderCircle,
  Sparkles
} from "lucide-react";
import { mentorPrompts } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface MentorWidgetProps {
  contextTitle: string;
  compact?: boolean;
}

export function MentorWidget({ contextTitle, compact = false }: MentorWidgetProps) {
  const [input, setInput] = useState("");
  const [activeMode, setActiveMode] = useState<string>("explain");
  const [response, setResponse] = useState(
    "I’m here to help. Choose a help mode or ask your own question. I’ll keep the explanation calm, clear, and beginner-safe."
  );
  const [loading, setLoading] = useState(false);

  const modeMeta = {
    explain: {
      icon: Sparkles,
      title: "Explain simply",
      description: "Turn a concept into plain language."
    },
    hint: {
      icon: Lightbulb,
      title: "Give me a hint",
      description: "Nudge you forward without taking over."
    },
    steps: {
      icon: ListOrdered,
      title: "Show step by step",
      description: "Break the work into small, visible steps."
    },
    debug: {
      icon: Bug,
      title: "Help me debug",
      description: "Check what to inspect first when code goes wrong."
    }
  } as const;

  async function askMentor(message: string) {
    setLoading(true);
    setInput(message);

    try {
      const res = await fetch("/api/mentor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message,
          contextTitle
        })
      });

      const data = (await res.json()) as { reply?: string };
      setResponse(data.reply ?? "I could not generate a response yet.");
    } catch {
      setResponse("The mentor route is scaffolded, but the request failed locally.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="h-full rounded-[30px] border-brand-100 bg-[linear-gradient(180deg,rgba(243,248,255,0.8),rgba(255,255,255,1))] p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/20">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">AI Mentor</h3>
          <p className="mt-1 text-sm text-slate-600">
            Calm guidance for {contextTitle.toLowerCase()} so the learner never feels alone.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-[24px] border border-brand-100 bg-brand-50/60 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
            Current help mode
          </p>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
            {modeMeta[activeMode as keyof typeof modeMeta].title}
          </span>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700">{response}</p>
      </div>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Quick help modes
        </p>
      </div>

      <div className="mt-3 grid gap-3">
        {mentorPrompts.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setActiveMode(item.mode);
              void askMentor(item.prompt);
            }}
            className="rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-left transition hover:border-brand-200 hover:bg-brand-50"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-slate-700">
                {item.mode === "explain" && <Sparkles className="h-4 w-4" />}
                {item.mode === "hint" && <Lightbulb className="h-4 w-4" />}
                {item.mode === "steps" && <ListOrdered className="h-4 w-4" />}
                {item.mode === "debug" && <Bug className="h-4 w-4" />}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm text-slate-600">
                  {modeMeta[item.mode].description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-[24px] border border-slate-200 bg-white p-4">
        <label htmlFor="mentor-input" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Ask your own question
        </label>
        <textarea
          id="mentor-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={compact ? 3 : 4}
          className="mt-3 w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-brand-300"
          placeholder="Example: I do not understand why this condition is false yet. Can you guide me slowly?"
        />
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            Groq-ready now. Real conversation memory and streaming can be added later.
          </p>
          <Button
            className="gap-2"
            onClick={() => {
              if (input.trim()) {
                void askMentor(input.trim());
              }
            }}
          >
            {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <CornerDownLeft className="h-4 w-4" />}
            Ask mentor
          </Button>
        </div>
      </div>

      <div className="mt-4 rounded-[24px] bg-slate-950 px-4 py-4 text-sm text-slate-200">
        <p className="font-semibold text-white">Mentor promise</p>
        <p className="mt-2 leading-6 text-slate-300">
          Hints before solutions. Simpler language before jargon. Step-by-step help when confidence drops.
        </p>
      </div>
    </Card>
  );
}
