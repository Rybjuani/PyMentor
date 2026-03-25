import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300";

const variants = {
  primary:
    "bg-[linear-gradient(135deg,#0CB971,#2de6a4)] text-slate-950 shadow-glow hover:brightness-110",
  secondary:
    "bg-slate-900/90 text-slate-100 ring-1 ring-slate-700 hover:bg-slate-800",
  ghost:
    "bg-white/5 text-slate-100 ring-1 ring-white/10 hover:bg-white/10",
  subtle:
    "bg-brand-500/12 text-brand-200 ring-1 ring-brand-400/20 hover:bg-brand-500/18"
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
