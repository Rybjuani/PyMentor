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
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 lg:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}
