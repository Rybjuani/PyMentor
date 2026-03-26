import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "interactive-panel panel-glow rounded-[24px] border border-slate-800/70 bg-[linear-gradient(180deg,rgba(14,24,35,0.94),rgba(9,18,28,0.97))] p-5 text-slate-100",
        className
      )}
    >
      {children}
    </div>
  );
}
