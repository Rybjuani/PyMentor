import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { getServerAuthSession } from "@/lib/auth";
import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/#how-it-works", label: "Cómo funciona" },
  { href: "/#roadmap-preview", label: "Ruta" },
  { href: "/#mentor-preview", label: "Mentor IA" },
  { href: "/dashboard", label: "Vista previa" }
];

export async function SiteHeader() {
  const session = await getServerAuthSession();

  return (
    <header className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
      <Link href="/" className="flex w-full items-center gap-3 text-white lg:w-auto">
        <BrandMark compact />
        <span className="min-w-0">
          <span className="block text-lg font-extrabold tracking-tight">PyMentor</span>
          <span className="block text-xs text-slate-300">
            Ruta viva de Python para principiantes
          </span>
        </span>
      </Link>

      <nav className="mission-grid no-scrollbar flex w-full items-center gap-3 overflow-x-auto rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 backdrop-blur lg:w-auto lg:px-5">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap rounded-full px-3 py-1.5 transition hover:bg-white/5 hover:text-brand-200">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex w-full items-center gap-3 sm:w-auto">
        <div className="hidden items-center gap-2 rounded-full border border-brand-400/15 bg-brand-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-100 xl:inline-flex">
          <ShieldCheck className="h-3.5 w-3.5" />
          Ruta guiada
        </div>
        {session?.user?.id ? (
          <Button href="/dashboard" className="w-full sm:w-auto">
            Abrir panel <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <>
            <Button href="/login" variant="ghost" className="hidden sm:inline-flex">
              Iniciar sesión
            </Button>
            <Button href="/signup" className="w-full sm:w-auto">
              Empezar <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
