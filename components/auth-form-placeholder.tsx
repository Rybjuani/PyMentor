import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AuthFormPlaceholder({
  title,
  subtitle,
  alternateHref,
  alternateLabel
}: {
  title: string;
  subtitle: string;
  alternateHref: string;
  alternateLabel: string;
}) {
  return (
    <Card className="mx-auto w-full max-w-md p-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">{title}</h1>
      <p className="mt-3 text-sm text-slate-600">{subtitle}</p>

      <div className="mt-8 grid gap-4">
        <div className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-400">
          Email address
        </div>
        <div className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-400">
          Password
        </div>
        <Button className="w-full justify-center">Continue</Button>
      </div>

      <div className="mt-6 rounded-2xl bg-brand-50 p-4 text-sm text-brand-700">
        Auth is scaffolded intentionally. Replace this UI with Clerk, Supabase Auth, or Auth.js without changing route structure.
      </div>

      <p className="mt-6 text-sm text-slate-600">
        <Link href={alternateHref} className="font-semibold text-brand-600">
          {alternateLabel}
        </Link>
      </p>
    </Card>
  );
}
