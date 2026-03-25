import { redirect } from "next/navigation";
import { getDefaultAppRedirectPath, getServerAuthSession } from "@/lib/auth";
import { AuthFormPlaceholder } from "@/components/auth-form-placeholder";

export default async function LoginPage() {
  const session = await getServerAuthSession();

  if (session?.user?.id) {
    redirect(await getDefaultAppRedirectPath(session.user.id));
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-10">
      <AuthFormPlaceholder
        mode="login"
        title="Welcome back"
        subtitle="Log in to continue your Python roadmap and pick up where you left off."
        alternateHref="/signup"
        alternateLabel="Need an account? Sign up"
      />
    </main>
  );
}
