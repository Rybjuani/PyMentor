import { Award } from "lucide-react";
import { Achievement } from "@/types";
import { cn } from "@/lib/utils";

export function AchievementChip({ achievement }: { achievement: Achievement }) {
  return (
    <div
      className={cn(
        "rounded-[24px] border px-4 py-4",
        achievement.state === "earned" && "border-emerald-200 bg-emerald-50",
        achievement.state === "next" && "border-brand-200 bg-brand-50",
        achievement.state === "locked" && "border-slate-200 bg-slate-50"
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "mt-1 flex h-10 w-10 items-center justify-center rounded-2xl",
            achievement.state === "earned" && "bg-emerald-100 text-emerald-700",
            achievement.state === "next" && "bg-brand-100 text-brand-700",
            achievement.state === "locked" && "bg-slate-200 text-slate-500"
          )}
        >
          <Award className="h-4 w-4" />
        </div>
        <div>
          <p className="font-semibold text-slate-900">{achievement.title}</p>
          <p className="mt-1 text-sm text-slate-600">{achievement.description}</p>
        </div>
      </div>
    </div>
  );
}
