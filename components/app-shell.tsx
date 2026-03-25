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
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/roadmap", label: "Roadmap", icon: Route },
  { href: "/lesson/python-conditionals-basics", label: "Lesson", icon: Sparkles },
  { href: "/exercise/fix-the-conditional", label: "Exercise", icon: Bot }
];

export function AppShell({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#edf4fb] text-slate-900 [background-image:radial-gradient(circle_at_top,rgba(77,146,255,0.16),transparent_22%),linear-gradient(180deg,#eff5fc_0%,#edf4fb_100%)]">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-6 px-4 py-4 lg:grid-cols-[280px_1fr] lg:px-6">
        <aside className="app-surface rounded-[36px] border border-white/80 bg-white/80 px-5 py-6 shadow-soft">
          <Link href="/" className="mb-10 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="font-extrabold">PyMentor</div>
              <div className="text-sm text-slate-500">Your calm Python workspace</div>
            </div>
          </Link>

          <nav className="space-y-2">
            {items.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
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

          <div className="mt-8 rounded-[28px] bg-gradient-to-br from-slate-950 via-slate-900 to-brand-700 p-5 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                <Target className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">Next suggested step</p>
                <p className="text-xs text-slate-300">Small win for today</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              Continue conditionals, fix one bug, and keep your streak warm without overloading yourself.
            </p>
            <Link
              href="/lesson/python-conditionals-basics"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-200"
            >
              Resume lesson <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-4 rounded-[28px] border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <Flame className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Streak in progress</p>
                <p className="text-xs text-slate-500">3 calm days in a row</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Even ten focused minutes counts. PyMentor is built for steady momentum, not cramming.
            </p>
          </div>
        </aside>

        <main className="space-y-6 rounded-[36px] bg-white/70 p-5 shadow-soft ring-1 ring-white/70 lg:p-8">
          <header className="rounded-[32px] bg-[radial-gradient(circle_at_top_left,rgba(126,182,255,0.22),transparent_28%),linear-gradient(135deg,#081120_0%,#12213c_55%,#1f5dc7_100%)] px-6 py-8 text-white">
            <p className="text-sm font-semibold text-brand-100">Beginner-safe learning experience</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight lg:text-4xl">{title}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200">{description}</p>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
