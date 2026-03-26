import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getServerAuthSession } from "@/lib/auth";
import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/#rutas", label: "Rutas" },
  { href: "/#mentor", label: "Mentor" },
  { href: "/#practica", label: "Práctica" }
];

export async function SiteHeader() {
  const session = await getServerAuthSession();

  return (
    <header className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
      <Link href="/" className="flex items-center gap-3 text-white">
        <BrandMark compact />
        <span className="min-w-0">
          <span className="block text-lg font-extrabold tracking-tight">PyMentor</span>
          <span className="block text-xs text-slate-400">Python con base real</span>
        </span>
      </Link>

      <nav className="flex items-center gap-4 text-sm text-slate-300">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="transition hover:text-brand-200">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
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
