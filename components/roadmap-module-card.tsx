import Link from "next/link";
import { Lock, Sparkles } from "lucide-react";
import { RoadmapModule } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const statusTone = {
  completed: "success",
  available: "brand",
  locked: "warning"
} as const;

export function RoadmapModuleCard({ module }: { module: RoadmapModule }) {
  return (
    <Card className="flex h-full flex-col justify-between rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,251,255,1))]">
      <div>
        <div className="flex items-center justify-between gap-3">
          <Badge tone={statusTone[module.status]}>
            {module.status === "completed"
              ? "Completed"
              : module.status === "available"
                ? "Available now"
                : "Locked"}
          </Badge>
          {module.status === "locked" ? (
            <Lock className="h-4 w-4 text-slate-400" />
          ) : (
            <Sparkles className="h-4 w-4 text-brand-500" />
          )}
        </div>
        <h3 className="mt-4 text-xl font-bold text-slate-900">{module.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{module.description}</p>
      </div>

      <div className="mt-6 flex items-end justify-between gap-4">
        <div className="text-sm text-slate-500">
          <div>{module.lessonCount} lessons</div>
          <div>{module.estimatedTime}</div>
          <div>{module.xp} XP</div>
        </div>
        {module.status === "locked" ? (
          <span className="text-sm font-semibold text-slate-400">Unlock later</span>
        ) : (
          <Link
            href="/lesson/python-conditionals-basics"
            className="text-sm font-semibold text-brand-600"
          >
            Open module
          </Link>
        )}
      </div>
    </Card>
  );
}
