import Link from "next/link";
import { Bot, LayoutDashboard, Route, Sparkles } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { cn } from "@/lib/utils";

const items = [
  { href: "/dashboard", label: "Panel", icon: LayoutDashboard },
  { href: "/roadmap", label: "Ruta", icon: Route },
  { href: "/lesson/what-is-programming", label: "Lección", icon: Sparkles },
  { href: "/exercise/welcome-message-fix", label: "Ejercicio", icon: Bot }
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(29,211,139,0.1),transparent_18%),radial-gradient(circle_at_88%_0%,rgba(78,203,255,0.08),transparent_16%),linear-gradient(180deg,#03060d_0%,#08111a_40%,#0b1620_100%)] text-slate-100">
      <div className="mx-auto max-w-7xl px-3 py-3 sm:px-4 sm:py-4 lg:px-6">
        <div className="grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="rounded-[28px] border border-slate-800/80 bg-[linear-gradient(180deg,rgba(10,18,29,0.94),rgba(8,15,25,0.98))] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.36)]">
            <Link href="/" className="flex items-center gap-3">
              <BrandMark compact />
              <div className="min-w-0">
                <div className="font-extrabold text-slate-50">PyMentor</div>
                <div className="text-xs text-slate-400">Base completa de Python</div>
              </div>
            </Link>

            <nav className="mt-5 flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0">
              {items.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "inline-flex min-w-[124px] items-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:border-brand-400/20 hover:text-slate-50 lg:flex lg:min-w-0"
                  )}
                >
                  <Icon className="h-4 w-4 text-slate-400" />
                  {label}
                </Link>
              ))}
            </nav>

            <div className="mt-5 rounded-[22px] border border-brand-400/15 bg-brand-500/10 px-4 py-4 text-sm text-brand-100">
              <p className="font-semibold text-brand-50">Un paso útil por vez</p>
              <p className="mt-2 leading-6 text-brand-100/90">
                Menos ruido, más progreso visible, práctica real y ayuda a mano cuando hace falta.
              </p>
            </div>
          </aside>

          <main className="rounded-[28px] border border-slate-800/80 bg-[linear-gradient(180deg,rgba(7,13,20,0.78),rgba(7,13,20,0.94))] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.34)] sm:p-5 lg:p-6">
            <header className="border-b border-slate-800/80 pb-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {userName ? userName : "PyMentor"}
                  </p>
                  <h1 className="mt-2 max-w-3xl text-2xl font-extrabold tracking-tight text-slate-50 sm:text-3xl">
                    {title}
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">{description}</p>
                </div>
                {actions ? <div className="w-full sm:w-auto">{actions}</div> : null}
              </div>
            </header>
            <div className="mt-6 space-y-6">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
