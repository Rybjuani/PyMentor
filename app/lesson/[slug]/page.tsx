import Link from "next/link";
import { ArrowRight, BookOpen, Wrench } from "lucide-react";
import { notFound } from "next/navigation";
import { requireAppUser } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { CodePanel } from "@/components/code-panel";
import { MentorWidget } from "@/components/mentor-widget";
import { PythonPlayground } from "@/components/python-playground";
import { ProgressAction } from "@/components/progress-action";
import { SignOutButton } from "@/components/sign-out-button";
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
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-[20px] border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm">
          <div className="min-w-0">
            <p className="font-semibold text-slate-100">{lesson.module}</p>
            <p className="text-slate-500">
              Lección {position.current} de {position.total} · {lesson.duration} · {moduleProgress.percent}% del módulo
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {lessonStatus === "not_started" ? (
              <ProgressAction entityType="lesson" slug={lesson.slug} status="in_progress" variant="secondary">
                En progreso
              </ProgressAction>
            ) : null}
            <ProgressAction entityType="lesson" slug={lesson.slug} status="completed">
              Completar
            </ProgressAction>
          </div>
        </div>

        <article className="rounded-[22px] border border-slate-800 bg-[linear-gradient(180deg,rgba(11,20,31,0.96),rgba(8,15,24,0.98))] p-5">
          <section className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Qué estás aprendiendo</p>
              <h2 className="mt-2 text-lg font-bold text-slate-50">{lesson.goal}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Idea central: {lesson.keyIdeas[0]?.description}
              </p>
            </div>

            <div className="rounded-[18px] border border-slate-800 bg-slate-950/55 p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-brand-300" />
                  <h3 className="text-sm font-semibold text-slate-100">Ejemplo breve</h3>
                </div>
                <a href="#practica" className="text-sm font-semibold text-brand-300">
                  Probar ahora
                </a>
              </div>
              <div className="mt-3">
                <CodePanel code={lesson.example} />
              </div>
            </div>
          </section>

          <section id="practica" className="mt-8 border-t border-slate-800 pt-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Qué hacer ahora</p>
                <h3 className="mt-2 text-lg font-bold text-slate-50">Práctica principal</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{lesson.practicePrompt}</p>
              </div>
              {exercise ? (
                <Link href={`/exercise/${exercise.slug}`} className="hidden shrink-0 items-center gap-2 font-semibold text-brand-300 sm:inline-flex">
                  Ir al ejercicio <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
            </div>

            <div className="mt-4 rounded-[18px] border border-slate-800 bg-slate-950/55 px-4 py-3 text-sm text-slate-300">
              {lesson.practiceChecklist[0]}
            </div>

            <div className="mt-4">
              {lesson.playground ? (
                <PythonPlayground
                  config={lesson.playground}
                  initialCode={lessonDraft?.content ?? lesson.playground.starterCode}
                  restoredDraftUpdatedAt={lessonDraft?.updatedAt ?? null}
                  draftScope="lesson"
                  draftSlug={lesson.slug}
                />
              ) : null}
            </div>
          </section>

          <section className="mt-8 space-y-4">
            <details className="rounded-[16px] border border-slate-800 bg-slate-950/60 px-4 py-3">
              <summary className="cursor-pointer text-sm font-semibold text-slate-200">
                Ver explicación y puntos clave
              </summary>
              <div className="mt-3 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                <div className="space-y-4">
                  {lesson.keyIdeas.slice(1).map((idea) => (
                    <div key={idea.title}>
                      <p className="text-sm font-semibold text-slate-100">{idea.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{idea.description}</p>
                    </div>
                  ))}
                  {lesson.explanation.map((section) => (
                    <div key={section.title}>
                      <p className="text-sm font-semibold text-slate-100">{section.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{section.body}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Wrench className="h-4 w-4 text-brand-300" />
                      <h3 className="text-sm font-semibold text-slate-100">Bug para revisar</h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{lesson.bugChallenge.prompt}</p>
                    <div className="mt-3">
                      <CodePanel code={lesson.bugChallenge.brokenCode} />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{lesson.bugChallenge.expectedLearning}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-100">Errores frecuentes</p>
                    <div className="mt-2 space-y-2">
                      {lesson.commonMistakes.map((mistake) => (
                        <div key={mistake} className="text-sm leading-6 text-slate-400">
                          {mistake}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-100">Checklist completa</p>
                    <div className="mt-2 space-y-2">
                      {lesson.practiceChecklist.slice(1).map((item) => (
                        <div key={item} className="text-sm leading-6 text-slate-400">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </details>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-5">
              <div className="text-sm text-slate-400">
                {isRoute3Capstone
                  ? "Al completar esta lección cierras Ruta 3 y la base actual."
                  : isFoundationsCapstone
                    ? "Al completar esta lección cierras fundamentos y abres la siguiente ruta."
                    : "Completarla mueve tu progreso y habilita el siguiente paso."}
              </div>
              <div className="flex flex-wrap gap-3">
                {exercise ? (
                  <Link href={`/exercise/${exercise.slug}`} className="inline-flex items-center gap-2 font-semibold text-brand-300 sm:hidden">
                    Ir al ejercicio <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
                {nextLesson ? (
                  <Link href={`/lesson/${nextLesson.slug}`} className="font-semibold text-brand-300">
                    {isFoundationsCapstone ? `Abrir nueva etapa` : "Siguiente lección"}
                  </Link>
                ) : null}
              </div>
            </div>
          </section>
        </article>

        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
          {previousLesson ? (
            <Link href={`/lesson/${previousLesson.slug}`} className="font-semibold text-brand-300">
              Anterior: {previousLesson.title}
            </Link>
          ) : (
            <span>Inicio de la ruta</span>
          )}

          {(isFoundationsCapstone || isRoute3Capstone) && !nextLesson ? (
            <Link href="/dashboard" className="font-semibold text-brand-300">
              Volver al panel
            </Link>
          ) : null}
        </div>
      </section>

      <MentorWidget
        context={{
          title: lesson.title,
          topic: lesson.module,
          pageType: "lesson",
          codeSnippet: lesson.example
        }}
      />
    </AppShell>
  );
}
