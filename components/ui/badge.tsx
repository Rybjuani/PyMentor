import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "neutral"
}: {
  children: React.ReactNode;
  tone?: "neutral" | "brand" | "success" | "warning";
}) {
  const tones = {
    neutral: "bg-slate-900/90 text-slate-300 ring-1 ring-slate-700/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
    brand: "bg-brand-500/12 text-brand-100 ring-1 ring-brand-400/20 shadow-[0_0_20px_rgba(29,211,139,0.08)]",
    success: "bg-emerald-500/12 text-emerald-100 ring-1 ring-emerald-400/20 shadow-[0_0_20px_rgba(16,185,129,0.08)]",
    warning: "bg-amber-500/12 text-amber-100 ring-1 ring-amber-300/20 shadow-[0_0_20px_rgba(251,191,36,0.08)]"
  };

  return (
    <span className={cn("rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]", tones[tone])}>
      {children}
    </span>
  );
}
