import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Compass, Crosshair, NotebookPen, ShieldCheck, Swords, Zap } from "lucide-react";
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
  const lessonSections = [
    { href: "#objetivo", label: "Objetivo" },
    { href: "#ideas-clave", label: "Ideas clave" },
    { href: "#practica", label: "Práctica" },
    { href: "#bug-fix", label: "Bug-fix" },
    { href: "#mentor", label: "Mentor" },
    { href: "#cierre", label: "Cierre" }
  ];
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
      <section className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="space-y-5">
          <Card className="mission-grid rounded-[30px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.1),transparent_28%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))]">
            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="brand">{lesson.module}</Badge>
              <Badge tone="neutral">{lesson.duration}</Badge>
              <Badge tone="success">{lesson.difficulty === "Beginner" ? "Principiante" : "Inicial"}</Badge>
              <Badge tone={lessonStatus === "completed" ? "success" : lessonStatus === "in_progress" ? "brand" : "neutral"}>
                {lessonStatus === "completed"
                  ? "Completada"
                  : lessonStatus === "in_progress"
                    ? "En progreso"
                    : "Sin empezar"}
              </Badge>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Misión</p>
                <p className="mt-2 text-lg font-bold text-slate-50">Checkpoint activo</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Esta lección está diseñada para mover una parte concreta de tu ruta.</p>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Tramo</p>
                <p className="mt-2 text-lg font-bold text-slate-50">
                  Lección {position.current} de {position.total}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">La ruta sigue siendo visible mientras practicas.</p>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Impulso</p>
                <p className="mt-2 text-lg font-bold text-slate-50">{moduleProgress.percent}%</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Progreso actual dentro del módulo.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div id="objetivo" className="rounded-[24px] border border-slate-800 bg-slate-950/70 p-5 scroll-mt-24">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <Compass className="h-4 w-4 text-brand-300" />
                  Posición de la lección
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Lección {position.current} de {position.total} en {lesson.module}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Progreso del módulo: {moduleProgress.completedLessons} de {moduleProgress.totalLessons} lecciones completas
                </p>
              </div>
              <div className="rounded-[24px] border border-brand-400/15 bg-brand-500/10 p-5 shadow-[0_0_24px_rgba(29,211,139,0.08)]">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-200">
                  <CheckCircle2 className="h-4 w-4" />
                  Tu objetivo de hoy
                </div>
                <p className="mt-3 text-sm leading-7 text-brand-100">{lesson.goal}</p>
              </div>
            </div>
            <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.03] px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Ruta dentro de la lección</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {lessonSections.map((section) => (
                  <a
                    key={section.href}
                    href={section.href}
                    className="rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:border-brand-400/15 hover:text-brand-200"
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            </div>
          </Card>

          <Card id="ideas-clave" className="rounded-[30px] scroll-mt-24">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-brand-300" />
                <h2 className="text-xl font-bold text-slate-50">Ideas clave primero</h2>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Lectura rápida
              </span>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {lesson.keyIdeas.map((idea) => (
                <div key={idea.title} className="rounded-[22px] border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-300">Clave</p>
                  <h3 className="text-sm font-semibold text-slate-100">{idea.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{idea.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="rounded-[30px]">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <NotebookPen className="h-5 w-5 text-brand-300" />
                <h2 className="text-xl font-bold text-slate-50">Explicación</h2>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Paso a paso
              </span>
            </div>
            <div className="mt-6 space-y-6">
              {lesson.explanation.map((section, index) => (
                <div key={section.title} className="rounded-[24px] border border-slate-800 bg-slate-950/70 p-5">
                  <p className="text-sm font-semibold text-brand-300">Parte {index + 1}</p>
                  <h2 className="mt-2 text-xl font-bold text-slate-50">{section.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{section.body}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="mission-grid rounded-[30px]">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-slate-50">Ejemplo en Python</h2>
              <span className="rounded-full border border-brand-400/15 bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-100">
                Leer antes de correr
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Lee el código despacio. Pregúntate qué revisa Python primero y qué salida debería aparecer.
            </p>
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

          <Card id="practica" className="mission-grid rounded-[30px] scroll-mt-24">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-slate-50">Práctica</h2>
              <span className="rounded-full border border-brand-400/15 bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-100">
                Mover la misión
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">{lesson.practicePrompt}</p>
            <div className="mt-5 rounded-[24px] border border-slate-800 bg-slate-950/70 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                <Crosshair className="h-4 w-4 text-brand-300" />
                Una forma simple de encararlo
              </div>
              <div className="mt-3 space-y-3">
                {lesson.practiceChecklist.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {exercise ? (
              <Link
                href={`/exercise/${exercise.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-300"
              >
                Abrir el ejercicio vinculado <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </Card>

          <Card className="rounded-[30px]">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-slate-50">Errores comunes</h2>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Mirar con calma
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {lesson.commonMistakes.map((mistake) => (
                <div key={mistake} className="rounded-[20px] border border-slate-800 bg-slate-950/70 px-4 py-4 text-sm text-slate-300">
                  {mistake}
                </div>
              ))}
            </div>
          </Card>

          <Card id="bug-fix" className="mission-grid rounded-[30px] border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.08),transparent_30%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))] scroll-mt-24">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-slate-50">Desafío: arregla el bug</h2>
              <span className="rounded-full border border-brand-400/15 bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-100">
                Debug mission
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">{lesson.bugChallenge.prompt}</p>
            <div className="mt-4">
              <CodePanel code={lesson.bugChallenge.brokenCode} />
            </div>
            <p className="mt-4 rounded-[20px] border border-brand-400/15 bg-brand-500/10 px-4 py-4 text-sm text-brand-100 shadow-[0_0_18px_rgba(29,211,139,0.08)]">
              Objetivo de aprendizaje: {lesson.bugChallenge.expectedLearning}
            </p>
          </Card>

          <Card id="cierre" className="mission-grid rounded-[30px] scroll-mt-24">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-slate-50">Finalización</h2>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Cerrar checkpoint
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              {isFoundationsCapstone
                ? "Completar esta lección deja visible que cerraste la primera gran etapa de PyMentor y abre, con claridad, la siguiente ruta del producto."
                : "Marcar una lección como completada actualiza tu ruta, tu panel y el flujo para seguir aprendiendo en esta cuenta."}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-slate-300">
                <div className="flex items-center gap-2 font-semibold text-slate-100">
                  <ShieldCheck className="h-4 w-4 text-brand-300" />
                  Qué cambia al completar
                </div>
                <p className="mt-2 leading-6 text-slate-400">
                  Esta lección actualiza tu ruta, tu panel y el siguiente punto de avance visible.
                </p>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-slate-300">
                <div className="flex items-center gap-2 font-semibold text-slate-100">
                  <Swords className="h-4 w-4 text-brand-300" />
                  Estado actual
                </div>
                <p className="mt-2 leading-6 text-slate-400">
                  {lessonStatus === "completed"
                    ? "Ya cerraste este checkpoint."
                    : lessonStatus === "in_progress"
                      ? "El checkpoint ya está activo en tu cuenta."
                      : "Todavía no marcaste este checkpoint dentro de la ruta."}
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {lessonStatus === "not_started" ? (
                <ProgressAction entityType="lesson" slug={lesson.slug} status="in_progress" variant="secondary">
                  Marcar lección en progreso
                </ProgressAction>
              ) : null}
              <ProgressAction entityType="lesson" slug={lesson.slug} status="completed">
                Marcar lección como completada
              </ProgressAction>
              {nextLesson ? (
                <Link
                  href={`/lesson/${nextLesson.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 ring-1 ring-slate-700"
                >
                  {isFoundationsCapstone ? "Abrir la nueva etapa" : "Siguiente lección"}
                </Link>
              ) : isFoundationsCapstone ? (
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 ring-1 ring-slate-700"
                >
                  Volver al panel de cierre
                </Link>
              ) : null}
            </div>
          </Card>

          <div className="mission-grid flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-slate-800 bg-slate-950/70 px-5 py-4 text-sm text-slate-400">
            {previousLesson ? (
              <Link href={`/lesson/${previousLesson.slug}`} className="font-semibold text-brand-300">
                Anterior: {previousLesson.title}
              </Link>
            ) : (
              <span>Inicio de la ruta</span>
            )}
            {nextLesson ? (
              <Link href={`/lesson/${nextLesson.slug}`} className="font-semibold text-brand-300">
                {isFoundationsCapstone ? `Nueva etapa: ${nextLesson.title}` : `Siguiente: ${nextLesson.title}`}
              </Link>
            ) : isFoundationsCapstone ? (
              <span>Fin de la primera gran ruta de Python</span>
            ) : (
              <span>Última lección por ahora</span>
            )}
          </div>
        </div>

        <div id="mentor" className="xl:sticky xl:top-4 xl:self-start scroll-mt-24">
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
