import { cn } from "@/lib/utils";

export function SectionIntro({
  eyebrow,
  title,
  description,
  className
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-[linear-gradient(90deg,rgba(29,211,139,0.75),rgba(78,203,255,0.2))]" />
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand-300">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-50 lg:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-400">{description}</p>
    </div>
  );
}
