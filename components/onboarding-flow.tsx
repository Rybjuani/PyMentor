"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Compass, LoaderCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function OnboardingFlow({
  firstLessonHref
}: {
  firstLessonHref: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function completeOnboarding() {
    setLoading(true);

    try {
      await fetch("/api/onboarding/complete", {
        method: "POST"
      });

      router.push(firstLessonHref);
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
      <Card className="rounded-[32px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.12),transparent_30%),linear-gradient(180deg,rgba(14,24,35,0.96),rgba(9,18,28,0.98))]">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
          Inicio guiado
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
          Bienvenido a PyMentor
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
          No necesitas saber nada todavía. PyMentor te va a guiar por una sola ruta de Python, paso a paso y con claridad.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-[24px] border border-slate-800 bg-slate-900/70 p-5">
            <div className="flex items-center gap-2 font-semibold text-slate-100">
              <Compass className="h-4 w-4 text-brand-300" />
              Una sola ruta
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Empiezas desde el principio y siempre sabes qué sigue.
            </p>
          </div>
          <div className="rounded-[24px] border border-slate-800 bg-slate-900/70 p-5">
            <div className="flex items-center gap-2 font-semibold text-slate-100">
              <Sparkles className="h-4 w-4 text-brand-300" />
              Guía tranquila
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              El mentor explica de forma simple y da pistas antes de mostrar respuestas completas.
            </p>
          </div>
          <div className="rounded-[24px] border border-slate-800 bg-slate-900/70 p-5">
            <div className="flex items-center gap-2 font-semibold text-slate-100">
              <Sparkles className="h-4 w-4 text-brand-300" />
              Pequeñas victorias
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Las lecciones y ejercicios construyen progreso de forma constante sin abrumar.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-[24px] border border-brand-400/15 bg-brand-500/10 p-5 text-sm text-brand-100">
          Tu primer paso es simple: abre la primera lección, consigue una primera victoria rápida y deja que esa inercia te lleve hasta un cierre real de fundamentos.
        </div>

        <div className="mt-8">
          <Button className="w-full gap-2 sm:w-auto" onClick={() => void completeOnboarding()}>
            {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
            Empezar mi primera lección
          </Button>
        </div>
      </Card>

      <Card className="rounded-[32px] border-slate-800 bg-[radial-gradient(circle_at_top_right,rgba(78,203,255,0.12),transparent_30%),linear-gradient(180deg,#060b14,#0b1620)] text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">Qué pasa ahora</p>
        <div className="mt-6 space-y-4">
          <div className="rounded-[22px] border border-white/8 bg-white/5 p-4">
            <p className="font-semibold">1. Leer una lección corta</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Empieza por las bases, no por conceptos avanzados.
            </p>
          </div>
          <div className="rounded-[22px] border border-white/8 bg-white/5 p-4">
            <p className="font-semibold">2. Usar el mentor cuando aparezca la duda</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Usa pistas, explicaciones simples o ayuda para depurar sin salir de la lección.
            </p>
          </div>
          <div className="rounded-[22px] border border-white/8 bg-white/5 p-4">
            <p className="font-semibold">3. Mantener visible el avance</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Tu ruta, tu actividad y tu racha se actualizan a medida que avanzas.
            </p>
          </div>
          <div className="rounded-[22px] border border-white/8 bg-white/5 p-4">
            <p className="font-semibold">4. Cerrar una primera etapa real</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              El recorrido termina en un cierre de fundamentos para que sepas, con claridad, que ya construiste una base real en Python.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
