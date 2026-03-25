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
    <main className="min-h-screen bg-[#edf4fb] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <OnboardingFlow firstLessonHref={`/lesson/${firstLesson.slug}`} />
      </div>
    </main>
  );
}
