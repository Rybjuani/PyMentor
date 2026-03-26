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
  Sparkles,
  X
} from "lucide-react";
import { mentorPrompts } from "@/lib/mock-data";
import {
  MentorContextPayload,
  MentorConversationMessage,
  MentorMode,
  MentorResponseBody
} from "@/types";
import { Button } from "@/components/ui/button";

interface MentorWidgetProps {
  context: MentorContextPayload;
  compact?: boolean;
}

const modeMeta = {
  explain: {
    icon: Sparkles,
    title: "Explícame esto"
  },
  hint: {
    icon: Lightbulb,
    title: "Dame una pista"
  },
  steps: {
    icon: ListOrdered,
    title: "Ordénamelo"
  },
  debug: {
    icon: Bug,
    title: "Depurar"
  }
} as const;

export function MentorWidget({ context, compact = false }: MentorWidgetProps) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [activeMode, setActiveMode] = useState<MentorMode>("hint");
  const [messages, setMessages] = useState<MentorConversationMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
    setOpen(true);

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
        setErrorMessage("El mentor respondió con una versión de respaldo. Intenta una pregunta más concreta si hace falta.");
      }
    } catch {
      setMessages([
        ...nextHistory,
        {
          role: "assistant",
          content: "No pude responder ahora. Vuelve a intentar con una pregunta más corta."
        }
      ]);
      setErrorMessage("No se pudo conectar con el mentor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-[linear-gradient(135deg,#0CB971,#2de6a4)] px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(12,185,113,0.28)] transition hover:brightness-110"
      >
        <Bot className="h-4 w-4" />
        Ayuda
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]" onClick={() => setOpen(false)}>
          <aside
            className={`absolute bottom-0 right-0 top-auto flex max-h-[88vh] w-full flex-col rounded-t-[24px] border border-slate-800 bg-[linear-gradient(180deg,rgba(10,18,29,0.98),rgba(7,13,20,0.98))] p-4 shadow-[0_-24px_60px_rgba(0,0,0,0.42)] sm:top-4 sm:bottom-4 sm:right-4 sm:w-[420px] sm:rounded-[24px] ${compact ? "sm:w-[380px]" : ""}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-brand-300" />
                  <h3 className="text-base font-bold text-slate-50">Mentor</h3>
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Ayuda para {context.pageType === "exercise" ? "este ejercicio" : "esta lección"} sin salir del flujo.
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 text-slate-400"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {mentorPrompts.map((item) => {
                const Icon = modeMeta[item.mode].icon;
                const isActive = activeMode === item.mode;

                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      setActiveMode(item.mode);
                      void askMentor(item.prompt, item.mode);
                    }}
                    disabled={loading}
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition ${
                      isActive
                        ? "border-brand-400/20 bg-brand-500/10 text-brand-100"
                        : "border-slate-800 bg-slate-950/70 text-slate-300"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {modeMeta[item.mode].title}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex-1 overflow-y-auto">
              {messages.length === 0 ? (
                <div className="rounded-[18px] border border-slate-800 bg-slate-950/70 px-4 py-4 text-sm leading-6 text-slate-300">
                  Pregunta algo puntual o usa uno de los accesos rápidos. Lo importante es destrabarte sin perder foco.
                </div>
              ) : (
                <div className="space-y-3 pr-1">
                  {messages.map((message, index) => (
                    <div
                      key={`${message.role}-${index}`}
                      className={
                        message.role === "assistant"
                          ? "rounded-[18px] border border-slate-800 bg-slate-900/80 px-4 py-4 text-sm text-slate-300"
                          : "rounded-[18px] border border-brand-400/15 bg-brand-500/10 px-4 py-4 text-sm text-brand-100"
                      }
                    >
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {message.role === "assistant" ? "Mentor" : "Tú"}
                      </p>
                      <div className="space-y-3">
                        {formatMentorMessage(message.content).map((block, blockIndex) =>
                          block.type === "bullet" ? (
                            <div key={`${message.role}-${index}-bullet-${blockIndex}`} className="flex items-start gap-3">
                              <span className="mt-2 h-2 w-2 rounded-full bg-brand-300" />
                              <p className="whitespace-pre-wrap break-words leading-6">{block.text}</p>
                            </div>
                          ) : (
                            <p
                              key={`${message.role}-${index}-paragraph-${blockIndex}`}
                              className="whitespace-pre-wrap break-words leading-6"
                            >
                              {block.text}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-4 border-t border-slate-800 pt-4">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                rows={compact ? 3 : 4}
                className="w-full resize-none rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-brand-400"
                placeholder="¿Dónde está el error o qué parte no entiendes?"
              />
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-5 text-slate-500">Contexto: {context.topic}</p>
                <Button
                  className="w-full gap-2 sm:w-auto"
                  onClick={() => {
                    void askMentor(input, activeMode);
                  }}
                >
                  {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <CornerDownLeft className="h-4 w-4" />}
                  Preguntar
                </Button>
              </div>
              {errorMessage ? (
                <div className="mt-3 flex items-start gap-3 rounded-[18px] border border-amber-400/20 bg-amber-500/10 px-4 py-4 text-sm text-amber-100">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}

function formatMentorMessage(content: string) {
  type MentorFormattedBlock =
    | { type: "bullet"; text: string }
    | { type: "paragraph"; text: string };

  return content
    .split(/\n{2,}/)
    .flatMap<MentorFormattedBlock>((paragraph) => {
      const trimmedParagraph = paragraph.trim();

      if (!trimmedParagraph) {
        return [];
      }

      if (/^[-*]\s+/.test(trimmedParagraph) || /^\d+\.\s+/.test(trimmedParagraph)) {
        return trimmedParagraph
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean)
          .map((line) => ({
            type: "bullet" as const,
            text: line.replace(/^[-*]\s+/, "").replace(/^\d+\.\s+/, "")
          }));
      }

      return [{ type: "paragraph" as const, text: trimmedParagraph }];
    });
}
