"use client";

import { useEffect, useRef, useState } from "react";
import { DraftScope } from "@/types";

export function useDraftPersistence({
  enabled,
  scope,
  slug,
  code,
  onResetToStarter
}: {
  enabled: boolean;
  scope: DraftScope;
  slug: string;
  code: string;
  onResetToStarter?: () => void;
}) {
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const initialRender = useRef(true);
  const lastSavedCode = useRef(code);

  useEffect(() => {
    lastSavedCode.current = code;
  }, [code]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const timeout = window.setTimeout(async () => {
      setSaveState("saving");

      try {
        await fetch("/api/drafts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            scope,
            slug,
            content: code
          })
        });

        setSaveState("saved");
      } catch {
        setSaveState("error");
      }
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [enabled, code, scope, slug]);

  async function clearDraft() {
    if (!enabled) {
      onResetToStarter?.();
      return;
    }

    setSaveState("saving");

    try {
      await fetch("/api/drafts", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          scope,
          slug
        })
      });

      onResetToStarter?.();
      setSaveState("saved");
    } catch {
      setSaveState("error");
    }
  }

  return {
    saveState,
    clearDraft
  };
}
