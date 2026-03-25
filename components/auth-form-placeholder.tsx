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
          setError(signupData.error ?? "No se pudo crear tu cuenta.");
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
        setError("Ese correo o contraseña no coincide. Inténtalo de nuevo.");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="mx-auto w-full max-w-md rounded-[28px] border-brand-400/15 bg-[radial-gradient(circle_at_top,rgba(29,211,139,0.08),transparent_28%),linear-gradient(180deg,rgba(14,24,35,0.98),rgba(9,18,28,0.98))] p-6 sm:rounded-[32px] sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-300">
        Acceso
      </p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-50">{title}</h1>
      <p className="mt-3 text-sm leading-7 text-slate-400">{subtitle}</p>

      <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
        {mode === "signup" ? (
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none focus:border-brand-400"
            placeholder="Tu nombre"
            required
          />
        ) : null}
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none focus:border-brand-400"
          placeholder="Correo electrónico"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none focus:border-brand-400"
          placeholder="Contraseña"
          minLength={8}
          required
        />
        <Button className="w-full justify-center gap-2" type="submit">
          {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
          {mode === "signup" ? "Crear cuenta" : "Entrar"}
        </Button>
      </form>

      {error ? (
        <div className="mt-6 rounded-2xl border border-rose-400/20 bg-rose-500/10 p-4 text-sm text-rose-200">
          {error}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-brand-400/15 bg-brand-500/10 p-4 text-sm text-brand-100">
          {mode === "signup"
            ? "Vas a empezar con una bienvenida breve y tu primera lección de Python ya preparada."
            : "Tu progreso de la ruta, tus lecciones y tus ejercicios quedan vinculados a esta cuenta."}
        </div>
      )}

      <p className="mt-6 text-sm text-slate-400">
        <Link href={alternateHref} className="font-semibold text-brand-300">
          {alternateLabel}
        </Link>
      </p>
    </Card>
  );
}
