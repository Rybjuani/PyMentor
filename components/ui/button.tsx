import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonStyles =
  "inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 active:scale-[0.985]";

const variants = {
  primary:
    "bg-[linear-gradient(135deg,#0CB971,#2de6a4_58%,#8ef7d4)] text-slate-950 shadow-[0_10px_28px_rgba(12,185,113,0.2)] ring-1 ring-white/10 hover:-translate-y-0.5 hover:brightness-110",
  secondary:
    "bg-slate-900/85 text-slate-100 ring-1 ring-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] hover:-translate-y-0.5 hover:bg-slate-800",
  ghost:
    "bg-white/4 text-slate-100 ring-1 ring-white/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] hover:-translate-y-0.5 hover:bg-white/8",
  subtle:
    "bg-brand-500/10 text-brand-200 ring-1 ring-brand-400/16 shadow-[0_8px_24px_rgba(29,211,139,0.06)] hover:-translate-y-0.5 hover:bg-brand-500/14"
};

export function Button({
  className,
  variant = "primary",
  href,
  onClick,
  type,
  disabled = false,
  children
}: {
  className?: string;
  variant?: keyof typeof variants;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
}) {
  const classes = cn(
    buttonStyles,
    variants[variant],
    disabled && "cursor-not-allowed opacity-50 hover:bg-inherit",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
