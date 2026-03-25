import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Bug,
  ChartNoAxesCombined,
  CheckCircle2,
  Compass,
  HeartHandshake,
  PlayCircle,
  Sparkles,
  Zap
} from "lucide-react";
import { SectionIntro } from "@/components/section-intro";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { courseModules } from "@/lib/course-content";
import { communityPreview, mentorPrompts } from "@/lib/mock-data";

const benefits = [
  {
    icon: Compass,
    title: "Never feel lost",
    description: "Every screen explains where you are, what matters now, and what to do next."
  },
  {
    icon: Bot,
    title: "A mentor inside the flow",
    description: "Simple explanations, careful hints, and debugging guidance live beside the lesson."
  },
  {
    icon: Bug,
    title: "Practice with real mistakes",
    description: "Fix-the-bug challenges turn common beginner errors into calm learning moments."
  },
  {
    icon: ChartNoAxesCombined,
    title: "Visible progress",
    description: "Roadmaps, streaks, and achievements create momentum without noisy gamification."
  }
];

const howItWorks = [
  "Start with one clear Python roadmap designed for absolute beginners.",
  "Learn through short lessons with examples, practice, and realistic bug-fix tasks.",
  "Use the mentor for simpler explanations, step-by-step help, and debugging support.",
  "Build confidence through visible progress, small wins, and gentle accountability."
];

