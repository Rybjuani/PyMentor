import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "neutral"
}: {
  children: React.ReactNode;
  tone?: "neutral" | "brand" | "success" | "warning";
}) {
  const tones = {
    neutral: "bg-slate-900/90 text-slate-300 ring-1 ring-slate-700/80",
    brand: "bg-brand-500/12 text-brand-200 ring-1 ring-brand-400/20",
    success: "bg-emerald-500/12 text-emerald-200 ring-1 ring-emerald-400/20",
    warning: "bg-amber-500/12 text-amber-200 ring-1 ring-amber-300/20"
  };

  return (
    <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", tones[tone])}>
      {children}
    </span>
  );
}
