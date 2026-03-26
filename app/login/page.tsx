import { redirect } from "next/navigation";
import { getDefaultAppRedirectPath, getServerAuthSession } from "@/lib/auth";
import { AuthFormPlaceholder } from "@/components/auth-form-placeholder";

export default async function LoginPage() {
  const session = await getServerAuthSession();

  if (session?.user?.id) {
    redirect(await getDefaultAppRedirectPath(session.user.id));
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(29,211,139,0.14),transparent_22%),radial-gradient(circle_at_80%_0%,rgba(78,203,255,0.12),transparent_20%),linear-gradient(180deg,#03060d_0%,#08111a_46%,#0b1620_100%)] px-6 py-10">
      <AuthFormPlaceholder
        mode="login"
        title="Qué bueno verte de nuevo"
        subtitle="Inicia sesión para seguir con tu base de Python y retomar donde la dejaste."
        alternateHref="/signup"
        alternateLabel="¿Necesitas una cuenta? Regístrate"
      />
    </main>
  );
}