export default function HomePage() {
  return (
    <div>
      <SiteHeader />

      <main className="pb-20">
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/15 bg-brand-500/10 px-4 py-2 text-sm text-brand-200 ring-1 ring-white/5">
                <Sparkles className="h-4 w-4" />
                Beginner-first Python progression with integrated AI guidance
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                Learn Python from zero in a dark, focused progression flow that keeps you moving.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                PyMentor gives absolute beginners a premium learning environment: clear lessons,
                guided practice, visible unlocks, and an AI mentor that helps without taking over.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/signup">Start your Python path</Button>
                <Button href="/dashboard" variant="ghost">
                  Preview the mission hub
                </Button>
              </div>

              <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                  <p className="text-2xl font-extrabold text-white">Python only</p>
                  <p className="mt-1 text-sm text-slate-300">One language. One progression path.</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                  <p className="text-2xl font-extrabold text-white">AI mentor</p>
                  <p className="mt-1 text-sm text-slate-300">Hints, clarity, and debugging support in context.</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                  <p className="text-2xl font-extrabold text-white">Visible unlocks</p>
                  <p className="mt-1 text-sm text-slate-300">Each lesson pushes the map forward.</p>
                </div>
              </div>
            </div>

            <div className="cyan-grid rounded-[40px] border border-white/10 bg-white/[0.03] p-4 shadow-soft">
              <div className="app-surface rounded-[34px] p-5">
                <div className="rounded-[30px] border border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.22),transparent_34%),linear-gradient(135deg,#08111a_0%,#102132_45%,#103445_100%)] p-6 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-brand-100">Today’s mission</p>
                      <h2 className="mt-2 text-2xl font-bold">Push through conditionals</h2>
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold ring-1 ring-white/10">
                      12 min lesson
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-brand-50">
                    Learn how Python makes choices, then clear one bug-fix checkpoint with mentor backup at your side.
                  </p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <Card className="rounded-[26px] border-slate-800 bg-slate-950/80 shadow-none">
                    <p className="text-sm text-slate-400">Roadmap progress</p>
                    <p className="mt-3 text-3xl font-extrabold text-slate-50">28%</p>
                    <div className="mt-4 h-2 rounded-full bg-slate-800">
                      <div className="h-full w-[28%] rounded-full bg-[linear-gradient(90deg,#0CB971,#4ecbff)]" />
                    </div>
                  </Card>
                  <Card className="rounded-[26px] border-slate-800 bg-slate-950/80 shadow-none">
                    <p className="text-sm text-slate-400">Mentor signal</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      “Let’s slow it down together. What question is your `if` statement asking?”
                    </p>
                  </Card>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 px-4 py-4 text-sm text-slate-300">
                    <div className="flex items-center gap-2 font-semibold text-slate-100">
                      <PlayCircle className="h-4 w-4 text-brand-300" />
                      Start small
                    </div>
                    <p className="mt-2 leading-6">The first lessons assume zero experience.</p>
                  </div>
                  <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 px-4 py-4 text-sm text-slate-300">
                    <div className="flex items-center gap-2 font-semibold text-slate-100">
                      <HeartHandshake className="h-4 w-4 text-brand-300" />
                      Stay supported
                    </div>
                    <p className="mt-2 leading-6">The mentor helps inside lessons and exercises.</p>
                  </div>
                  <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 px-4 py-4 text-sm text-slate-300">
                    <div className="flex items-center gap-2 font-semibold text-slate-100">
                      <CheckCircle2 className="h-4 w-4 text-brand-300" />
                      Unlock progress
                    </div>
                    <p className="mt-2 leading-6">Achievements and milestones make progress visible.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="app-surface rounded-[40px] px-6 py-10 shadow-soft lg:px-10">
            <SectionIntro
              eyebrow="How PyMentor works"
              title="A dark, focused path built for people starting from zero"
              description="PyMentor is not a giant course library. It is one deliberate progression track where every next step is visible, achievable, and worth taking."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {howItWorks.map((item, index) => (
                <Card key={item} className="rounded-[30px] border-slate-800 bg-slate-950/70">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Step {index + 1}</p>
                  <p className="mt-4 text-lg font-semibold text-slate-50">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <SectionIntro
            eyebrow="Why beginners stay"
            title="The product is designed to reduce overwhelm without losing momentum"
            description="Every product decision aims to make the learner feel safe to continue while still making progression feel real, visible, and satisfying."
            className="mb-8"
          />
          <div className="grid gap-5 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="rounded-[32px] border-slate-800 bg-[linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/12 text-brand-300 ring-1 ring-brand-400/15">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-50">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="roadmap-preview" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="app-surface rounded-[36px] p-8 shadow-soft">
              <SectionIntro
                eyebrow="Roadmap preview"
                title="One Python path with visible unlocks"
                description="Instead of overwhelming beginners with endless choices, PyMentor gives them one thoughtful roadmap with locked stages, visible milestones, and momentum that compounds."
              />
              <Link
                href="/roadmap"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300"
              >
                View roadmap <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {courseModules.slice(0, 4).map((module) => (
                <Card key={module.slug} className="rounded-[30px] border-slate-800 bg-slate-950/80">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-brand-400/15 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-200">
                      {module.status}
                    </span>
                    <span className="text-sm text-slate-500">{module.estimatedTime}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    <Zap className="h-3.5 w-3.5 text-brand-300" />
                    Stage {module.order}
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-slate-50">{module.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{module.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="mentor-preview" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="app-surface rounded-[36px] p-8 shadow-soft">
              <SectionIntro
                eyebrow="Mentor preview"
                title="Guidance inside the progression loop"
                description="The mentor is not a noisy chatbot living far away from the lesson. It sits inside the mission flow, ready to simplify, hint, or debug when confidence drops."
              />

              <div className="mt-8 grid gap-3">
                {mentorPrompts.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[22px] border border-slate-800 bg-slate-950/70 px-4 py-4 text-sm font-medium text-slate-300"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <Card className="rounded-[36px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.1),transparent_28%),linear-gradient(180deg,#060d14,#0b1620)] text-white">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Example mentor reply</p>
              <p className="mt-5 text-lg leading-8 text-slate-100">
                “Let’s slow it down together. Your program is asking a question with `if`. First, check whether the comparison is written the way Python expects. Then look for the colon at the end of the line.”
              </p>
              <div className="mt-8 rounded-[24px] bg-white/5 p-5 ring-1 ring-white/10">
                <p className="text-sm text-slate-300">Future community layer</p>
                <div className="mt-4 space-y-3">
                  {communityPreview.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-100">
                      <CheckCircle2 className="h-4 w-4 text-brand-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-10">
          <div className="rounded-[40px] border border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.22),transparent_32%),radial-gradient(circle_at_90%_10%,rgba(78,203,255,0.18),transparent_22%),linear-gradient(135deg,#07111a_0%,#0d1d2c_40%,#0f3140_100%)] px-8 py-10 text-white shadow-soft">
            <h2 className="text-4xl font-extrabold tracking-tight">
              Start learning Python with momentum that feels calm, sharp, and real.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90">
              PyMentor gives absolute beginners a strong first experience: clear lessons, guided practice, visible progression, and an AI mentor that helps without taking over.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/signup" variant="secondary">
                Start your first lesson
              </Button>
              <Button href="/dashboard" variant="ghost">
                Explore the mission hub
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
