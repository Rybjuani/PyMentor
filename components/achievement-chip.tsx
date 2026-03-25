import { Award } from "lucide-react";
import { Achievement } from "@/types";
import { cn } from "@/lib/utils";

export function AchievementChip({ achievement }: { achievement: Achievement }) {
  return (
    <div
      className={cn(
        "rounded-[24px] border px-4 py-4",
        achievement.state === "earned" && "border-emerald-400/20 bg-emerald-500/10",
        achievement.state === "next" && "border-brand-400/20 bg-brand-500/10",
        achievement.state === "locked" && "border-slate-800 bg-slate-900/80"
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "mt-1 flex h-10 w-10 items-center justify-center rounded-2xl",
            achievement.state === "earned" && "bg-emerald-500/15 text-emerald-200",
            achievement.state === "next" && "bg-brand-500/15 text-brand-200",
            achievement.state === "locked" && "bg-slate-800 text-slate-500"
          )}
        >
          <Award className="h-4 w-4" />
        </div>
        <div>
          <p className="font-semibold text-slate-100">{achievement.title}</p>
          <p className="mt-1 text-sm text-slate-400">{achievement.description}</p>
        </div>
      </div>
    </div>
  );
}
