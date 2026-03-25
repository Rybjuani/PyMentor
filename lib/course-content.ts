import { ExerciseData, LessonData, RoadmapModule } from "@/types";

export const courseModules: RoadmapModule[] = [
  {
    slug: "introduction-to-programming",
    title: "Introduction to programming",
    description: "Learn what code is, how Python runs instructions, and how to think in small steps.",
    order: 1,
    status: "available",
    lessonCount: 2,
    estimatedTime: "30 min",
    xp: 80
  },
  {
    slug: "variables",
    title: "Variables",
    description: "Store values so your programs can remember names, scores, and answers.",
    order: 2,
    status: "available",
    lessonCount: 2,
    estimatedTime: "36 min",
    xp: 110
  },
  {
    slug: "conditionals",
    title: "Conditionals",
    description: "Teach Python how to make choices using `if`, `elif`, and `else`.",
    order: 3,
    status: "available",
    lessonCount: 2,
    estimatedTime: "40 min",
    xp: 140
  },
  {
    slug: "loops",
    title: "Loops",
    description: "Repeat actions without copying the same code again and again.",
    order: 4,
    status: "locked",
    lessonCount: 2,
    estimatedTime: "45 min",
    xp: 150
  },
  {
    slug: "functions",
    title: "Functions",
    description: "Group useful steps into reusable blocks and make programs easier to manage.",
    order: 5,
    status: "locked",
    lessonCount: 2,
    estimatedTime: "48 min",
    xp: 160
  }
];

