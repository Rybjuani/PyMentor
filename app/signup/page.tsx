import { redirect } from "next/navigation";
import { getServerAuthSession } from "@/lib/auth";
import { AuthFormPlaceholder } from "@/components/auth-form-placeholder";

export default async function SignupPage() {
  const session = await getServerAuthSession();

  if (session?.user?.id) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-10">
      <AuthFormPlaceholder
        mode="signup"
        title="Create your account"
        subtitle="Start with a gentle Python roadmap, guided practice, and an AI mentor when you need help."
        alternateHref="/login"
        alternateLabel="Already have an account? Log in"
      />
    </main>
  );
}
