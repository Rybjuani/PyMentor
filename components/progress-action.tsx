"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckCircle2, LoaderCircle, PlayCircle } from "lucide-react";
import { ProgressStatus } from "@/types";
import { Button } from "@/components/ui/button";

export function ProgressAction({
  entityType,
  slug,
  status,
  children,
  variant = "primary",
  disabled = false
}: {
  entityType: "lesson" | "exercise";
  slug: string;
  status: ProgressStatus;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "subtle";
  disabled?: boolean;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function updateProgress() {
    if (disabled) {
      return;
    }

    setLoading(true);

    try {
      await fetch("/api/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          entityType,
          slug,
          status
        })
      });

      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      variant={variant}
      className="gap-2"
      onClick={() => void updateProgress()}
      disabled={disabled || loading}
    >
      {loading ? (
        <LoaderCircle className="h-4 w-4 animate-spin" />
      ) : status === "completed" ? (
        <CheckCircle2 className="h-4 w-4" />
      ) : (
        <PlayCircle className="h-4 w-4" />
      )}
      {children}
    </Button>
  );
}
