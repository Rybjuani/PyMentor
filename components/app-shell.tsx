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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(29,211,139,0.08),transparent_18%),linear-gradient(180deg,#03060d_0%,#08111a_40%,#0b1620_100%)] text-slate-100">
      <div className="mx-auto max-w-7xl px-3 py-3 sm:px-4 sm:py-4 lg:px-6">
        <div className="grid gap-4 lg:grid-cols-[76px_minmax(0,1fr)]">
          <aside className="rounded-[24px] border border-slate-800/80 bg-[linear-gradient(180deg,rgba(10,18,29,0.94),rgba(8,15,25,0.98))] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
            <Link href="/" className="flex items-center justify-center">
              <BrandMark compact />
            </Link>

            <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {items.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  aria-label={label}
                  title={label}
                  className={cn(
                    "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/70 text-slate-400 transition hover:border-brand-400/20 hover:text-slate-100"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </nav>
          </aside>

          <main className="rounded-[24px] border border-slate-800/80 bg-[linear-gradient(180deg,rgba(7,13,20,0.74),rgba(7,13,20,0.92))] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.28)] sm:p-5 lg:p-6">
            <header className="border-b border-slate-800/80 pb-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {userName ? userName : "PyMentor"}
                  </p>
                  <h1 className="mt-1 max-w-3xl text-2xl font-extrabold tracking-tight text-slate-50 sm:text-3xl">
                    {title}
                  </h1>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{description}</p>
                </div>
                {actions ? <div className="w-full sm:w-auto">{actions}</div> : null}
              </div>
            </header>
            <div className="mt-5 space-y-5">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
