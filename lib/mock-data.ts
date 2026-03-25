import { Achievement, LessonData, MentorPrompt, RoadmapModule } from "@/types";

export const mentorPrompts: MentorPrompt[] = [
  {
    mode: "explain",
    label: "Explain this more simply",
    prompt: "Explain this in simpler words for a complete beginner who is seeing it for the first time."
  },
  {
    mode: "hint",
    label: "Give me a hint",
    prompt: "Give me a small hint without solving the whole exercise for me."
  },
  {
    mode: "steps",
    label: "Show step by step",
    prompt: "Walk me through this slowly, one step at a time, and do not skip beginner details."
  },
  {
    mode: "debug",
    label: "Help me debug",
    prompt: "Help me debug this like a beginner: what should I check first, second, and third?"
  }
];

export const roadmapModules: RoadmapModule[] = [
  {
    slug: "introduction-to-programming",
    title: "Introduction to programming",
    description: "Learn what code is, how Python works, and how to think in tiny steps.",
    status: "completed",
    lessonCount: 4,
    estimatedTime: "35 min",
    xp: 80
  },
  {
    slug: "variables",
    title: "Variables",
    description: "Learn how Python remembers information so your programs can work with names, ages, and scores.",
    status: "completed",
    lessonCount: 5,
    estimatedTime: "42 min",
    xp: 120
  },
  {
    slug: "conditionals",
    title: "Conditionals",
    description: "Teach your program to make simple decisions using if, elif, and else without feeling intimidated by logic.",
    status: "available",
    lessonCount: 6,
    estimatedTime: "55 min",
    xp: 140
  },
  {
    slug: "loops",
    title: "Loops",
    description: "Repeat actions with confidence instead of rewriting the same lines over and over.",
    status: "available",
    lessonCount: 6,
    estimatedTime: "60 min",
    xp: 150
  },
  {
    slug: "functions",
    title: "Functions",
    description: "Turn repeated steps into reusable building blocks and start thinking like a problem solver.",
    status: "locked",
    lessonCount: 6,
    estimatedTime: "65 min",
    xp: 160
  },
  {
    slug: "lists-and-dictionaries",
    title: "Lists and dictionaries",
    description: "Organize many values cleanly so your programs can work with groups of data.",
    status: "locked",
    lessonCount: 7,
    estimatedTime: "70 min",
    xp: 180
  },
  {
    slug: "input-output",
    title: "Input and output",
    description: "Take information in and show useful results back so your programs feel alive.",
    status: "locked",
    lessonCount: 4,
    estimatedTime: "40 min",
    xp: 100
  },
  {
    slug: "mini-projects",
    title: "Mini projects",
    description: "Bring your skills together in small projects that feel achievable and rewarding.",
    status: "locked",
    lessonCount: 4,
    estimatedTime: "90 min",
    xp: 220
  }
];

export const achievements: Achievement[] = [
  {
    id: "first-steps",
    title: "First steps",
    description: "Completed your first lesson.",
    state: "earned"
  },
  {
    id: "streak-3",
    title: "3-day streak",
    description: "Returned three days in a row.",
    state: "earned"
  },
  {
    id: "debugger",
    title: "Bug fixer",
    description: "Solve your first debugging challenge.",
    state: "next"
  },
  {
    id: "momentum",
    title: "Momentum",
    description: "Finish three modules.",
    state: "locked"
  }
];

export const lessons: LessonData[] = [
  {
    slug: "python-conditionals-basics",
    title: "Conditionals: helping Python choose",
    module: "Conditionals",
    duration: "12 min",
    difficulty: "Beginner",
    summary:
      "Learn how Python makes choices so your program can respond differently based on what is true.",
    warmup:
      "If a friend asks whether they need an umbrella, your answer depends on the weather. Programs make decisions in a similar way.",
    goal:
      "By the end of this lesson, you should be able to read and write a simple `if` statement and spot two very common beginner mistakes.",
    keyIdeas: [
      {
        title: "A condition is a question",
        description:
          "Python checks whether something is true or false before deciding what to do next."
      },
      {
        title: "Blocks belong together",
        description:
          "Indented lines are part of the decision. Python uses spacing to understand structure."
      },
      {
        title: "You can test more than one path",
        description:
          "Use `elif` for another option and `else` for the fallback when nothing above matches."
      }
    ],
    explanation: [
      {
        title: "What a conditional does",
        body:
          "A conditional is a decision point. Your program checks a condition, such as whether a score is above 70, and then chooses the matching path."
      },
      {
        title: "Read it like a question",
        body:
          "You can read `if age >= 18` like this: 'If age is at least 18, run this block of code.' Reading it in plain language first makes the logic less scary."
      },
      {
        title: "Indentation matters",
        body:
          "In Python, the indented lines under `if` belong to that decision. If your spacing is inconsistent, Python may show an error even when your idea is correct."
      },
      {
        title: "Only one branch runs",
        body:
          "Python checks the branches from top to bottom. As soon as one condition is true, Python runs that block and skips the rest."
      }
    ],
    example:
      "score = 82\n\nif score >= 90:\n    print('Excellent work')\nelif score >= 70:\n    print('Nice job')\nelse:\n    print('Keep practicing')\n\n# Output: Nice job",
    practicePrompt:
      "Create a program that checks a temperature value. Print `Cold` if it is below 15, `Warm` if it is from 15 to 25, and `Hot` if it is above 25.",
    practiceChecklist: [
      "Start with one variable called `temperature`.",
      "Write one `if`, one `elif`, and one `else` branch.",
      "Read your condition out loud before running it.",
      "Check whether your indentation is consistent."
    ],
    commonMistakes: [
      "Using `=` instead of `==` when comparing values. `=` assigns a value, while `==` compares two values.",
      "Forgetting the colon `:` at the end of an `if` line. Python uses the colon to start a block.",
      "Mixing tabs and spaces or changing indentation width inside one block."
    ],
    bugChallenge: {
      prompt:
        "This program should print `Adult` when age is 18 or more. It currently has syntax mistakes that stop Python before the logic can even run.",
      brokenCode:
        "age = 18\n\nif age => 18\n    print('Adult')\nelse:\n    print('Minor')",
      expectedLearning:
        "Notice that beginners often need to fix syntax first: use the correct comparison operator and end the `if` line with a colon."
    }
  }
];

export const recentActivity = [
  "Finished lesson: Variables remember values",
  "Completed a quick check-in on string vs number values",
  "Asked the mentor for a gentle hint during conditional practice"
];

export const dashboardStats = {
  learnerName: "Avery",
  streakDays: 3,
  totalXp: 240,
  progressPercent: 28,
  currentModule: "Conditionals",
  nextLessonSlug: "python-conditionals-basics",
  weeklyGoal: "Finish 2 focused lessons this week",
  weeklyProgress: 1,
  weeklyTarget: 2
};

export const communityPreview = [
  "Guided study circles for beginners",
  "Ask-for-help threads that keep lesson context attached",
  "Celebrate first wins, first projects, and first bugs fixed"
];

export function getLessonBySlug(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}
