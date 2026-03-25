import Link from "next/link";
import { Code2 } from "lucide-react";
import { getServerAuthSession } from "@/lib/auth";
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
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(12,185,113,0.24),rgba(78,203,255,0.16))] ring-1 ring-brand-400/20 shadow-[0_0_32px_rgba(29,211,139,0.18)]">
          <Code2 className="h-5 w-5" />
        </span>
        <span className="min-w-0">
          <span className="block text-lg font-extrabold tracking-tight">PyMentor</span>
          <span className="block text-xs text-slate-300">
            Progreso en Python para principiantes
          </span>
        </span>
      </Link>

      <nav className="no-scrollbar flex w-full items-center gap-3 overflow-x-auto rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 backdrop-blur lg:w-auto lg:px-5">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-brand-200">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex w-full items-center gap-3 sm:w-auto">
        {session?.user?.id ? (
          <Button href="/dashboard" className="w-full sm:w-auto">Abrir panel</Button>
        ) : (
          <>
            <Button href="/login" variant="ghost" className="hidden sm:inline-flex">
              Iniciar sesión
            </Button>
            <Button href="/signup" className="w-full sm:w-auto">Empezar</Button>
          </>
        )}
      </div>
    </header>
  );
}
