export function CodePanel({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-[26px] border border-slate-800 bg-[linear-gradient(180deg,#050b14,#0b1620)] p-5 font-mono text-sm leading-7 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_50px_rgba(0,0,0,0.35)]">
      <code>{code}</code>
    </pre>
  );
}