export const courseLessons: LessonData[] = [
  {
    slug: "what-is-programming",
    module: "Introduction to programming",
    moduleSlug: "introduction-to-programming",
    order: 1,
    title: "What programming really is",
    duration: "10 min",
    difficulty: "Beginner",
    summary: "Understand programming as giving clear instructions to a computer, one step at a time.",
    warmup: "A recipe works because the steps are clear. Code works the same way.",
    goal: "By the end of this lesson, you should understand what a program is and why computers need very clear instructions.",
    keyIdeas: [
      {
        title: "Programs are instructions",
        description: "A program is a list of steps that tells the computer what to do."
      },
      {
        title: "Computers are literal",
        description: "They do exactly what you write, not what you meant."
      },
      {
        title: "Small steps win",
        description: "Beginners learn faster when they break a big idea into tiny actions."
      }
    ],
    explanation: [
      {
        title: "A computer needs precise instructions",
        body: "Computers are fast, but they are not mind readers. They follow the exact instructions you write, in the order you write them."
      },
      {
        title: "Programming is problem solving in steps",
        body: "When you write code, you are turning a problem into small instructions. This is why simple, clear thinking matters more than fancy syntax at the start."
      },
      {
        title: "Python is a beginner-friendly language",
        body: "Python is popular for beginners because the code reads more like plain English than many other languages."
      }
    ],
    example: "print('Hello, beginner!')\nprint('You just ran your first Python instructions.')",
    practicePrompt: "Write two `print()` lines. In the first one, say your name. In the second one, say one reason you want to learn Python.",
    practiceChecklist: [
      "Use `print()` twice.",
      "Put your text inside quotes.",
      "Run the code and confirm both lines appear."
    ],
    commonMistakes: [
      "Forgetting the quotes around text.",
      "Misspelling `print`.",
      "Using curly quotes copied from another app instead of plain quotes."
    ],
    bugChallenge: {
      prompt: "This code should print a welcome message, but one small syntax issue breaks it.",
      brokenCode: "print('Welcome to PyMentor)\nprint('Let\\'s learn Python')",
      expectedLearning: "Strings need matching quotes on both sides."
    },
    exerciseSlug: "welcome-message-fix"
  },
  {
    slug: "running-python-step-by-step",
    module: "Introduction to programming",
    moduleSlug: "introduction-to-programming",
    order: 2,
    title: "Running Python step by step",
    duration: "12 min",
    difficulty: "Beginner",
    summary: "See how Python reads code from top to bottom and why order matters.",
    warmup: "If you brush your teeth before picking up the toothbrush, the steps do not make sense. Code order matters too.",
    goal: "By the end, you should be able to explain that Python follows instructions from top to bottom.",
    keyIdeas: [
      { title: "Order matters", description: "Python usually runs the first line before the second line, and so on." },
      { title: "One line at a time", description: "Reading code slowly makes bugs easier to notice." },
      { title: "Outputs show results", description: "What you see printed is the result of the steps you wrote." }
    ],
    explanation: [
      {
        title: "Top to bottom execution",
        body: "When Python runs a file, it usually starts at the top and moves downward. That makes code order a big part of understanding behavior."
      },
      {
        title: "Reading code like a story",
        body: "Beginners often improve quickly when they read code line by line and ask, 'What happens right now?'"
      },
      {
        title: "Why this helps later",
        body: "Understanding execution order makes variables, conditionals, and loops much easier to learn."
      }
    ],
    example: "print('Step 1')\nprint('Step 2')\nprint('Step 3')",
    practicePrompt: "Write three `print()` lines that show a simple morning routine in the correct order.",
    practiceChecklist: [
      "Use three lines.",
      "Make the order realistic.",
      "Read the output from top to bottom."
    ],
    commonMistakes: [
      "Expecting the last line to run first.",
      "Mixing up the order of steps.",
      "Changing multiple things at once and losing track of what happened."
    ],
    bugChallenge: {
      prompt: "This code should show the steps in order, but one line is written incorrectly.",
      brokenCode: "print('Wake up')\npritn('Brush teeth')\nprint('Eat breakfast')",
      expectedLearning: "Small spelling errors can stop a program even when the idea is right."
    },
    exerciseSlug: "morning-routine-output"
  },
  {
    slug: "variables-hold-values",
    module: "Variables",
    moduleSlug: "variables",
    order: 1,
    title: "Variables hold values",
    duration: "14 min",
    difficulty: "Beginner",
    summary: "Learn how variables let Python remember information like names, scores, and ages.",
    warmup: "A labeled box helps you keep track of what is inside. A variable works like a label for a value.",
    goal: "By the end, you should be able to create a variable and explain what value it is holding.",
    keyIdeas: [
      { title: "A variable is a label", description: "It gives a name to a value so you can use it later." },
      { title: "Values can be text or numbers", description: "Python can store different kinds of information." },
      { title: "Names should be clear", description: "Simple variable names make code easier to read." }
    ],
    explanation: [
      {
        title: "Why variables matter",
        body: "Without variables, you would need to repeat raw values over and over. Variables make code easier to read and update."
      },
      {
        title: "Reading a variable assignment",
        body: "You can read `name = 'Avery'` like this: 'Store the text Avery inside the variable called name.'"
      },
      {
        title: "Good beginner habit",
        body: "Use names that describe the value. `score` is easier to understand than `x`."
      }
    ],
    example: "name = 'Avery'\nscore = 10\n\nprint(name)\nprint(score)",
    practicePrompt: "Create a variable called `favorite_color` and another called `age`. Print both values.",
    practiceChecklist: [
      "Use meaningful variable names.",
      "Put text inside quotes.",
      "Print each variable after creating it."
    ],
    commonMistakes: [
      "Forgetting quotes around text values.",
      "Adding spaces inside a variable name.",
      "Using a value before creating the variable."
    ],
    bugChallenge: {
      prompt: "This code should store a favorite food, but it has a syntax issue.",
      brokenCode: "favorite food = 'Pizza'\nprint(favorite food)",
      expectedLearning: "Variable names cannot contain spaces."
    },
    exerciseSlug: "variable-label-check"
  },
  {
    slug: "changing-variable-values",
    module: "Variables",
    moduleSlug: "variables",
    order: 2,
    title: "Changing variable values",
    duration: "12 min",
    difficulty: "Beginner",
    summary: "See how Python can update stored information when a variable gets a new value.",
    warmup: "A score changes during a game. Variables can change too.",
    goal: "By the end, you should understand that a variable can be updated and will keep the newest value.",
    keyIdeas: [
      { title: "Variables can change", description: "A later assignment replaces the old value." },
      { title: "Newest value wins", description: "Python keeps the most recent value stored in that variable." },
      { title: "Print to check", description: "Printing after a change helps you confirm what happened." }
    ],
    explanation: [
      {
        title: "Updating a variable",
        body: "When you write a new assignment, Python replaces the old value. The variable still has the same name, but the stored value changes."
      },
      {
        title: "Why this is useful",
        body: "Many programs need changing data, such as scores, counters, or user choices."
      },
      {
        title: "A simple debugging habit",
        body: "If you are not sure what value a variable holds, print it after the update."
      }
    ],
    example: "score = 5\nprint(score)\n\nscore = 8\nprint(score)",
    practicePrompt: "Create a variable called `coins`, set it to 3, then change it to 5 and print it after each step.",
    practiceChecklist: [
      "Assign the first value.",
      "Print the variable.",
      "Assign a new value and print again."
    ],
    commonMistakes: [
      "Thinking the old value stays active after reassignment.",
      "Printing the text `coins` instead of the variable `coins`.",
      "Changing the variable name by accident."
    ],
    bugChallenge: {
      prompt: "This code should update the score, but the second line has the wrong symbol.",
      brokenCode: "score = 5\nscore == 8\nprint(score)",
      expectedLearning: "Use `=` to assign a value. `==` compares values."
    }
  },
  {
    slug: "python-conditionals-basics",
    module: "Conditionals",
    moduleSlug: "conditionals",
    order: 1,
    title: "Conditionals: helping Python choose",
    duration: "12 min",
    difficulty: "Beginner",
    summary: "Learn how Python makes choices so your program can respond differently based on what is true.",
    warmup: "If a friend asks whether they need an umbrella, your answer depends on the weather. Programs make decisions in a similar way.",
    goal: "By the end of this lesson, you should be able to read and write a simple `if` statement and spot two very common beginner mistakes.",
    keyIdeas: [
      {
        title: "A condition is a question",
        description: "Python checks whether something is true or false before deciding what to do next."
      },
      {
        title: "Blocks belong together",
        description: "Indented lines are part of the decision. Python uses spacing to understand structure."
      },
      {
        title: "You can test more than one path",
        description: "Use `elif` for another option and `else` for the fallback when nothing above matches."
      }
    ],
    explanation: [
      {
        title: "What a conditional does",
        body: "A conditional is a decision point. Your program checks a condition, such as whether a score is above 70, and then chooses the matching path."
      },
      {
        title: "Read it like a question",
        body: "You can read `if age >= 18` like this: 'If age is at least 18, run this block of code.' Reading it in plain language first makes the logic less scary."
      },
      {
        title: "Indentation matters",
        body: "In Python, the indented lines under `if` belong to that decision. If your spacing is inconsistent, Python may show an error even when your idea is correct."
      },
      {
        title: "Only one branch runs",
        body: "Python checks the branches from top to bottom. As soon as one condition is true, Python runs that block and skips the rest."
      }
    ],
    example: "score = 82\n\nif score >= 90:\n    print('Excellent work')\nelif score >= 70:\n    print('Nice job')\nelse:\n    print('Keep practicing')\n\n# Output: Nice job",
    practicePrompt: "Create a program that checks a temperature value. Print `Cold` if it is below 15, `Warm` if it is from 15 to 25, and `Hot` if it is above 25.",
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
      prompt: "This program should print `Adult` when age is 18 or more. It currently has syntax mistakes that stop Python before the logic can even run.",
      brokenCode: "age = 18\n\nif age => 18\n    print('Adult')\nelse:\n    print('Minor')",
      expectedLearning: "Notice that beginners often need to fix syntax first: use the correct comparison operator and end the `if` line with a colon."
    },
    exerciseSlug: "fix-the-conditional"
  },
  {
    slug: "elif-and-else-paths",
    module: "Conditionals",
    moduleSlug: "conditionals",
    order: 2,
    title: "Using `elif` and `else` for more paths",
    duration: "13 min",
    difficulty: "Beginner",
    summary: "Extend simple decisions by giving Python more than one possible path.",
    warmup: "If a traffic light can be red, yellow, or green, one simple `if` is not enough. You need more paths.",
    goal: "By the end, you should know when to use `elif` and when `else` makes sense as a fallback.",
    keyIdeas: [
      { title: "Use `elif` for another check", description: "It gives Python another condition to test." },
      { title: "Use `else` for the fallback", description: "It runs when no earlier condition matched." },
      { title: "Top to bottom still matters", description: "Python checks each branch in order until one matches." }
    ],
    explanation: [
      {
        title: "When one `if` is not enough",
        body: "Sometimes a program needs more than two outcomes. `elif` lets you test another condition after the first one."
      },
      {
        title: "What `else` means",
        body: "`else` is the final fallback. It does not ask a new question. It simply runs if the earlier conditions were false."
      },
      {
        title: "Keep branches readable",
        body: "When each branch is short and clear, it is easier to understand what the program will do."
      }
    ],
    example: "age = 16\n\nif age >= 18:\n    print('Adult')\nelif age >= 13:\n    print('Teen')\nelse:\n    print('Child')",
    practicePrompt: "Write a program that prints `High` for a score of 90 or more, `Medium` for 60 or more, and `Low` otherwise.",
    practiceChecklist: [
      "Use `if`, `elif`, and `else` in that order.",
      "Place the highest check first.",
      "Read each branch and ask when it will run."
    ],
    commonMistakes: [
      "Putting a lower threshold first so the higher one never runs.",
      "Adding a condition after `else`.",
      "Indenting one branch differently from the others."
    ],
    bugChallenge: {
      prompt: "This program should classify a score, but the order of the checks is wrong.",
      brokenCode: "score = 95\n\nif score >= 60:\n    print('Medium')\nelif score >= 90:\n    print('High')\nelse:\n    print('Low')",
      expectedLearning: "Place the more specific or higher condition first when order changes the result."
    }
  }
];

