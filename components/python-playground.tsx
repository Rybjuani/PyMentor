"use client";

import { useEffect, useState } from "react";
import { LoaderCircle, PlayCircle, RotateCcw, TerminalSquare } from "lucide-react";
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
          setRuntimeError("Python could not load in this browser right now. Try refreshing the page.");
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
      onRunComplete?.(result);
    } catch {
      setRuntimeError("Python could not run this code right now. Try refreshing and running again.");
    } finally {
      setRunning(false);
    }
  }

  function resetCode() {
    setOutput("");
    setError("");
    void clearDraft();
  }

  return (
    <Card className={`rounded-[30px] ${compact ? "p-5" : ""}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <TerminalSquare className="h-4 w-4 text-brand-600" />
            {config.title ?? "Try it in Python"}
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{config.guidance}</p>
        </div>
        <div className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
          Browser-only runner
        </div>
      </div>
      {restoredDraft ? (
        <div className="mt-4 rounded-[20px] border border-brand-100 bg-brand-50/70 px-4 py-3 text-sm text-brand-900">
          <p className="font-semibold">Restored your previous draft</p>
          <p className="mt-1 leading-6 text-brand-800">
            You are continuing the code you last edited {formatDraftTime(restoredDraftUpdatedAt)}.
            Reset will clear this saved draft and return to the starter code.
          </p>
        </div>
      ) : null}
      {draftsEnabled ? (
        <p className="mt-3 text-xs font-medium text-slate-500">
          {saveState === "saving"
            ? "Saving draft..."
            : saveState === "saved"
              ? "Draft saved"
              : saveState === "error"
                ? "Draft could not be saved right now"
                : "Drafts save automatically"}
        </p>
      ) : null}

      <textarea
        rows={compact ? 10 : 12}
        className="mt-5 w-full rounded-[24px] border border-slate-200 px-4 py-4 font-mono text-sm leading-7 outline-none focus:border-brand-300"
        value={code}
        onChange={(event) => updateCode(event.target.value)}
      />

      <div className="mt-4 flex flex-wrap gap-3">
        <Button className="gap-2" onClick={() => void runCode()} disabled={!runtimeReady || running}>
          {running ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <PlayCircle className="h-4 w-4" />}
          {running ? "Running..." : "Run code"}
        </Button>
        <Button variant="secondary" className="gap-2" onClick={resetCode}>
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      </div>

      <div className="mt-5 rounded-[24px] bg-[linear-gradient(180deg,#07111f,#0e1a31)] p-5 text-sm text-slate-100">
        <p className="font-semibold text-white">Output</p>
        <div className="mt-3 min-h-[120px] whitespace-pre-wrap font-mono leading-7 text-slate-200">
          {loadingRuntime
            ? "Loading the Python runner for your browser..."
            : runtimeError
              ? runtimeError
              : error
                ? `Python stopped here:\n${error}`
                : output.trim().length > 0
                  ? output
                  : config.emptyOutputHint ?? "Your code ran. If nothing appears here yet, add a `print()` line to show a result."}
        </div>
      </div>
    </Card>
  );
}

function formatDraftTime(value: string | Date | null | undefined) {
  if (!value) {
    return "earlier";
  }

  const date = value instanceof Date ? value : new Date(value);
  const diffMs = Date.now() - date.getTime();
  const diffMinutes = Math.round(diffMs / (1000 * 60));

  if (diffMinutes < 1) {
    return "just now";
  }

  if (diffMinutes < 60) {
    return `${diffMinutes} min ago`;
  }

  const diffHours = Math.round(diffMinutes / 60);

  if (diffHours < 24) {
    return `${diffHours} hr ago`;
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(date);
}
