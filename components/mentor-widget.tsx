"use client";

import { useState } from "react";
import {
  AlertCircle,
  Bot,
  Bug,
  CornerDownLeft,
  Lightbulb,
  ListOrdered,
  LoaderCircle,
  Sparkles
} from "lucide-react";
import { mentorPrompts } from "@/lib/mock-data";
import {
  MentorContextPayload,
  MentorConversationMessage,
  MentorMode,
  MentorResponseBody
} from "@/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface MentorWidgetProps {
  context: MentorContextPayload;
  compact?: boolean;
}

const emptyState =
  "I’m here when you need help. Pick a help mode or ask your own question, and I’ll keep the explanation calm, clear, and beginner-safe.";

export function MentorWidget({ context, compact = false }: MentorWidgetProps) {
  const [input, setInput] = useState("");
  const [activeMode, setActiveMode] = useState<MentorMode>("explain");
  const [messages, setMessages] = useState<MentorConversationMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  async function askMentor(message: string, mode: MentorMode) {
    const trimmed = message.trim();

    if (!trimmed) {
      return;
    }

    const nextHistory = [...messages, { role: "user" as const, content: trimmed }];
    setLoading(true);
    setErrorMessage(null);
    setMessages(nextHistory);
    setInput("");

    try {
      const res = await fetch("/api/mentor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: trimmed,
          mode,
          history: messages,
          context
        })
      });

      if (!res.ok) {
        throw new Error("mentor_request_failed");
      }

      const data = (await res.json()) as MentorResponseBody;

      setMessages([
        ...nextHistory,
        {
          role: "assistant",
          content: data.reply
        }
      ]);

      if (data.provider === "fallback") {
        setErrorMessage("The mentor answered with a fallback because the live model was unavailable for this request.");
      }
    } catch {
      setMessages([
        ...nextHistory,
        {
          role: "assistant",
          content:
            "I had trouble answering just now. Try again, or switch to a smaller request like asking for one hint."
        }
      ]);
      setErrorMessage("The mentor service could not be reached.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="h-full rounded-[30px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.1),transparent_28%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))] p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0CB971,#4ecbff)] text-slate-950 shadow-[0_0_30px_rgba(29,211,139,0.2)]">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-50">AI Mentor</h3>
          <p className="mt-1 text-sm text-slate-400">
            Calm guidance for {context.title.toLowerCase()} so the learner never feels alone.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-[24px] border border-brand-400/15 bg-brand-500/10 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            Current help mode
          </p>
          <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-brand-200 ring-1 ring-brand-400/15">
            {modeMeta[activeMode].title}
          </span>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          {messages.length === 0 ? emptyState : modeMeta[activeMode].description}
        </p>
      </div>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Quick help modes
        </p>
      </div>

      <div className="mt-3 grid gap-3">
        {mentorPrompts.map((item) => {
          const Icon = modeMeta[item.mode].icon;

          return (
            <button
              key={item.label}
              onClick={() => {
                setActiveMode(item.mode);
                void askMentor(item.prompt, item.mode);
              }}
              disabled={loading}
              className="rounded-[22px] border border-slate-800 bg-slate-950/75 px-4 py-4 text-left transition hover:border-brand-400/15 hover:bg-brand-500/10 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-slate-200">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-100">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    {modeMeta[item.mode].description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-5 rounded-[24px] border border-slate-800 bg-slate-950/75 p-4">
        <label htmlFor="mentor-input" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Ask your own question
        </label>
        <textarea
          id="mentor-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={compact ? 3 : 4}
          className="mt-3 w-full resize-none rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-brand-400"
          placeholder="Example: I do not understand why this condition is false yet. Can you guide me slowly?"
        />
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            Live Groq replies with local page context in this session.
          </p>
          <Button
            className="gap-2"
            onClick={() => {
              void askMentor(input, activeMode);
            }}
          >
            {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <CornerDownLeft className="h-4 w-4" />}
            Ask mentor
          </Button>
        </div>
      </div>

      <div className="mt-5 rounded-[24px] border border-slate-800 bg-slate-950/75 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Conversation
          </p>
          {loading ? (
            <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-300">
              <LoaderCircle className="h-3.5 w-3.5 animate-spin" />
              Thinking
            </span>
          ) : null}
        </div>

        <div className="mt-4 space-y-3">
          {messages.length === 0 ? (
            <div className="rounded-[20px] border border-slate-800 bg-slate-900/80 px-4 py-4 text-sm leading-7 text-slate-300">
              Start with a quick mode like <span className="font-semibold text-slate-100">Explain simply</span> or ask your own question below.
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={
                  message.role === "assistant"
                    ? "rounded-[20px] border border-slate-800 bg-slate-900/80 px-4 py-4 text-sm leading-7 text-slate-300"
                    : "rounded-[20px] border border-brand-400/15 bg-brand-500/10 px-4 py-4 text-sm leading-7 text-brand-100"
                }
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {message.role === "assistant" ? "Mentor" : "You"}
                </p>
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            ))
          )}
        </div>

        {errorMessage ? (
          <div className="mt-4 flex items-start gap-3 rounded-[20px] border border-amber-400/20 bg-amber-500/10 px-4 py-4 text-sm text-amber-100">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{errorMessage}</p>
          </div>
        ) : null}
      </div>

      <div className="mt-4 rounded-[24px] border border-slate-800 bg-slate-950 px-4 py-4 text-sm text-slate-200">
        <p className="font-semibold text-white">Mentor promise</p>
        <p className="mt-2 leading-6 text-slate-300">
          Hints before solutions. Simpler language before jargon. Step-by-step help when confidence drops.
        </p>
      </div>
    </Card>
  );
}
