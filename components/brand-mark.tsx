import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  compact = false
}: {
  className?: string;
  compact?: boolean;
}) {
  const sizeClass = compact ? "h-11 w-11" : "h-12 w-12";

  return (
    <div
      className={cn(
        "brandmark-shell relative isolate overflow-hidden rounded-[1.05rem] border border-brand-400/20 bg-[linear-gradient(145deg,rgba(16,255,163,0.16),rgba(38,208,255,0.12)_58%,rgba(120,255,220,0.08))] ring-1 ring-white/6",
        sizeClass,
        className
      )}
    >
      <div className="absolute inset-[1px] rounded-[0.98rem] bg-[linear-gradient(180deg,#071018,#09141e_48%,#0a1722)]" />
      <div className="brandmark-grid absolute inset-[1px] rounded-[0.98rem] opacity-90" />
      <div className="brandmark-scan absolute inset-x-1 top-1 h-8 rounded-full bg-[radial-gradient(circle,rgba(38,208,255,0.22),transparent_68%)] blur-md" />

      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="absolute inset-[8px] h-auto w-auto"
      >
        <defs>
          <linearGradient id="pymentor-frame" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10FFA3" stopOpacity="0.95" />
            <stop offset="0.55" stopColor="#27D4FF" stopOpacity="0.9" />
            <stop offset="1" stopColor="#82FFE1" stopOpacity="0.72" />
          </linearGradient>
          <linearGradient id="pymentor-glyph" x1="14" y1="14" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#DFFFF5" />
            <stop offset="0.5" stopColor="#85FFD4" />
            <stop offset="1" stopColor="#39D8FF" />
          </linearGradient>
          <radialGradient id="pymentor-orb" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46 18) rotate(90) scale(8)">
            <stop stopColor="#7CFFE0" />
            <stop offset="1" stopColor="#7CFFE0" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path
          d="M16 14H38L48 24V48H16V14Z"
          fill="none"
          stroke="url(#pymentor-frame)"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path d="M38 14V24H48" fill="none" stroke="url(#pymentor-frame)" strokeWidth="2.4" strokeLinejoin="round" />

        <path
          d="M23 41V21H33.5C39.2 21 42 23.8 42 28.1C42 32.5 39.2 35.2 33.5 35.2H28.8"
          fill="none"
          stroke="url(#pymentor-glyph)"
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.4 41L39.8 31.6"
          fill="none"
          stroke="url(#pymentor-glyph)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle cx="45.6" cy="18.4" r="3.2" fill="#7CFFE0" />
        <circle cx="45.6" cy="18.4" r="7.5" fill="url(#pymentor-orb)" />
      </svg>
    </div>
  );
}
