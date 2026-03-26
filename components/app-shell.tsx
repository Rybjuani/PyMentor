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
        <div className="grid gap-3 lg:grid-cols-[72px_minmax(0,1fr)]">
          <aside className="rounded-[22px] border border-slate-800/70 bg-[linear-gradient(180deg,rgba(10,18,29,0.94),rgba(8,15,25,0.98))] p-2.5 shadow-[0_16px_36px_rgba(0,0,0,0.22)]">
            <Link href="/" className="brandmark-anchor flex items-center justify-center rounded-[18px] py-1">
              <BrandMark compact />
            </Link>

            <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {items.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  aria-label={label}
                  title={label}
                  className={cn(
                    "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[18px] border border-slate-800 bg-slate-950/65 text-slate-400 transition duration-200 hover:-translate-y-0.5 hover:border-brand-400/18 hover:bg-[#0a1722] hover:text-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300/40"
                  )}
                >
                  <Icon className="h-[15px] w-[15px]" />
                </Link>
              ))}
            </nav>
          </aside>

          <main className="rounded-[22px] border border-slate-800/70 bg-[linear-gradient(180deg,rgba(7,13,20,0.74),rgba(7,13,20,0.92))] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.22)] sm:p-5 lg:p-5">
            <header className="border-b border-slate-800/70 pb-3">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200/55">
                    {userName ? userName : "PyMentor"}
                  </p>
                  <h1 className="mt-1 max-w-3xl text-[1.7rem] font-extrabold tracking-tight text-slate-50 sm:text-[2rem]">
                    {title}
                  </h1>
                  <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-400">{description}</p>
                </div>
                {actions ? <div className="w-full sm:w-auto">{actions}</div> : null}
              </div>
            </header>
            <div className="mt-4 space-y-4">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
