import { cn } from "@/lib/utils";

export function ProgressBar({
  value,
  className
}: {
  value: number;
  className?: string;
}) {
  return (
    <div className={cn("h-3 w-full rounded-full bg-slate-100", className)}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-brand-400 to-emerald-400"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}
