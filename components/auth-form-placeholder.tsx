"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AuthFormPlaceholder({
  mode,
  title,
  subtitle,
  alternateHref,
  alternateLabel
}: {
  mode: "login" | "signup";
  title: string;
  subtitle: string;
  alternateHref: string;
  alternateLabel: string;
}) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (mode === "signup") {
        const signupResponse = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        });

        const signupData = (await signupResponse.json()) as { error?: string };

        if (!signupResponse.ok) {
          setError(signupData.error ?? "Could not create your account.");
          return;
        }
      }

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/dashboard"
      });

      if (result?.error) {
        setError("That email or password did not match. Please try again.");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="mx-auto w-full max-w-md rounded-[32px] p-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">{title}</h1>
      <p className="mt-3 text-sm leading-7 text-slate-600">{subtitle}</p>

      <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
        {mode === "signup" ? (
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-300"
            placeholder="Your name"
            required
          />
        ) : null}
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-300"
          placeholder="Email address"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-300"
          placeholder="Password"
          minLength={8}
          required
        />
        <Button className="w-full justify-center gap-2" type="submit">
          {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
          {mode === "signup" ? "Create account" : "Log in"}
        </Button>
      </form>

      {error ? (
        <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
          {error}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl bg-brand-50 p-4 text-sm text-brand-700">
          {mode === "signup"
            ? "You will start with a quick onboarding and your first Python lesson already lined up."
            : "Your roadmap progress, lesson completion, and exercise completion stay tied to this account."}
        </div>
      )}

      <p className="mt-6 text-sm text-slate-600">
        <Link href={alternateHref} className="font-semibold text-brand-600">
          {alternateLabel}
        </Link>
      </p>
    </Card>
  );
}
