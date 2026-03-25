import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400";

const variants = {
  primary:
    "bg-brand-500 text-white shadow-soft hover:bg-brand-600",
  secondary:
    "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50",
  ghost:
    "bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15",
  subtle:
    "bg-brand-50 text-brand-700 hover:bg-brand-100"
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
