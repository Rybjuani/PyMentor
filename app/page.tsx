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
  Sparkles
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
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-brand-100 ring-1 ring-white/15">
                <Sparkles className="h-4 w-4" />
                Beginner-first Python learning with integrated AI guidance
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                Learn Python from zero without feeling lost, rushed, or alone.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                PyMentor is a guided platform for absolute beginners who want a calm path into programming. Clear lessons, guided practice, visible progress, and an AI mentor help learners keep moving even when confidence drops.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/signup">Start learning Python</Button>
                <Button href="/dashboard" variant="ghost">
                  Preview the product
                </Button>
              </div>

              <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
                <div className="rounded-[24px] bg-white/10 px-4 py-4 ring-1 ring-white/10">
                  <p className="text-2xl font-extrabold text-white">Python only</p>
                  <p className="mt-1 text-sm text-slate-300">One language. One beginner-safe path.</p>
                </div>
                <div className="rounded-[24px] bg-white/10 px-4 py-4 ring-1 ring-white/10">
                  <p className="text-2xl font-extrabold text-white">AI mentor</p>
                  <p className="mt-1 text-sm text-slate-300">Hints, clarity, and debugging help in context.</p>
                </div>
                <div className="rounded-[24px] bg-white/10 px-4 py-4 ring-1 ring-white/10">
                  <p className="text-2xl font-extrabold text-white">Small wins</p>
                  <p className="mt-1 text-sm text-slate-300">Progress feels visible from the first lesson.</p>
                </div>
              </div>
            </div>

            <div className="grid-pattern rounded-[40px] border border-white/10 bg-white/5 p-4 shadow-soft">
              <div className="app-surface rounded-[34px] p-5">
                <div className="rounded-[30px] bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-brand-100">Today’s guided session</p>
                      <h2 className="mt-2 text-2xl font-bold">Conditionals are ready for you</h2>
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold ring-1 ring-white/10">
                      12 min lesson
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-brand-50">
                    Learn how Python makes choices, then fix a real beginner bug with calm mentor support.
                  </p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <Card className="rounded-[26px] border-none bg-slate-50 shadow-none">
                    <p className="text-sm text-slate-500">Roadmap progress</p>
                    <p className="mt-3 text-3xl font-extrabold text-slate-900">28%</p>
                    <div className="mt-4 h-2 rounded-full bg-slate-200">
                      <div className="h-full w-[28%] rounded-full bg-brand-500" />
                    </div>
                  </Card>
                  <Card className="rounded-[26px] border-none bg-slate-50 shadow-none">
                    <p className="text-sm text-slate-500">Mentor mood</p>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      “Let’s slow it down together. What question is your `if` statement asking?”
                    </p>
                  </Card>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <div className="rounded-[24px] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700">
                    <div className="flex items-center gap-2 font-semibold text-slate-900">
                      <PlayCircle className="h-4 w-4 text-brand-600" />
                      Start small
                    </div>
                    <p className="mt-2 leading-6">The first lessons assume zero experience.</p>
                  </div>
                  <div className="rounded-[24px] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700">
                    <div className="flex items-center gap-2 font-semibold text-slate-900">
                      <HeartHandshake className="h-4 w-4 text-brand-600" />
                      Stay supported
                    </div>
                    <p className="mt-2 leading-6">The mentor helps inside lessons and exercises.</p>
                  </div>
                  <div className="rounded-[24px] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700">
                    <div className="flex items-center gap-2 font-semibold text-slate-900">
                      <CheckCircle2 className="h-4 w-4 text-brand-600" />
                      See progress
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
              title="A calm path built for people starting from zero"
              description="PyMentor is not a giant course library. It is one carefully guided beginner journey where the next step is always visible."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {howItWorks.map((item, index) => (
                <Card key={item} className="rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,251,255,1))]">
                  <p className="text-sm font-semibold text-brand-600">Step {index + 1}</p>
                  <p className="mt-4 text-lg font-semibold text-slate-900">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <SectionIntro
            eyebrow="Why beginners stay"
            title="The product is designed to reduce overwhelm"
            description="Every product decision aims to make the learner feel safe to continue: clear language, visible progress, and support exactly where confusion happens."
            className="mb-8"
          />
          <div className="grid gap-5 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="rounded-[32px] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,251,255,1))]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="roadmap-preview" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="app-surface rounded-[36px] p-8 shadow-soft">
              <SectionIntro
                eyebrow="Roadmap preview"
                title="One Python path, clear from the first lesson"
                description="Instead of overwhelming beginners with endless choices, PyMentor gives them one thoughtful roadmap with locked steps, realistic pacing, and clear milestones."
              />
              <Link
                href="/roadmap"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600"
              >
                View roadmap <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {courseModules.slice(0, 4).map((module) => (
                <Card key={module.slug} className="rounded-[30px]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {module.status}
                    </span>
                    <span className="text-sm text-slate-400">{module.estimatedTime}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{module.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{module.description}</p>
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
                title="Guidance inside the learning flow"
                description="The mentor is not a noisy chatbot living far away from the lesson. It is part of the learning experience, ready to simplify, hint, or debug when confidence drops."
              />

              <div className="mt-8 grid gap-3">
                {mentorPrompts.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <Card className="rounded-[36px] bg-[linear-gradient(180deg,#091222,#101e35)] text-white">
              <p className="text-sm text-slate-400">Example mentor reply</p>
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
          <div className="rounded-[40px] bg-gradient-to-r from-brand-500 to-emerald-500 px-8 py-10 text-white shadow-soft">
            <h2 className="text-4xl font-extrabold tracking-tight">
              Start learning Python with guidance that feels calm and clear.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90">
              PyMentor gives absolute beginners a strong first experience: clear lessons, guided practice, visible progress, and an AI mentor that helps without taking over.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/signup" variant="secondary">
                Start your first lesson
              </Button>
              <Button href="/dashboard" variant="ghost">
                Explore the app preview
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
