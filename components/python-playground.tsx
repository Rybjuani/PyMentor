"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, LoaderCircle, PlayCircle, RotateCcw, Save } from "lucide-react";
import { PythonRunResult, runPythonInBrowser } from "@/lib/pyodide-client";
import { useDraftPersistence } from "@/lib/use-draft-persistence";
import { DraftScope, PythonPlaygroundConfig } from "@/types";
import { Button } from "@/components/ui/button";

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
    updateCode(config.starterCode);
    setOutput("");
    setError("");
    setLastRunAt(null);
    void clearDraft();
  }

  return (
    <section className="rounded-[18px] border border-slate-800 bg-slate-950/60">
      <div className="flex flex-col gap-3 border-b border-slate-800 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-100">{config.title ?? "Prueba en Python"}</p>
          <p className="mt-1 text-sm leading-6 text-slate-400">{config.guidance}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1 text-slate-300">
            {loadingRuntime ? "Preparando Python" : runtimeReady ? "Listo" : "Error"}
          </span>
          {draftsEnabled ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1 text-slate-400">
              <Save className="h-3.5 w-3.5 text-brand-300" />
              {saveState === "saving"
                ? "Guardando..."
                : saveState === "saved"
                  ? "Guardado"
                  : saveState === "error"
                    ? "Error al guardar"
                    : "Auto guardado"}
            </span>
          ) : null}
        </div>
      </div>

      {restoredDraft ? (
        <div className="px-4 pt-4 text-xs text-brand-300">
          Retomaste un borrador guardado {formatDraftTime(restoredDraftUpdatedAt)}.
        </div>
      ) : null}

      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 border-b border-slate-800 lg:border-b-0 lg:border-r">
          <textarea
            rows={compact ? 10 : 12}
            className="w-full rounded-none bg-transparent px-4 py-4 font-mono text-[13px] leading-7 text-slate-100 outline-none sm:text-sm"
            value={code}
            onChange={(event) => updateCode(event.target.value)}
          />
          <div className="flex flex-col gap-3 border-t border-slate-800 px-4 py-4 sm:flex-row sm:flex-wrap">
            <Button className="w-full gap-2 sm:w-auto" onClick={() => void runCode()} disabled={!runtimeReady || running}>
              {running ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <PlayCircle className="h-4 w-4" />}
              {running ? "Ejecutando" : "Ejecutar"}
            </Button>
            <Button variant="secondary" className="w-full gap-2 sm:w-auto" onClick={resetCode}>
              <RotateCcw className="h-4 w-4" />
              Reiniciar
            </Button>
          </div>
        </div>

        <div className="min-w-0">
          <div className="px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Salida</p>
            <div className="mt-3 min-h-[220px] overflow-x-auto whitespace-pre-wrap break-words rounded-[14px] bg-[#050b14] px-4 py-4 font-mono text-[13px] leading-7 text-slate-200 sm:text-sm">
              {loadingRuntime
                ? "Cargando Python para tu navegador..."
                : runtimeError
                  ? runtimeError
                  : error
                    ? `Python se detuvo aquí:\n${error}`
                    : output.trim().length > 0
                      ? output
                      : config.emptyOutputHint ?? "Ejecuta el código para ver el resultado aquí."}
            </div>

            {(runtimeError || error) ? (
              <div className="mt-4 flex items-start gap-3 rounded-[14px] border border-amber-400/20 bg-amber-500/10 px-4 py-4 text-sm text-amber-100">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                <p>
                  {runtimeError
                    ? "Hubo un problema al cargar el runtime."
                    : "Revisa el error, cambia una sola cosa y vuelve a ejecutar."}
                </p>
              </div>
            ) : null}

            <div className="mt-4 text-xs text-slate-500">
              {lastRunAt ? `Última ejecución ${formatDraftTime(lastRunAt)}` : "Todavía no ejecutaste este código."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function formatDraftTime(value: string | Date | null | undefined) {
  if (!value) {
    return "recién";
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
