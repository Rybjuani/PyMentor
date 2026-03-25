const PYODIDE_VERSION = "0.26.2";
const PYODIDE_INDEX_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

type PyodideGlobals = {
  set: (name: string, value: unknown) => void;
  get: (name: string) => unknown;
  delete: (name: string) => void;
};

export interface BrowserPyodide {
  globals: PyodideGlobals;
  runPythonAsync: (code: string) => Promise<unknown>;
}

export interface PythonRunResult {
  output: string;
  error: string;
}

declare global {
  interface Window {
    loadPyodide?: (options: { indexURL: string }) => Promise<BrowserPyodide>;
    __pyMentorPyodidePromise?: Promise<BrowserPyodide>;
    __pyMentorInputPrompt?: (message: string) => string;
  }
}

function loadPyodideScript() {
  return new Promise<void>((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("Pyodide can only load in the browser."));
      return;
    }

    if (window.loadPyodide) {
      resolve();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-pyodide="true"]');

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Could not load Pyodide.")), {
        once: true
      });
      return;
    }

    const script = document.createElement("script");
    script.src = `${PYODIDE_INDEX_URL}pyodide.js`;
    script.async = true;
    script.dataset.pyodide = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Could not load Pyodide."));
    document.head.appendChild(script);
  });
}

export async function getPyodideClient() {
  if (typeof window === "undefined") {
    throw new Error("Pyodide is only available in the browser.");
  }

  if (!window.__pyMentorPyodidePromise) {
    window.__pyMentorPyodidePromise = (async () => {
      await loadPyodideScript();

      if (!window.loadPyodide) {
        throw new Error("Pyodide did not initialize correctly.");
      }

      const pyodide = await window.loadPyodide({
        indexURL: PYODIDE_INDEX_URL
      });

      window.__pyMentorInputPrompt = (message: string) => window.prompt(message) ?? "";
      pyodide.globals.set("__pymentor_prompt", (message: string) =>
        window.__pyMentorInputPrompt ? window.__pyMentorInputPrompt(message) : ""
      );

      await pyodide.runPythonAsync(`
import builtins
import js

def _pymentor_input(prompt=""):
    return js.__pymentor_prompt(str(prompt))

builtins.input = _pymentor_input
      `);

      return pyodide;
    })();
  }

  return window.__pyMentorPyodidePromise;
}

export async function runPythonInBrowser(code: string): Promise<PythonRunResult> {
  const pyodide = await getPyodideClient();

  pyodide.globals.set("__pymentor_code", code);

  const result = (await pyodide.runPythonAsync(`
import contextlib
import io

_stdout = io.StringIO()
_stderr = io.StringIO()
_error = ""

try:
    with contextlib.redirect_stdout(_stdout), contextlib.redirect_stderr(_stderr):
        exec(__pymentor_code, {})
except Exception as exc:
    _error = f"{type(exc).__name__}: {exc}"

{
    "output": _stdout.getvalue(),
    "error": _error or _stderr.getvalue()
}
  `)) as { toJs?: () => PythonRunResult; destroy?: () => void };

  const parsed = typeof result?.toJs === "function" ? result.toJs() : (result as PythonRunResult);
  result?.destroy?.();
  pyodide.globals.delete("__pymentor_code");

  return {
    output: parsed.output ?? "",
    error: parsed.error ?? ""
  };
}
