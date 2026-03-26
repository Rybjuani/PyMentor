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

const modeMeta = {
  explain: {
    icon: Sparkles,
    title: "Explícame esto",
    helper: "Aclara una idea sin rodeos."
  },
  hint: {
    icon: Lightbulb,
    title: "Dame una pista",
    helper: "Te destraba sin resolverte todo."
  },
  steps: {
    icon: ListOrdered,
    title: "Ordénamelo",
    helper: "Divide el problema en pasos."
  },
  debug: {
    icon: Bug,
    title: "Ayúdame a depurar",
    helper: "Señala qué revisar primero."
  }
} as const;

export function MentorWidget({ context, compact = false }: MentorWidgetProps) {
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
        setErrorMessage("El mentor respondió con una versión de respaldo. Puedes volver a intentarlo con una pregunta más concreta.");
      }
    } catch {
      setMessages([
        ...nextHistory,
        {
          role: "assistant",
          content: "No pude responder ahora. Prueba con una pregunta más corta o vuelve a intentar en unos segundos."
        }
      ]);
      setErrorMessage("No se pudo conectar con el mentor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="rounded-[26px] border-brand-400/15 bg-[linear-gradient(180deg,rgba(13,24,35,0.98),rgba(9,18,28,0.98))] p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-200">
          <Bot className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold text-slate-50">Mentor</h3>
            <span className="rounded-full border border-brand-400/15 bg-brand-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-100">
              A mano
            </span>
          </div>
          <p className="mt-1 text-sm leading-6 text-slate-400">
            Úsalo cuando te trabes en {context.pageType === "exercise" ? "este ejercicio" : "esta lección"}.
            Primero pista, después explicación, recién al final solución parcial.
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
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
              className={`rounded-2xl border px-3 py-3 text-left transition ${
                isActive
                  ? "border-brand-400/20 bg-brand-500/10"
                  : "border-slate-800 bg-slate-950/70 hover:border-slate-700"
              } disabled:cursor-not-allowed disabled:opacity-70`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-slate-200">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-100">{modeMeta[item.mode].title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{modeMeta[item.mode].helper}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 rounded-[22px] border border-slate-800 bg-slate-950/75 p-4">
        <label htmlFor="mentor-input" className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Pregunta directa
        </label>
        <textarea
          id="mentor-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={compact ? 3 : 4}
          className="mt-3 w-full resize-none rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-brand-400"
          placeholder="Ejemplo: ¿qué parte de esta condición está fallando?"
        />
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-slate-500">
            Contexto activo: {context.topic}
          </p>
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
      </div>

      <div className="mt-4 rounded-[22px] border border-slate-800 bg-slate-950/75 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Respuestas</p>
          {loading ? (
            <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-300">
              <LoaderCircle className="h-3.5 w-3.5 animate-spin" />
              Pensando
            </span>
          ) : null}
        </div>

        <div className={`mt-4 space-y-3 overflow-y-auto pr-1 ${compact ? "max-h-[280px]" : "max-h-[420px]"}`}>
          {messages.length === 0 ? (
            <div className="rounded-[18px] border border-slate-800 bg-slate-900/70 px-4 py-4 text-sm leading-6 text-slate-300">
              Empieza por una pista o formula la duda exacta. Cuanto más concreta sea tu pregunta, más útil será la respuesta.
            </div>
          ) : (
            messages.map((message, index) => (
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
            ))
          )}
        </div>

        {errorMessage ? (
          <div className="mt-4 flex items-start gap-3 rounded-[18px] border border-amber-400/20 bg-amber-500/10 px-4 py-4 text-sm text-amber-100">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{errorMessage}</p>
          </div>
        ) : null}
      </div>
    </Card>
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
