import { AppShell } from "@/components/app-shell";
import { ExerciseWorkspace } from "@/components/exercise-workspace";
import { MentorWidget } from "@/components/mentor-widget";

export default function ExercisePage() {
  return (
    <AppShell
      title="Exercise: fix the conditional"
      description="Practice spotting and fixing a beginner syntax bug. The goal is to build confidence, not to race."
    >
      <section className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <ExerciseWorkspace />
        <div>
          <MentorWidget
            context={{
              title: "Conditional debugging exercise",
              topic: "Conditionals",
              pageType: "exercise",
              exerciseTitle: "Fix the conditional",
              codeSnippet:
                "age = 18\n\nif age => 18\n    print('Adult')\nelse:\n    print('Minor')"
            }}
            compact
          />
        </div>
      </section>
    </AppShell>
  );
}
