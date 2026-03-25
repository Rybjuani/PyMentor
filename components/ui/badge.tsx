import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "neutral"
}: {
  children: React.ReactNode;
  tone?: "neutral" | "brand" | "success" | "warning";
}) {
  const tones = {
    neutral: "bg-slate-100 text-slate-700",
    brand: "bg-brand-50 text-brand-700",
    success: "bg-emerald-50 text-emerald-700",
    warning: "bg-amber-50 text-amber-700"
  };

  return (
    <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", tones[tone])}>
      {children}
    </span>
  );
}
