export function CodePanel({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-[26px] bg-[linear-gradient(180deg,#07111f,#0e1a31)] p-5 font-mono text-sm leading-7 text-slate-100 shadow-inner shadow-black/20">
      <code>{code}</code>
    </pre>
  );
}
