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
  "Estoy aquí cuando necesites ayuda. Elige un modo de apoyo o haz tu propia pregunta y te lo voy a explicar con calma, claridad y pensando en alguien que recién empieza.";

export function MentorWidget({ context, compact = false }: MentorWidgetProps) {
  const [input, setInput] = useState("");
  const [activeMode, setActiveMode] = useState<MentorMode>("explain");
  const [messages, setMessages] = useState<MentorConversationMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const modeMeta = {
    explain: {
      icon: Sparkles,
      title: "Explicar simple",
      description: "Convertir una idea en palabras fáciles."
    },
    hint: {
      icon: Lightbulb,
      title: "Dame una pista",
      description: "Empujarte un poco sin quitarte el control."
    },
    steps: {
      icon: ListOrdered,
      title: "Paso a paso",
      description: "Dividir el trabajo en pasos pequeños y visibles."
    },
    debug: {
      icon: Bug,
      title: "Ayúdame a depurar",
      description: "Revisar qué mirar primero cuando el código falla."
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
        setErrorMessage("El mentor respondió con una versión de respaldo porque el modelo en vivo no estuvo disponible para esta consulta.");
      }
    } catch {
      setMessages([
        ...nextHistory,
        {
          role: "assistant",
          content:
            "Tuve un problema para responder justo ahora. Inténtalo otra vez o cambia a una consulta más pequeña, como pedir una sola pista."
        }
      ]);
      setErrorMessage("No se pudo conectar con el servicio del mentor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="mission-grid h-full rounded-[30px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.1),transparent_28%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))] p-5">
      <div className="flex items-start gap-4">
        <div className="status-orb flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0CB971,#4ecbff)] text-slate-950 shadow-[0_0_30px_rgba(29,211,139,0.2)]">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold text-slate-50">Mentor IA</h3>
            <span className="rounded-full border border-brand-400/15 bg-brand-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-100">
              Compañero de misión
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-400">
            Guía tranquila para {context.title.toLowerCase()} para que la persona nunca sienta que está sola.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-[24px] border border-brand-400/15 bg-brand-500/10 p-4 shadow-[0_0_22px_rgba(29,211,139,0.08)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            Modo de ayuda actual
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
          Modos rápidos
        </p>
      </div>

      <div className="mt-3 grid gap-3 xl:grid-cols-2">
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
              className="rounded-[22px] border border-slate-800 bg-slate-950/75 px-4 py-4 text-left transition hover:-translate-y-0.5 hover:border-brand-400/15 hover:bg-brand-500/10 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-slate-200 ring-1 ring-white/5">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-100">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
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
          Haz tu propia pregunta
        </label>
        <textarea
          id="mentor-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={compact ? 3 : 4}
          className="mt-3 w-full resize-none rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-500 focus:border-brand-400"
          placeholder="Ejemplo: no entiendo por qué esta condición da falso. ¿Me lo puedes guiar despacio?"
        />
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-slate-500">
            Respuestas de Groq en vivo con el contexto local de esta página.
          </p>
          <Button
            className="w-full gap-2 sm:w-auto"
            onClick={() => {
              void askMentor(input, activeMode);
            }}
          >
            {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <CornerDownLeft className="h-4 w-4" />}
            Preguntar al mentor
          </Button>
        </div>
      </div>

      <div className="mt-5 rounded-[24px] border border-slate-800 bg-slate-950/75 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Conversación
          </p>
          {loading ? (
            <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-300">
              <LoaderCircle className="h-3.5 w-3.5 animate-spin" />
              Pensando
            </span>
          ) : null}
        </div>

        <div className="mt-4 max-h-[420px] space-y-3 overflow-y-auto pr-1 sm:max-h-[540px]">
          {messages.length === 0 ? (
            <div className="rounded-[20px] border border-slate-800 bg-slate-900/80 px-4 py-4 text-sm leading-7 text-slate-300">
              Empieza con un modo rápido como <span className="font-semibold text-slate-100">Explicar simple</span> o haz tu propia pregunta abajo.
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={
                  message.role === "assistant"
                    ? "rounded-[20px] border border-slate-800 bg-slate-900/80 px-4 py-4 text-sm leading-7 text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                    : "rounded-[20px] border border-brand-400/15 bg-brand-500/10 px-4 py-4 text-sm leading-7 text-brand-100 shadow-[0_0_18px_rgba(29,211,139,0.06)]"
                }
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {message.role === "assistant" ? "Mentor" : "Tú"}
                </p>
                <div className="space-y-3">
                  {formatMentorMessage(message.content).map((block, blockIndex) =>
                    block.type === "bullet" ? (
                      <div key={`${message.role}-${index}-bullet-${blockIndex}`} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-brand-300" />
                        <p className="whitespace-pre-wrap break-words leading-7">{block.text}</p>
                      </div>
                    ) : (
                      <p
                        key={`${message.role}-${index}-paragraph-${blockIndex}`}
                        className="whitespace-pre-wrap break-words leading-7"
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
          <div className="mt-4 flex items-start gap-3 rounded-[20px] border border-amber-400/20 bg-amber-500/10 px-4 py-4 text-sm text-amber-100">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{errorMessage}</p>
          </div>
        ) : null}
      </div>

      <div className="mt-4 rounded-[24px] border border-slate-800 bg-slate-950 px-4 py-4 text-sm text-slate-200">
        <p className="font-semibold text-white">Promesa del mentor</p>
        <p className="mt-2 leading-6 text-slate-300">
          Pistas antes que soluciones. Lenguaje simple antes que jerga. Ayuda paso a paso cuando baja la confianza.
        </p>
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
