import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Flame,
  LayoutDashboard,
  Route,
  Sparkles,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/dashboard", label: "Panel", icon: LayoutDashboard },
  { href: "/roadmap", label: "Ruta", icon: Route },
  { href: "/lesson/python-conditionals-basics", label: "Lección", icon: Sparkles },
  { href: "/exercise/fix-the-conditional", label: "Ejercicio", icon: Bot }
];

export function AppShell({
  title,
  description,
  userName,
  actions,
  children
}: {
  title: string;
  description: string;
  userName?: string | null;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(29,211,139,0.12),transparent_18%),radial-gradient(circle_at_80%_0%,rgba(78,203,255,0.12),transparent_20%),linear-gradient(180deg,#03060d_0%,#08111a_36%,#0b1620_100%)] text-slate-100">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-6 px-4 py-4 lg:grid-cols-[280px_1fr] lg:px-6">
        <aside className="app-surface panel-glow rounded-[36px] px-5 py-6">
          <Link href="/" className="mb-10 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0CB971,#4ecbff)] text-slate-950 shadow-[0_0_30px_rgba(29,211,139,0.22)]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="font-extrabold">PyMentor</div>
              <div className="text-sm text-slate-400">Centro de misión para aprender Python</div>
            </div>
          </Link>

          <nav className="space-y-2">
            {items.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center justify-between rounded-2xl border border-transparent bg-white/[0.02] px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-brand-400/15 hover:bg-brand-500/10 hover:text-brand-100"
                )}
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-4 w-4" />
                  {label}
                </span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </nav>

          <div className="mt-8 rounded-[28px] border border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.18),transparent_35%),linear-gradient(135deg,#07111a_0%,#0c1d28_45%,#123244_100%)] p-5 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 ring-1 ring-white/10">
                <Target className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">Misión actual</p>
                <p className="text-xs text-slate-300">Un paso fuerte a la vez</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              Completa una lección o un ejercicio enfocado para mantener tu cadena activa y desbloquear el siguiente paso visible.
            </p>
            <Link
              href="/lesson/python-conditionals-basics"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-200"
            >
              Retomar misión <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-4 rounded-[28px] border border-slate-800 bg-[linear-gradient(180deg,rgba(10,18,29,0.96),rgba(8,15,25,0.96))] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/12 text-amber-300">
                <Flame className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-100">Cadena de impulso</p>
                <p className="text-xs text-slate-400">Cuida tu ritmo</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Incluso diez minutos enfocados cuentan. Este espacio premia el avance constante, no el desgaste.
            </p>
          </div>
        </aside>

        <main className="space-y-6 rounded-[36px] border border-slate-800/80 bg-[linear-gradient(180deg,rgba(7,13,20,0.76),rgba(7,13,20,0.92))] p-5 shadow-soft ring-1 ring-white/5 lg:p-8">
          <header className="rounded-[32px] border border-brand-400/15 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(78,203,255,0.18),transparent_24%),linear-gradient(135deg,#07111a_0%,#0c1927_48%,#123346_100%)] px-6 py-8 text-white">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-200">
                  {userName ? `Operador ${userName}` : "Sistema de progreso pensado para principiantes"}
                </p>
                <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight lg:text-4xl">{title}</h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">{description}</p>
              </div>
              {actions ? <div>{actions}</div> : null}
            </div>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
