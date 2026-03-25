import { AuthFormPlaceholder } from "@/components/auth-form-placeholder";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-10">
      <AuthFormPlaceholder
        title="Welcome back"
        subtitle="Log in to continue your Python roadmap and pick up where you left off."
        alternateHref="/signup"
        alternateLabel="Need an account? Sign up"
      />
    </main>
  );
}
