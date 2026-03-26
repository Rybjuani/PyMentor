import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ShieldCheck, Wrench } from "lucide-react";
import { notFound } from "next/navigation";
import { requireAppUser } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { CodePanel } from "@/components/code-panel";
import { MentorWidget } from "@/components/mentor-widget";
import { PythonPlayground } from "@/components/python-playground";
import { ProgressAction } from "@/components/progress-action";
import { SignOutButton } from "@/components/sign-out-button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  getExerciseByLessonSlug,
  getLessonBySlug,
  getLessonPosition,
  getLessonStatus,
  getModuleProgress,
  getNextLesson,
  getPreviousLesson
} from "@/lib/course";
import { getDraftForUser } from "@/lib/drafts";
import { getProgressForUser } from "@/lib/user-progress";

export default async function LessonPage({
  params
}: {
  params: { slug: string };
}) {
  const user = await requireAppUser();
  const lesson = getLessonBySlug(params.slug);

  if (!lesson) {
    notFound();
  }

  const progress = await getProgressForUser(user.id);
  const lessonStatus = getLessonStatus(progress, lesson.slug);
  const moduleProgress = getModuleProgress(progress, lesson.moduleSlug ?? "");
  const position = getLessonPosition(lesson);
  const previousLesson = getPreviousLesson(lesson.slug);
  const nextLesson = getNextLesson(lesson.slug);
  const exercise = getExerciseByLessonSlug(lesson.slug);
  const isFoundationsCapstone = lesson.moduleSlug === "foundations-capstone";
  const isRoute3Capstone = lesson.moduleSlug === "route3-capstone";
  const lessonDraft = lesson.playground
    ? await getDraftForUser({
        userId: user.id,
        scope: "lesson",
        slug: lesson.slug
      })
    : null;

  return (
    <AppShell
      title={lesson.title}
      description={lesson.summary}
      userName={user.name}
      actions={<SignOutButton />}
    >
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-6">
          <Card className="rounded-[26px] border-brand-400/15 bg-[linear-gradient(180deg,rgba(12,23,35,0.98),rgba(8,16,26,0.98))] p-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="brand">{lesson.module}</Badge>
              <Badge tone="neutral">{lesson.duration}</Badge>
              <Badge tone="neutral">{`Lección ${position.current} de ${position.total}`}</Badge>
              <Badge tone={lessonStatus === "completed" ? "success" : lessonStatus === "in_progress" ? "brand" : "neutral"}>
                {lessonStatus === "completed" ? "Completada" : lessonStatus === "in_progress" ? "En progreso" : "Sin empezar"}
              </Badge>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Objetivo</p>
                <p className="mt-2 text-base leading-7 text-slate-200">{lesson.goal}</p>
              </div>
              <div className="rounded-[20px] border border-slate-800 bg-slate-950/70 px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Progreso del módulo</p>
                <p className="mt-2 text-2xl font-bold text-slate-50">{moduleProgress.percent}%</p>
                <p className="mt-1 text-sm text-slate-400">
                  {moduleProgress.completedLessons} de {moduleProgress.totalLessons} lecciones
                </p>
              </div>
            </div>
          </Card>

          <div className="xl:hidden">
            <MentorWidget
              context={{
                title: lesson.title,
                topic: lesson.module,
                pageType: "lesson",
                codeSnippet: lesson.example
              }}
              compact
            />
          </div>

          <Card className="rounded-[26px] p-5">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-brand-300" />
              <h2 className="text-xl font-bold text-slate-50">Lo que importa</h2>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {lesson.keyIdeas.map((idea) => (
                <div key={idea.title} className="rounded-[18px] border border-slate-800 bg-slate-950/70 p-4">
                  <h3 className="text-sm font-semibold text-slate-100">{idea.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{idea.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="rounded-[26px] p-5">
            <h2 className="text-xl font-bold text-slate-50">Explicación</h2>
            <div className="mt-4 space-y-4">
              {lesson.explanation.map((section) => (
                <div key={section.title} className="border-l-2 border-brand-400/30 pl-4">
                  <h3 className="text-base font-semibold text-slate-100">{section.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{section.body}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="rounded-[26px] p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-slate-50">Ejemplo</h2>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Léelo antes de correrlo</span>
            </div>
            <div className="mt-4">
              <CodePanel code={lesson.example} />
            </div>
          </Card>

          {lesson.playground ? (
            <PythonPlayground
              config={lesson.playground}
              initialCode={lessonDraft?.content ?? lesson.playground.starterCode}
              restoredDraftUpdatedAt={lessonDraft?.updatedAt ?? null}
              draftScope="lesson"
              draftSlug={lesson.slug}
            />
          ) : null}

          <Card className="rounded-[26px] p-5">
            <h2 className="text-xl font-bold text-slate-50">Práctica</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{lesson.practicePrompt}</p>
            <div className="mt-4 space-y-3">
              {lesson.practiceChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            {exercise ? (
              <Link href={`/exercise/${exercise.slug}`} className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-300">
                Abrir ejercicio <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </Card>

          <Card className="rounded-[26px] p-5">
            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-brand-300" />
                  <h2 className="text-xl font-bold text-slate-50">Bug para revisar</h2>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-400">{lesson.bugChallenge.prompt}</p>
                <p className="mt-3 text-sm text-slate-300">
                  Objetivo: {lesson.bugChallenge.expectedLearning}
                </p>
              </div>
              <CodePanel code={lesson.bugChallenge.brokenCode} />
            </div>
          </Card>

          <Card className="rounded-[26px] p-5">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div>
                <h2 className="text-xl font-bold text-slate-50">Errores frecuentes</h2>
                <div className="mt-4 space-y-3">
                  {lesson.commonMistakes.map((mistake) => (
                    <div key={mistake} className="rounded-[18px] border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">
                      {mistake}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[20px] border border-brand-400/15 bg-brand-500/10 p-4 text-sm text-brand-100">
                <div className="flex items-center gap-2 font-semibold text-brand-50">
                  <CheckCircle2 className="h-4 w-4" />
                  Cerrar este paso
                </div>
                <p className="mt-3 leading-6">
                  {isRoute3Capstone
                    ? "Completar esta lección cierra Ruta 3 y deja visible el final de la base actual."
                    : isFoundationsCapstone
                      ? "Completar esta lección cierra fundamentos y abre la siguiente ruta."
                      : "Marcarla como completada actualiza tu progreso y habilita el siguiente tramo."}
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {lessonStatus === "not_started" ? (
                    <ProgressAction entityType="lesson" slug={lesson.slug} status="in_progress" variant="secondary">
                      Marcar en progreso
                    </ProgressAction>
                  ) : null}
                  <ProgressAction entityType="lesson" slug={lesson.slug} status="completed">
                    Marcar como completada
                  </ProgressAction>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[22px] border border-slate-800 bg-slate-950/60 px-4 py-4 text-sm text-slate-400">
            {previousLesson ? (
              <Link href={`/lesson/${previousLesson.slug}`} className="font-semibold text-brand-300">
                Anterior: {previousLesson.title}
              </Link>
            ) : (
              <span>Inicio de la ruta</span>
            )}

            <div className="flex flex-wrap gap-3">
              {nextLesson ? (
                <Link href={`/lesson/${nextLesson.slug}`} className="font-semibold text-brand-300">
                  {isFoundationsCapstone ? `Abrir nueva etapa: ${nextLesson.title}` : `Siguiente: ${nextLesson.title}`}
                </Link>
              ) : null}
              {(isFoundationsCapstone || isRoute3Capstone) && !nextLesson ? (
                <Link href="/dashboard" className="font-semibold text-brand-300">
                  Volver al panel
                </Link>
              ) : null}
            </div>
          </div>
        </div>

        <div className="hidden xl:block xl:sticky xl:top-4 xl:self-start">
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