export const courseExercises: ExerciseData[] = [
  {
    slug: "welcome-message-fix",
    title: "Fix the welcome message",
    exerciseType: "bug_fix",
    responseFormat: "code",
    moduleSlug: "introduction-to-programming",
    lessonSlug: "what-is-programming",
    order: 1,
    duration: "6 min",
    summary: "Repair a tiny print statement bug and get used to reading syntax carefully.",
    prompt:
      "The code below should print two friendly welcome lines for a beginner. Fix the broken syntax without changing the meaning of the message.",
    responseLabel: "Your fixed Python code",
    responsePlaceholder: "# Fix the code here\nprint('Welcome to PyMentor')\nprint(\"Let's learn Python\")",
    instructions: [
      "Read the printed text and the quotes around it.",
      "Fix only what is necessary.",
      "Keep the output as a friendly welcome message."
    ],
    hints: [
      "The first print line is missing one quote.",
      "Both lines should still use `print()`.",
      "If the apostrophe in `Let's` causes trouble, use double quotes on that line."
    ],
    starterCode: "print('Welcome to PyMentor)\nprint('Let\\'s learn Python')",
    successCriteria: [
      "Both lines can run.",
      "The text is still a welcome message.",
      "The quotes are correctly paired."
    ],
    evaluator: {
      type: "rule_based",
      minLength: 24,
      passingScore: 4,
      rules: [
        {
          id: "two-print-lines",
          label: "Uses two `print()` lines",
          type: "occurrences_at_least",
          value: "print(",
          count: 2,
          feedbackWhenMissing: "Keep both welcome messages as printed output."
        },
        {
          id: "welcome-text",
          label: "Keeps the welcome message",
          type: "includes",
          value: "Welcome to PyMentor",
          feedbackWhenMissing: "The first line should still welcome the learner."
        },
        {
          id: "learn-python-text",
          label: "Keeps the second learning message",
          type: "includes",
          value: "learn Python",
          feedbackWhenMissing: "The second line should still mention learning Python."
        },
        {
          id: "fixed-first-line-quote",
          label: "No broken opening line remains",
          type: "excludes",
          value: "print('Welcome to PyMentor)",
          feedbackWhenMissing: "The first print line still looks like it has an unmatched quote."
        }
      ]
    }
  },
  {
    slug: "morning-routine-output",
    title: "Read the output in order",
    exerciseType: "output_check",
    responseFormat: "text",
    moduleSlug: "introduction-to-programming",
    lessonSlug: "running-python-step-by-step",
    order: 1,
    duration: "5 min",
    summary: "Practice reading Python from top to bottom by predicting the exact output.",
    prompt:
      "Look at the program below. Write the output exactly as it would appear, one line per output line.",
    responseLabel: "Expected output",
    responsePlaceholder: "Wake up\nBrush teeth\nEat breakfast",
    instructions: [
      "Read the code from the first line to the last line.",
      "Write only the printed output, not the `print()` code itself.",
      "Keep each output on its own line."
    ],
    hints: [
      "Python usually runs the first line before the second.",
      "The answer should have three output lines.",
      "Do not add extra punctuation that the code does not print."
    ],
    starterCode: "print('Wake up')\nprint('Brush teeth')\nprint('Eat breakfast')",
    successCriteria: [
      "The output is written in the correct order.",
      "Each printed line appears once.",
      "Only the output text is included."
    ],
    evaluator: {
      type: "exact_answer",
      minLength: 12,
      normalizeWhitespace: true,
      ignoreCase: true,
      acceptableAnswers: [
        "Wake up\nBrush teeth\nEat breakfast",
        "Wake up\r\nBrush teeth\r\nEat breakfast"
      ]
    }
  },
  {
    slug: "variable-label-check",
    title: "Explain what a variable is holding",
    exerciseType: "concept_check",
    responseFormat: "text",
    moduleSlug: "variables",
    lessonSlug: "variables-hold-values",
    order: 1,
    duration: "7 min",
    summary: "Explain the core idea of a variable in plain beginner language.",
    prompt:
      "In 2 or 3 short sentences, explain what a variable does in Python and what `score = 10` means.",
    responseLabel: "Your explanation",
    responsePlaceholder:
      "A variable is a name that stores a value. `score = 10` means the variable called score is holding the number 10.",
    instructions: [
      "Use your own words instead of trying to sound technical.",
      "Mention that a variable has a name and a value.",
      "Explain what the line `score = 10` means."
    ],
    hints: [
      "Think of a variable as a label on a box.",
      "The line `score = 10` stores a value in the variable.",
      "Short, clear sentences are enough."
    ],
    starterCode: "score = 10",
    successCriteria: [
      "Explains that a variable has a name or label.",
      "Explains that it stores a value.",
      "Explains that `score = 10` means score now holds 10."
    ],
    evaluator: {
      type: "ordered_concepts",
      minLength: 35,
      passingScore: 4,
      requireOrder: true,
      concepts: [
        {
          id: "name-or-label",
          label: "Mentions that a variable is a name or label",
          keywords: ["name", "label", "called"],
          feedbackWhenMissing: "Mention that a variable gives a name or label to something."
        },
        {
          id: "stores-value",
          label: "Explains that the variable stores a value",
          keywords: ["store", "holds", "remember", "value"],
          feedbackWhenMissing: "Add the idea that the variable is storing or holding a value."
        },
        {
          id: "score-example",
          label: "Explains what `score = 10` means",
          keywords: ["score", "10"],
          feedbackWhenMissing: "Explain the example directly: what does `score = 10` tell Python to do?"
        }
      ]
    }
  },
  {
    slug: "fix-the-conditional",
    title: "Fix the conditional",
    exerciseType: "bug_fix",
    responseFormat: "code",
    moduleSlug: "conditionals",
    lessonSlug: "python-conditionals-basics",
    order: 1,
    duration: "8 min",
    summary: "Fix a beginner conditional bug by correcting syntax before worrying about anything else.",
    prompt:
      "This program should print `Adult` when `age` is 18 or more and `Minor` otherwise. Correct the syntax so the logic reads clearly.",
    responseLabel: "Your corrected conditional",
    responsePlaceholder:
      "# Correct the comparison and punctuation\nage = 18\n\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
    instructions: [
      "Look at the comparison operator first.",
      "Check the punctuation at the end of the `if` line.",
      "Keep the indentation readable."
    ],
    hints: [
      "Python uses `>=` for “greater than or equal to”.",
      "An `if` line needs a colon at the end.",
      "The `else` branch should stay aligned with the `if`."
    ],
    starterCode: "age = 18\n\nif age => 18\n    print('Adult')\nelse:\n    print('Minor')",
    successCriteria: [
      "The code uses a valid comparison operator.",
      "The `if` line ends with a colon.",
      "The code prints `Adult` when age is 18."
    ],
    evaluator: {
      type: "structure_check",
      minLength: 35,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "uses-greater-equal",
          label: "Uses `>=` as the comparison operator",
          pattern: ">=",
          feedbackWhenMissing: "Use `>=` instead of the broken comparison."
        },
        {
          id: "if-line-colon",
          label: "Ends the `if` line with a colon",
          pattern: "if\\s+age\\s*>=\\s*18\\s*:",
          flags: "i",
          feedbackWhenMissing: "The `if` line should end with a colon after the condition."
        },
        {
          id: "adult-output",
          label: "Keeps the `Adult` output",
          pattern: "Adult",
          feedbackWhenMissing: "The `Adult` output should still be present."
        },
        {
          id: "minor-output",
          label: "Keeps the fallback `Minor` output",
          pattern: "Minor",
          feedbackWhenMissing: "The fallback branch should still print `Minor`."
        }
      ],
      forbiddenPatterns: [
        {
          id: "removes-wrong-operator",
          label: "Removes the invalid `=>` operator",
          pattern: "=>",
          feedbackWhenMissing: "The invalid `=>` operator is still there."
        }
      ],
      orderedPatternIds: ["if-line-colon", "adult-output", "minor-output"]
    }
  }
];
