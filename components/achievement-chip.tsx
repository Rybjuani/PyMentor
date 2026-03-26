import { Award, LockKeyhole, Sparkles } from "lucide-react";
import { Achievement } from "@/types";
import { cn } from "@/lib/utils";

export function AchievementChip({ achievement }: { achievement: Achievement }) {
  return (
    <div
      className={cn(
        "rounded-[24px] border px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
        achievement.state === "earned" && "border-emerald-400/20 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_34%),linear-gradient(180deg,rgba(12,31,27,0.98),rgba(8,20,18,0.98))]",
        achievement.state === "next" && "border-brand-400/20 bg-[radial-gradient(circle_at_top_left,rgba(29,211,139,0.14),transparent_34%),linear-gradient(180deg,rgba(10,28,31,0.98),rgba(8,17,25,0.98))]",
        achievement.state === "locked" && "border-slate-800 bg-slate-900/80"
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "mt-1 flex h-10 w-10 items-center justify-center rounded-2xl ring-1",
            achievement.state === "earned" && "bg-emerald-500/15 text-emerald-200 ring-emerald-400/20 shadow-[0_0_20px_rgba(16,185,129,0.12)]",
            achievement.state === "next" && "bg-brand-500/15 text-brand-200 ring-brand-400/20 shadow-[0_0_20px_rgba(29,211,139,0.12)]",
            achievement.state === "locked" && "bg-slate-800 text-slate-500"
          )}
        >
          {achievement.state === "earned" ? (
            <Award className="h-4 w-4" />
          ) : achievement.state === "next" ? (
            <Sparkles className="h-4 w-4" />
          ) : (
            <LockKeyhole className="h-4 w-4" />
          )}
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            {achievement.state === "earned" ? "Hito logrado" : achievement.state === "next" ? "Siguiente desbloqueo" : "Aún bloqueado"}
          </p>
          <p className="mt-1 font-semibold text-slate-100">{achievement.title}</p>
          <p className="mt-1 text-sm text-slate-400">{achievement.description}</p>
        </div>
      </div>
    </div>
  );
}
