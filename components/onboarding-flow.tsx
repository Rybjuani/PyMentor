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
          Boot sequence
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-50">
          Welcome to PyMentor
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
          You do not need to know anything yet. PyMentor will guide you through one calm Python path, one clear lesson at a time.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-[24px] border border-slate-800 bg-slate-900/70 p-5">
            <div className="flex items-center gap-2 font-semibold text-slate-100">
              <Compass className="h-4 w-4 text-brand-300" />
              One path
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              You start at the beginning and always know what comes next.
            </p>
          </div>
          <div className="rounded-[24px] border border-slate-800 bg-slate-900/70 p-5">
            <div className="flex items-center gap-2 font-semibold text-slate-100">
              <Sparkles className="h-4 w-4 text-brand-300" />
              Gentle guidance
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              The mentor explains things simply and gives hints before full answers.
            </p>
          </div>
          <div className="rounded-[24px] border border-slate-800 bg-slate-900/70 p-5">
            <div className="flex items-center gap-2 font-semibold text-slate-100">
              <Sparkles className="h-4 w-4 text-brand-300" />
              Small wins
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Lessons and exercises build progress steadily without feeling overwhelming.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-[24px] border border-brand-400/15 bg-brand-500/10 p-5 text-sm text-brand-100">
          Your first step is simple: open the first lesson, understand what programming is, and get one quick win on the board.
        </div>

        <div className="mt-8">
          <Button className="gap-2" onClick={() => void completeOnboarding()}>
            {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
            Start my first lesson
          </Button>
        </div>
      </Card>

      <Card className="rounded-[32px] border-slate-800 bg-[radial-gradient(circle_at_top_right,rgba(78,203,255,0.12),transparent_30%),linear-gradient(180deg,#060b14,#0b1620)] text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">Mission flow</p>
        <div className="mt-6 space-y-4">
          <div className="rounded-[22px] border border-white/8 bg-white/5 p-4">
            <p className="font-semibold">1. Read one short lesson</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Start with the foundations, not with advanced concepts.
            </p>
          </div>
          <div className="rounded-[22px] border border-white/8 bg-white/5 p-4">
            <p className="font-semibold">2. Ask the mentor when confused</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Use hints, simple explanations, or debugging help inside the lesson.
            </p>
          </div>
          <div className="rounded-[22px] border border-white/8 bg-white/5 p-4">
            <p className="font-semibold">3. Keep momentum visible</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Your roadmap, activity, and streak will update as you move forward.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
