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
    title: "Nunca sentirte perdido",
    description: "Cada pantalla te explica dónde estás, qué importa ahora y cuál es el siguiente paso."
  },
  {
    icon: Bot,
    title: "Un mentor dentro del flujo",
    description: "Explicaciones simples, pistas cuidadas y guía para depurar viven al lado de la lección."
  },
  {
    icon: Bug,
    title: "Practicar con errores reales",
    description: "Los desafíos de arreglar bugs convierten errores comunes de principiante en momentos de aprendizaje tranquilos."
  },
  {
    icon: ChartNoAxesCombined,
    title: "Progreso visible",
    description: "Ruta, racha y logros crean impulso sin una gamificación ruidosa."
  }
];

const howItWorks = [
  "Empieza con una sola ruta clara de Python pensada para principiantes absolutos.",
  "Aprende con lecciones cortas, ejemplos, práctica y tareas realistas de arreglo de bugs.",
  "Usa el mentor para pedir explicaciones más simples, ayuda paso a paso y apoyo para depurar.",
  "Construye confianza con progreso visible, pequeñas victorias y un acompañamiento suave."
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
                Progreso en Python para principiantes con mentoría IA integrada
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                Aprende Python desde cero en un flujo de progreso enfocado que te invita a seguir avanzando.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                PyMentor le da a quien empieza desde cero un entorno premium de aprendizaje: lecciones claras, práctica guiada, desbloqueos visibles y un mentor IA que ayuda sin invadir.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/signup">Empezar mi ruta de Python</Button>
                <Button href="/dashboard" variant="ghost">
                  Ver la plataforma
                </Button>
              </div>

              <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                  <p className="text-2xl font-extrabold text-white">Python only</p>
                  <p className="mt-1 text-sm text-slate-300">Un lenguaje. Una sola ruta de progreso.</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                  <p className="text-2xl font-extrabold text-white">AI mentor</p>
                  <p className="mt-1 text-sm text-slate-300">Pistas, claridad y ayuda para depurar dentro del contexto.</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                  <p className="text-2xl font-extrabold text-white">Desbloqueos visibles</p>
                  <p className="mt-1 text-sm text-slate-300">Cada lección empuja la ruta hacia adelante.</p>
                </div>
              </div>
            </div>

            <div className="cyan-grid rounded-[40px] border border-white/10 bg-white/[0.03] p-4 shadow-soft">
              <div className="app-surface rounded-[34px] p-5">
                <div className="rounded-[30px] border border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.22),transparent_34%),linear-gradient(135deg,#08111a_0%,#102132_45%,#103445_100%)] p-6 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-brand-100">Misión de hoy</p>
                      <h2 className="mt-2 text-2xl font-bold">Avanza con condicionales</h2>
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold ring-1 ring-white/10">
                      Lección de 12 min
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-brand-50">
                    Aprende cómo Python toma decisiones y supera un checkpoint de depuración con el mentor a tu lado.
                  </p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <Card className="rounded-[26px] border-slate-800 bg-slate-950/80 shadow-none">
                    <p className="text-sm text-slate-400">Progreso de la ruta</p>
                    <p className="mt-3 text-3xl font-extrabold text-slate-50">28%</p>
                    <div className="mt-4 h-2 rounded-full bg-slate-800">
                      <div className="h-full w-[28%] rounded-full bg-[linear-gradient(90deg,#0CB971,#4ecbff)]" />
                    </div>
                  </Card>
                  <Card className="rounded-[26px] border-slate-800 bg-slate-950/80 shadow-none">
                    <p className="text-sm text-slate-400">Señal del mentor</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      “Let’s slow it down together. What question is your `if` statement asking?”
                    </p>
                  </Card>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 px-4 py-4 text-sm text-slate-300">
                    <div className="flex items-center gap-2 font-semibold text-slate-100">
                      <PlayCircle className="h-4 w-4 text-brand-300" />
                      Empezar simple
                    </div>
                    <p className="mt-2 leading-6">The first lessons assume zero experience.</p>
                  </div>
                  <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 px-4 py-4 text-sm text-slate-300">
                    <div className="flex items-center gap-2 font-semibold text-slate-100">
                      <HeartHandshake className="h-4 w-4 text-brand-300" />
                      Seguir acompañado
                    </div>
                    <p className="mt-2 leading-6">The mentor helps inside lessons and exercises.</p>
                  </div>
                  <div className="rounded-[24px] border border-slate-800 bg-slate-950/80 px-4 py-4 text-sm text-slate-300">
                    <div className="flex items-center gap-2 font-semibold text-slate-100">
                      <CheckCircle2 className="h-4 w-4 text-brand-300" />
                      Desbloquear progreso
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
              eyebrow="Cómo funciona PyMentor"
              title="Un camino enfocado y claro para empezar desde cero"
              description="PyMentor no es una biblioteca gigante de cursos. Es una sola ruta de progreso deliberada donde el siguiente paso siempre es visible, alcanzable y vale la pena."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {howItWorks.map((item, index) => (
                <Card key={item} className="rounded-[30px] border-slate-800 bg-slate-950/70">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Paso {index + 1}</p>
                  <p className="mt-4 text-lg font-semibold text-slate-50">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <SectionIntro
            eyebrow="Por qué funciona para principiantes"
            title="El producto está diseñado para bajar el agobio sin perder impulso"
            description="Cada decisión de producto busca que la persona se sienta segura para continuar y, al mismo tiempo, que el progreso se vea real, visible y satisfactorio."
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
                eyebrow="Vista previa de la ruta"
                title="Un solo camino de Python con desbloqueos visibles"
                description="En vez de abrumar con elecciones infinitas, PyMentor ofrece una ruta pensada con etapas bloqueadas, hitos visibles e impulso que se acumula."
              />
              <Link
                href="/roadmap"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300"
              >
                Ver ruta <ArrowRight className="h-4 w-4" />
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
                    Etapa {module.order}
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
                eyebrow="Vista previa del mentor"
                title="Guía dentro del flujo de aprendizaje"
                description="El mentor no es un chatbot ruidoso lejos de la lección. Está dentro del flujo de trabajo, listo para simplificar, dar pistas o ayudar a depurar cuando baja la confianza."
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
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Ejemplo de respuesta del mentor</p>
              <p className="mt-5 text-lg leading-8 text-slate-100">
                “Let’s slow it down together. Your program is asking a question with `if`. First, check whether the comparison is written the way Python expects. Then look for the colon at the end of the line.”
              </p>
              <div className="mt-8 rounded-[24px] bg-white/5 p-5 ring-1 ring-white/10">
                <p className="text-sm text-slate-300">Comunidad futura</p>
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
              Empieza a aprender Python con un impulso que se siente claro, emocionante y real.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90">
              PyMentor les da a los principiantes absolutos una primera experiencia sólida: lecciones claras, práctica guiada, progreso visible y un mentor IA que ayuda sin tomar el control.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/signup" variant="secondary">
                Empezar mi primera lección
              </Button>
              <Button href="/dashboard" variant="ghost">
                Explorar la plataforma
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
