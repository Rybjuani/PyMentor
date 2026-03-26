import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "neutral"
}: {
  children: React.ReactNode;
  tone?: "neutral" | "brand" | "success" | "warning";
}) {
  const tones = {
    neutral: "bg-slate-900/85 text-slate-300 ring-1 ring-slate-800",
    brand: "bg-brand-500/10 text-brand-100 ring-1 ring-brand-400/16",
    success: "bg-emerald-500/10 text-emerald-100 ring-1 ring-emerald-400/16",
    warning: "bg-amber-500/10 text-amber-100 ring-1 ring-amber-300/16"
  };

  return (
    <span className={cn("rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]", tones[tone])}>
      {children}
    </span>
  );
}
