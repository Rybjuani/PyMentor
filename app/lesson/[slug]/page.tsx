import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Compass, NotebookPen } from "lucide-react";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { CodePanel } from "@/components/code-panel";
import { MentorWidget } from "@/components/mentor-widget";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getLessonBySlug } from "@/lib/mock-data";

export default function LessonPage({
  params
}: {
  params: { slug: string };
}) {
  const lesson = getLessonBySlug(params.slug);

  if (!lesson) {
    notFound();
  }

  return (
    <AppShell title={lesson.title} description={lesson.summary}>
      <section className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="space-y-5">
          <Card className="rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,251,255,1))]">
            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="brand">{lesson.module}</Badge>
              <Badge tone="neutral">{lesson.duration}</Badge>
              <Badge tone="success">{lesson.difficulty}</Badge>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[24px] bg-slate-50 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Compass className="h-4 w-4 text-brand-600" />
                  Warm-up idea
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-700">{lesson.warmup}</p>
              </div>
              <div className="rounded-[24px] bg-brand-50 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Your goal today
                </div>
                <p className="mt-3 text-sm leading-7 text-brand-800">{lesson.goal}</p>
              </div>
            </div>
          </Card>

          <Card className="rounded-[30px]">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-brand-500" />
              <h2 className="text-xl font-bold text-slate-900">Key ideas first</h2>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {lesson.keyIdeas.map((idea) => (
                <div key={idea.title} className="rounded-[22px] bg-slate-50 p-4">
                  <h3 className="text-sm font-semibold text-slate-900">{idea.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{idea.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="rounded-[30px]">
            <div className="flex items-center gap-2">
              <NotebookPen className="h-5 w-5 text-brand-500" />
              <h2 className="text-xl font-bold text-slate-900">Explanation</h2>
            </div>
            <div className="mt-6 space-y-6">
              {lesson.explanation.map((section, index) => (
                <div key={section.title} className="rounded-[24px] border border-slate-200 bg-white p-5">
                  <p className="text-sm font-semibold text-brand-600">Part {index + 1}</p>
                  <h2 className="mt-2 text-xl font-bold text-slate-900">{section.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{section.body}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="rounded-[30px]">
            <h2 className="text-xl font-bold text-slate-900">Python example</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Read the code slowly. Ask yourself: what question does Python check first, and which message should appear for a score of 82?
            </p>
            <div className="mt-4">
              <CodePanel code={lesson.example} />
            </div>
          </Card>

          <Card className="rounded-[30px]">
            <h2 className="text-xl font-bold text-slate-900">Practice</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">{lesson.practicePrompt}</p>
            <div className="mt-5 rounded-[24px] bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">A simple way to approach it</p>
              <div className="mt-3 space-y-3">
                {lesson.practiceChecklist.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="/exercise/fix-the-conditional"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600"
            >
              Try the related exercise <ArrowRight className="h-4 w-4" />
            </Link>
          </Card>

          <Card className="rounded-[30px]">
            <h2 className="text-xl font-bold text-slate-900">Common mistakes</h2>
            <div className="mt-4 space-y-3">
              {lesson.commonMistakes.map((mistake) => (
                <div key={mistake} className="rounded-[20px] bg-slate-50 px-4 py-4 text-sm text-slate-700">
                  {mistake}
                </div>
              ))}
            </div>
          </Card>

          <Card className="rounded-[30px] border-brand-100 bg-[linear-gradient(180deg,rgba(243,248,255,0.7),rgba(255,255,255,1))]">
            <h2 className="text-xl font-bold text-slate-900">Fix the bug challenge</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">{lesson.bugChallenge.prompt}</p>
            <div className="mt-4">
              <CodePanel code={lesson.bugChallenge.brokenCode} />
            </div>
            <p className="mt-4 rounded-[20px] bg-brand-50 px-4 py-4 text-sm text-brand-700">
              Learning goal: {lesson.bugChallenge.expectedLearning}
            </p>
          </Card>
        </div>

        <div>
          <MentorWidget
            context={{
              title: lesson.title,
              topic: lesson.module,
              pageType: "lesson",
              codeSnippet: lesson.example
            }}
          />
        </div>
      </section>
    </AppShell>
  );
}
