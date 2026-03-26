import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  compact = false
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.35rem] border border-brand-300/20 bg-[linear-gradient(135deg,rgba(12,185,113,0.24),rgba(78,203,255,0.18)_48%,rgba(255,214,107,0.16))] shadow-[0_0_42px_rgba(29,211,139,0.18)] ring-1 ring-white/10",
        compact ? "h-11 w-11" : "h-12 w-12",
        className
      )}
    >
      <div className="absolute inset-[1px] rounded-[1.2rem] bg-[radial-gradient(circle_at_30%_22%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(160deg,rgba(5,12,19,0.94),rgba(11,27,40,0.94)_55%,rgba(15,53,72,0.88))]" />
      <div className="absolute inset-0 opacity-60">
        <div className="absolute left-[22%] top-[18%] h-[58%] w-[2px] rounded-full bg-brand-300/80 shadow-[0_0_16px_rgba(29,211,139,0.55)]" />
        <div className="absolute left-[22%] top-[18%] h-[2px] w-[45%] rounded-full bg-brand-300/70 shadow-[0_0_14px_rgba(29,211,139,0.45)]" />
        <div className="absolute bottom-[20%] left-[22%] h-[2px] w-[52%] rounded-full bg-sky-300/80 shadow-[0_0_14px_rgba(78,203,255,0.45)]" />
        <div className="absolute right-[20%] top-[22%] h-[56%] w-[2px] rounded-full bg-sky-300/80 shadow-[0_0_16px_rgba(78,203,255,0.42)]" />
      </div>
      <div className="absolute bottom-[22%] left-[22%] right-[20%] top-[22%] rounded-[0.8rem] border border-white/10" />
      <div className="absolute right-[19%] top-[16%] h-2 w-2 rounded-full bg-gold/90 shadow-[0_0_16px_rgba(255,214,107,0.55)]" />
    </div>
  );
}
