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
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <Link href="/" className="flex items-center gap-3 text-white">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(12,185,113,0.24),rgba(78,203,255,0.16))] ring-1 ring-brand-400/20 shadow-[0_0_32px_rgba(29,211,139,0.18)]">
          <Code2 className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-lg font-extrabold tracking-tight">PyMentor</span>
          <span className="block text-xs text-slate-300">
            Progreso en Python para principiantes
          </span>
        </span>
      </Link>

      <nav className="hidden items-center gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300 backdrop-blur lg:flex">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="transition hover:text-brand-200">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        {session?.user?.id ? (
          <Button href="/dashboard">Open dashboard</Button>
        ) : (
          <>
            <Button href="/login" variant="ghost" className="hidden sm:inline-flex">
              Iniciar sesión
            </Button>
            <Button href="/signup">Empezar</Button>
          </>
        )}
      </div>
    </header>
  );
}
