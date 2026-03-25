import Link from "next/link";
import { Code2 } from "lucide-react";
import { getServerAuthSession } from "@/lib/auth";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#roadmap-preview", label: "Roadmap" },
  { href: "/#mentor-preview", label: "AI mentor" },
  { href: "/dashboard", label: "App preview" }
];

export async function SiteHeader() {
  const session = await getServerAuthSession();

  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <Link href="/" className="flex items-center gap-3 text-white">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
          <Code2 className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-lg font-extrabold tracking-tight">PyMentor</span>
          <span className="block text-xs text-slate-300">
            Python learning with guided momentum
          </span>
        </span>
      </Link>

      <nav className="hidden items-center gap-8 text-sm text-slate-200 lg:flex">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="transition hover:text-white">
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
              Log in
            </Button>
            <Button href="/signup">Start learning</Button>
          </>
        )}
      </div>
    </header>
  );
}
