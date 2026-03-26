import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, FolderGit2, TerminalSquare } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { courseModules } from "@/lib/course-content";

const valuePoints = [
  {
    title: "Tres módulos con salto real",
    description: "Fundamentos, utilidades con datos y herramientas más estructuradas. No es un recorrido mínimo."
  },
  {
    title: "Mentor dentro del flujo",
    description: "Pistas, aclaraciones y ayuda para depurar sin salir de la lección o del ejercicio."
  },
  {
    title: "Práctica con salida visible",
    description: "Código ejecutable, feedback de ejercicios y proyectos que se sienten como herramientas."
  }
];

export default function HomePage() {
  return (
    <div>
      <SiteHeader />

      <main className="pb-20">
        <section className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,29,0.92),rgba(8,15,25,0.98))] p-6 shadow-[0_32px_90px_rgba(0,0,0,0.34)] sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/15 bg-brand-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-100">
                Base completa de Python
              </div>
              <h1 className="mt-5 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Aprende Python con una base seria, práctica y defendible.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                PyMentor está diseñado para salir con una base defendible: fundamentos sólidos, utilidades pequeñas,
                manejo simple de datos, organización de código y proyectos graduales.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/signup" className="w-full sm:w-auto">Empezar</Button>
                <Button href="/roadmap" variant="ghost" className="w-full sm:w-auto">
                  Ver los módulos
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {valuePoints.map((item) => (
                  <div key={item.title} className="rounded-[22px] border border-slate-800 bg-slate-950/70 p-4">
                    <p className="text-sm font-semibold text-slate-50">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-brand-400/15 bg-[linear-gradient(180deg,rgba(12,23,35,0.98),rgba(8,16,26,0.98))] p-6 text-slate-100 shadow-[0_32px_90px_rgba(0,0,0,0.34)]">
              <div className="flex items-center gap-3">
                <BrandMark className="h-12 w-12 rounded-[1rem]" compact />
                <div>
                  <p className="text-sm font-semibold text-slate-50">Lo que sostienen los 3 módulos</p>
                  <p className="text-sm text-slate-400">Una base útil, no decorativa</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-[20px] border border-slate-800 bg-slate-950/70 p-4">
                  <div className="flex items-center gap-2 font-semibold text-slate-100">
                    <TerminalSquare className="h-4 w-4 text-brand-300" />
                    Módulo 1
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Variables, `input()`, decisiones, bucles, funciones y un primer capstone útil.
                  </p>
                </div>
                <div className="rounded-[20px] border border-slate-800 bg-slate-950/70 p-4">
                  <div className="flex items-center gap-2 font-semibold text-slate-100">
                    <FolderGit2 className="h-4 w-4 text-brand-300" />
                    Módulo 2
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Listas, diccionarios, strings, archivos y utilidades que ya trabajan con datos reales.
                  </p>
                </div>
                <div className="rounded-[20px] border border-slate-800 bg-slate-950/70 p-4">
                  <div className="flex items-center gap-2 font-semibold text-slate-100">
                    <Bot className="h-4 w-4 text-brand-300" />
                    Módulo 3
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Scripts más limpios, JSON, parsing, arquitectura multiarchivo y un proyecto final más serio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="rutas" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {courseModules.slice(0, 4).map((module) => (
              <div key={module.slug} className="rounded-[24px] border border-slate-800 bg-[linear-gradient(180deg,rgba(12,20,31,0.96),rgba(8,15,24,0.98))] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Etapa {module.order}</p>
                <h2 className="mt-3 text-xl font-bold text-slate-50">{module.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{module.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="mentor" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
            <div className="rounded-[28px] border border-slate-800 bg-[linear-gradient(180deg,rgba(12,20,31,0.96),rgba(8,15,24,0.98))] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-300">Mentor integrado</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-50">Ayuda cuando bloquea, no como adorno.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                El mentor vive dentro de lecciones y ejercicios. Sirve para pedir una pista, ordenar el problema
                o depurar un error puntual sin perder el hilo del trabajo.
              </p>
            </div>
            <div className="rounded-[28px] border border-brand-400/15 bg-brand-500/10 p-6 text-brand-100">
              <p className="text-sm font-semibold text-brand-50">Ejemplos de uso útil</p>
              <div className="mt-4 space-y-3">
                {[
                  "No entiendo por qué esta condición da falso.",
                  "Muéstrame el primer paso para arreglar este error.",
                  "Divide este ejercicio en tres pasos concretos."
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-[18px] border border-brand-400/15 bg-black/10 px-4 py-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-50" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="practica" className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-10">
          <div className="rounded-[30px] border border-brand-400/15 bg-[linear-gradient(135deg,#07111a_0%,#0d1d2c_40%,#0f3140_100%)] px-6 py-8 text-white shadow-[0_32px_90px_rgba(0,0,0,0.34)] sm:px-8 sm:py-10">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Menos discurso. Más práctica que sí deja algo.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85">
              La promesa no es pasar por ejercicios triviales. Es terminar con mini herramientas, proyectos guiados,
              capstones y una base que puedas explicar con honestidad.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/signup" variant="secondary" className="w-full sm:w-auto">
                Empezar ahora
              </Button>
              <Link href="/roadmap" className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                Revisar los 3 módulos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
