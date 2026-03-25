import { redirect } from "next/navigation";
import { requireAppUser } from "@/lib/auth";
import { getAllLessons } from "@/lib/course";
import { OnboardingFlow } from "@/components/onboarding-flow";

export default async function OnboardingPage() {
  const user = await requireAppUser({
    allowIncompleteOnboarding: true
  });

  if (user.onboardingCompletedAt) {
    redirect("/dashboard");
  }

  const firstLesson = getAllLessons()[0];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(29,211,139,0.12),transparent_20%),radial-gradient(circle_at_85%_0%,rgba(78,203,255,0.12),transparent_18%),linear-gradient(180deg,#03060d_0%,#08111a_42%,#0b1620_100%)] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <OnboardingFlow firstLessonHref={`/lesson/${firstLesson.slug}`} />
      </div>
    </main>
  );
}
