import { cn } from "@/lib/utils";

export function ProgressBar({
  value,
  className
}: {
  value: number;
  className?: string;
}) {
  return (
    <div className={cn("h-3 w-full overflow-hidden rounded-full bg-slate-900 ring-1 ring-slate-800 shadow-[inset_0_1px_4px_rgba(0,0,0,0.4)]", className)}>
      <div
        className="signal-line relative h-full rounded-full bg-[linear-gradient(90deg,#0CB971_0%,#26d7a2_58%,#4ecbff_100%)] shadow-[0_0_20px_rgba(29,211,139,0.35)] after:absolute after:inset-y-0 after:right-0 after:w-10 after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)]"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}
