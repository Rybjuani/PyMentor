"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, LoaderCircle, PlayCircle, RotateCcw, Save, TerminalSquare } from "lucide-react";
import { PythonRunResult, runPythonInBrowser } from "@/lib/pyodide-client";
import { useDraftPersistence } from "@/lib/use-draft-persistence";
import { DraftScope, PythonPlaygroundConfig } from "@/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PythonPlayground({
  config,
  compact = false,
  initialCode,
  restoredDraftUpdatedAt,
  code: controlledCode,
  onCodeChange,
  onRunComplete,
  draftScope,
  draftSlug
}: {
  config: PythonPlaygroundConfig;
  compact?: boolean;
  initialCode?: string;
  restoredDraftUpdatedAt?: string | Date | null;
  code?: string;
  onCodeChange?: (code: string) => void;
  onRunComplete?: (result: PythonRunResult) => void;
  draftScope?: DraftScope;
  draftSlug?: string;
}) {
  const [internalCode, setInternalCode] = useState(initialCode ?? config.starterCode);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [runtimeReady, setRuntimeReady] = useState(false);
  const [runtimeError, setRuntimeError] = useState<string | null>(null);
  const [loadingRuntime, setLoadingRuntime] = useState(true);
  const [running, setRunning] = useState(false);
  const [lastRunAt, setLastRunAt] = useState<Date | null>(null);
  const restoredDraft = Boolean(restoredDraftUpdatedAt);
  const code = controlledCode ?? internalCode;
  const baselineCode = initialCode ?? config.starterCode;
  const hasChangedCode = code !== baselineCode;
  const hasResult = Boolean(output.trim() || error.trim() || runtimeError);
  const draftsEnabled = Boolean(draftScope && draftSlug);
  const { saveState, clearDraft } = useDraftPersistence({
    enabled: draftsEnabled,
    scope: draftScope ?? "lesson",
    slug: draftSlug ?? "",
    code,
    onResetToStarter: () => updateCode(config.starterCode)
  });

  useEffect(() => {
    if (controlledCode === undefined) {
      setInternalCode(initialCode ?? config.starterCode);
    }
  }, [controlledCode, initialCode, config.starterCode]);

  function updateCode(nextCode: string) {
    if (onCodeChange) {
      onCodeChange(nextCode);
      return;
    }

    setInternalCode(nextCode);
  }

  useEffect(() => {
    let cancelled = false;

    async function warmRuntime() {
      setLoadingRuntime(true);
      setRuntimeError(null);

      try {
        await runPythonInBrowser("print('')");

        if (!cancelled) {
          setRuntimeReady(true);
        }
      } catch {
        if (!cancelled) {
          setRuntimeError("No se pudo cargar Python en este navegador ahora mismo. Prueba recargando la página.");
        }
      } finally {
        if (!cancelled) {
          setLoadingRuntime(false);
        }
      }
    }

    void warmRuntime();

    return () => {
      cancelled = true;
    };
  }, []);

  async function runCode() {
    setRunning(true);
    setRuntimeError(null);

    try {
      const result = await runPythonInBrowser(code);
      setOutput(result.output);
      setError(result.error);
      setLastRunAt(new Date());
      onRunComplete?.(result);
    } catch {
      setRuntimeError("No se pudo ejecutar este código en este momento. Prueba recargando la página y vuelve a intentarlo.");
      setLastRunAt(new Date());
    } finally {
      setRunning(false);
    }
  }

  function resetCode() {
    setOutput("");
    setError("");
    setLastRunAt(null);
    void clearDraft();
  }

  return (
    <Card className={`mission-grid rounded-[30px] border-brand-400/10 bg-[radial-gradient(circle_at_top_left,rgba(78,203,255,0.08),transparent_26%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))] ${compact ? "p-4 sm:p-5" : "p-4 sm:p-6"}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
            <TerminalSquare className="h-4 w-4 text-brand-300" />
            {config.title ?? "Pruébalo en Python"}
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">{config.guidance}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="w-fit rounded-full border border-brand-400/15 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-100">
            Ejecución en navegador
          </div>
          <div className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-slate-300">
            {loadingRuntime ? "Preparando estación" : runtimeReady ? "Estación lista" : "Estación con problema"}
          </div>
        </div>
      </div>
      {restoredDraft ? (
        <div className="mt-4 rounded-[20px] border border-brand-400/15 bg-brand-500/10 px-4 py-3 text-sm text-brand-100 shadow-[0_0_18px_rgba(29,211,139,0.08)]">
          <p className="font-semibold">Recuperamos tu borrador anterior</p>
          <p className="mt-1 leading-6 text-brand-200">
            Estás retomando el código que editaste por última vez {formatDraftTime(restoredDraftUpdatedAt)}.
            Reiniciar borrará este borrador guardado y volverá al código inicial.
          </p>
        </div>
      ) : null}
      {draftsEnabled ? (
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-400">
          <Save className="h-3.5 w-3.5 text-brand-300" />
          {saveState === "saving"
            ? "Guardando borrador..."
            : saveState === "saved"
              ? "Borrador guardado"
              : saveState === "error"
                ? "No se pudo guardar el borrador en este momento"
                : "Los borradores se guardan automáticamente"}
        </div>
      ) : null}
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Estado del código</p>
          <p className="mt-2 text-sm font-semibold text-slate-100">
            {hasChangedCode ? "Borrador en curso" : "Código base listo"}
          </p>
        </div>
        <div className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Ejecución</p>
          <p className="mt-2 text-sm font-semibold text-slate-100">
            {running
              ? "Corriendo ahora"
              : runtimeReady
                ? hasResult
                  ? "Resultado disponible"
                  : "Listo para ejecutar"
                : "Preparando estación"}
          </p>
        </div>
        <div className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Último movimiento</p>
          <p className="mt-2 text-sm font-semibold text-slate-100">
            {lastRunAt ? formatDraftTime(lastRunAt) : restoredDraft ? `Retomado ${formatDraftTime(restoredDraftUpdatedAt)}` : "Sin ejecución todavía"}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[26px] border border-slate-800 bg-slate-950/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Editor</p>
              <p className="mt-1 text-sm font-semibold text-slate-100">Zona de construcción</p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Python
            </div>
          </div>
          <textarea
            rows={compact ? 9 : 11}
            className="mt-4 w-full rounded-[24px] border border-slate-800 bg-slate-950/80 px-4 py-4 font-mono text-sm leading-7 text-slate-100 outline-none focus:border-brand-400"
            value={code}
            onChange={(event) => updateCode(event.target.value)}
          />

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button className="w-full gap-2 sm:w-auto" onClick={() => void runCode()} disabled={!runtimeReady || running}>
              {running ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <PlayCircle className="h-4 w-4" />}
              {running ? "Ejecutando..." : "Ejecutar código"}
            </Button>
            <Button variant="secondary" className="w-full gap-2 sm:w-auto" onClick={resetCode}>
              <RotateCcw className="h-4 w-4" />
              Reiniciar
            </Button>
          </div>
        </div>

        <div className="rounded-[26px] border border-slate-800 bg-[linear-gradient(180deg,#050b14,#0b1620)] p-5 text-sm text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Consola</p>
              <p className="mt-1 font-semibold text-white">Salida de ejecución</p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              {error ? "Error detectado" : output.trim().length > 0 ? "Salida lista" : "Esperando ejecución"}
            </div>
          </div>
          <div className="mt-4 min-h-[180px] overflow-x-auto whitespace-pre-wrap break-words rounded-[22px] border border-slate-800 bg-slate-950/70 px-4 py-4 font-mono leading-7 text-slate-200">
            {loadingRuntime
              ? "Cargando el entorno de Python para tu navegador..."
              : runtimeError
                ? runtimeError
                : error
                  ? `Python se detuvo aquí:\n${error}`
                  : output.trim().length > 0
                    ? output
                    : config.emptyOutputHint ?? "Tu código se ejecutó. Si todavía no aparece nada aquí, agrega una línea con `print()` para mostrar un resultado."}
          </div>
          {(runtimeError || error) ? (
            <div className="mt-4 flex items-start gap-3 rounded-[20px] border border-amber-400/20 bg-amber-500/10 px-4 py-4 text-sm text-amber-100">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                {runtimeError
                  ? "La estación de ejecución tuvo un problema al cargar. Puedes recargar la página y volver a intentarlo."
                  : "Python marcó un error. Léelo con calma, corrige una cosa a la vez y vuelve a ejecutar."}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

function formatDraftTime(value: string | Date | null | undefined) {
  if (!value) {
    return "antes";
  }

  const date = value instanceof Date ? value : new Date(value);
  const diffMs = Date.now() - date.getTime();
  const diffMinutes = Math.round(diffMs / (1000 * 60));

  if (diffMinutes < 1) {
    return "justo ahora";
  }

  if (diffMinutes < 60) {
    return `hace ${diffMinutes} min`;
  }

  const diffHours = Math.round(diffMinutes / 60);

  if (diffHours < 24) {
    return `hace ${diffHours} h`;
  }

  return new Intl.DateTimeFormat("es-AR", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(date);
}
