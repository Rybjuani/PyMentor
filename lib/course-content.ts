import { ExerciseData, LessonData, RoadmapModule } from "@/types";

export const courseModules: RoadmapModule[] = [
  {
    slug: "introduction-to-programming",
    title: "Introduction to programming",
    description: "Start with what code is, how Python runs line by line, and how to fix tiny mistakes without panic.",
    order: 1,
    status: "available",
    lessonCount: 3,
    estimatedTime: "45 min",
    xp: 120
  },
  {
    slug: "variables",
    title: "Variables",
    description: "Learn how Python stores information, updates it, and uses it in simple interactive programs.",
    order: 2,
    status: "available",
    lessonCount: 3,
    estimatedTime: "50 min",
    xp: 150
  },
  {
    slug: "conditionals",
    title: "Conditionals",
    description: "Teach Python to make decisions with comparisons, `if`, `elif`, and `else`.",
    order: 3,
    status: "available",
    lessonCount: 3,
    estimatedTime: "55 min",
    xp: 180
  },
  {
    slug: "loops",
    title: "Loops",
    description: "Learn how Python repeats actions with calm, readable `for` loops and simple counting patterns.",
    order: 4,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "55 min",
    xp: 180
  },
  {
    slug: "functions",
    title: "Functions",
    description: "Turn repeated steps into named actions so your programs stay clearer, calmer, and easier to grow.",
    order: 5,
    status: "locked",
    lessonCount: 3,
    estimatedTime: "58 min",
    xp: 190
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
    summary: "Understand programming as giving clear instructions to a computer, one small step at a time.",
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
      },
      {
        title: "Early progress should feel simple",
        body: "Your first wins do not need to be impressive. They need to be understandable. Running two clear lines of code is a real first step."
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
    playground: {
      title: "First Python playground",
      guidance: "Edit the two `print()` lines and run them. This is your safe place to experiment with tiny Python changes.",
      starterCode: "print('Hello, beginner!')\nprint('I am learning Python step by step.')",
      emptyOutputHint: "Try adding or changing a `print()` line, then run the code again."
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
      {
        title: "Order matters",
        description: "Python usually runs the first line before the second line, and so on."
      },
      {
        title: "One line at a time",
        description: "Reading code slowly makes bugs easier to notice."
      },
      {
        title: "Outputs show results",
        description: "What you see printed is the result of the steps you wrote."
      }
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
        title: "Outputs help you check your thinking",
        body: "If the output surprises you, that is useful information. It means one of your assumptions about the order was wrong."
      },
      {
        title: "This idea keeps helping later",
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
    slug: "reading-python-errors-calmly",
    module: "Introduction to programming",
    moduleSlug: "introduction-to-programming",
    order: 3,
    title: "Reading small Python errors calmly",
    duration: "12 min",
    difficulty: "Beginner",
    summary: "Learn how to read a simple Python error message without panic and fix one small problem at a time.",
    warmup: "When a recipe goes wrong, you do not throw away cooking forever. You look for the first step that broke. Errors in code work the same way.",
    goal: "By the end, you should be able to treat a beginner error message as a clue instead of as proof that you are bad at coding.",
    keyIdeas: [
      {
        title: "Errors are clues",
        description: "An error message is Python telling you where it got confused."
      },
      {
        title: "Fix the first problem first",
        description: "One syntax error can cause several confusing effects later in the file."
      },
      {
        title: "Tiny mistakes are normal",
        description: "Missing quotes, colons, or letters happen to everyone."
      }
    ],
    explanation: [
      {
        title: "An error message is not a judgment",
        body: "When Python stops and shows an error, it is not saying you failed. It is showing you the place where the program stopped making sense."
      },
      {
        title: "Start with the first line Python points to",
        body: "Do not scan the whole file looking for everything at once. Start where Python got stuck, fix that, and then run the code again."
      },
      {
        title: "Look for punctuation and spelling first",
        body: "For beginners, many early errors come from missing quotes, missing colons, spelling mistakes, or inconsistent indentation."
      },
      {
        title: "You can stay calm and methodical",
        body: "A good debugging habit is simple: read the line, say what it should do, and change one thing at a time."
      }
    ],
    example: "name = 'Maya'\nprint(name)\nprint('Ready to learn!')",
    practicePrompt: "Take a small broken program and look for one issue first. Explain in plain words what Python might be confused about.",
    practiceChecklist: [
      "Read the line Python points to.",
      "Check spelling and punctuation before changing the logic.",
      "Fix one issue, then run again."
    ],
    commonMistakes: [
      "Trying to fix everything at once.",
      "Ignoring the line number or line Python points to.",
      "Changing the code so much that you lose track of the original goal."
    ],
    bugChallenge: {
      prompt: "This code should print a stored name, but one typing mistake breaks it.",
      brokenCode: "name = 'Maya'\nprnit(name)",
      expectedLearning: "The overall idea can be correct even when one small spelling mistake stops the program."
    },
    exerciseSlug: "fix-the-name-print"
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
      {
        title: "A variable is a label",
        description: "It gives a name to a value so you can use it later."
      },
      {
        title: "Values can be text or numbers",
        description: "Python can store different kinds of information."
      },
      {
        title: "Names should be clear",
        description: "Simple variable names make code easier to read."
      }
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
        title: "Variables make meaning visible",
        body: "A good variable name helps you see what the program is trying to remember. `favorite_color` says more than `x`."
      },
      {
        title: "This is the start of real programs",
        body: "As soon as a program can remember information, it becomes more useful and more personal."
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
      {
        title: "Variables can change",
        description: "A later assignment replaces the old value."
      },
      {
        title: "Newest value wins",
        description: "Python keeps the most recent value stored in that variable."
      },
      {
        title: "Print to check",
        description: "Printing after a change helps you confirm what happened."
      }
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
        title: "Read each assignment in time order",
        body: "If a variable changes more than once, read the file from top to bottom and ask what value it holds at each moment."
      },
      {
        title: "Printing reduces confusion",
        body: "If you are not sure what value a variable holds, print it right after the update. That gives you immediate feedback."
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
    },
    playground: {
      title: "See a variable change live",
      guidance: "Run the code, then change the numbers and run it again. Watch how Python keeps the newest value of the variable.",
      starterCode: "coins = 3\nprint(coins)\n\ncoins = 5\nprint(coins)",
      emptyOutputHint: "This runner shows whatever your `print()` lines send to the screen."
    },
    exerciseSlug: "coins-after-update"
  },
  {
    slug: "using-input-to-store-text",
    module: "Variables",
    moduleSlug: "variables",
    order: 3,
    title: "Using input to store text",
    duration: "14 min",
    difficulty: "Beginner",
    summary: "Collect a simple answer from the user and store it in a variable.",
    warmup: "A program becomes more interesting when it can respond to a real person instead of only printing fixed text.",
    goal: "By the end, you should be able to use `input()` to collect text, store it in a variable, and print a simple reply.",
    keyIdeas: [
      {
        title: "`input()` waits for a reply",
        description: "It lets the user type something into the program."
      },
      {
        title: "The reply can be stored",
        description: "You can save the result of `input()` inside a variable."
      },
      {
        title: "Then you can use it later",
        description: "Printing the stored value makes the program feel interactive."
      }
    ],
    explanation: [
      {
        title: "What `input()` does",
        body: "When Python reaches `input()`, it pauses and waits for the user to type something. Whatever the user types comes back as text."
      },
      {
        title: "Store the answer in a variable",
        body: "A common beginner pattern is `name = input('What is your name? ')`. You are asking a question and saving the answer."
      },
      {
        title: "Use the variable in a reply",
        body: "After storing the answer, you can print it back to the user. That is a simple but real interaction."
      },
      {
        title: "Keep the first version small",
        body: "For now, one question and one reply are enough. Clear and simple is better than complicated and confusing."
      }
    ],
    example: "name = input('What is your name? ')\nprint('Hello, ' + name)",
    practicePrompt: "Ask the user for their favorite snack, store the answer in `snack`, and print a friendly reply using that variable.",
    practiceChecklist: [
      "Use `input()` once.",
      "Store the answer in a variable with a clear name.",
      "Print a short reply that includes the stored answer."
    ],
    commonMistakes: [
      "Forgetting to store the result of `input()` in a variable.",
      "Trying to use a variable name that was never created.",
      "Making the program too long before the simple version works."
    ],
    bugChallenge: {
      prompt: "This program should ask for a name and greet the user, but one small syntax issue breaks the first line.",
      brokenCode: "name = input('What is your name? '\nprint('Hello, ' + name)",
      expectedLearning: "Function calls need matching parentheses as well as quotes."
    },
    playground: {
      title: "Try input in the browser",
      guidance: "Run the code and answer the browser prompt. PyMentor will pass your reply into Python so you can see the greeting come back.",
      starterCode: "name = input('What is your name? ')\nprint('Hello, ' + name)",
      emptyOutputHint: "If your code uses `input()`, the browser will ask you for the value before Python continues."
    },
    exerciseSlug: "friendly-intro-input"
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
      {
        title: "Use `elif` for another check",
        description: "It gives Python another condition to test."
      },
      {
        title: "Use `else` for the fallback",
        description: "It runs when no earlier condition matched."
      },
      {
        title: "Top to bottom still matters",
        description: "Python checks each branch in order until one matches."
      }
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
        title: "Order changes the result",
        body: "If a lower threshold comes first, Python may stop there before it reaches the more specific branch you wanted."
      },
      {
        title: "Readable branches make debugging easier",
        body: "Short, clear branches help you predict which path should run and notice when the order is wrong."
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
    },
    exerciseSlug: "score-band-order"
  },
  {
    slug: "comparison-questions-in-python",
    module: "Conditionals",
    moduleSlug: "conditionals",
    order: 3,
    title: "Comparison questions in Python",
    duration: "14 min",
    difficulty: "Beginner",
    summary: "Understand what comparisons like `==`, `>`, and `>=` are asking before Python makes a choice.",
    warmup: "Before a program can decide what to do, it needs a clear yes-or-no question to check.",
    goal: "By the end, you should be able to explain what a comparison asks and why its answer becomes `True` or `False`.",
    keyIdeas: [
      {
        title: "Comparisons ask yes-or-no questions",
        description: "They produce a result that is either true or false."
      },
      {
        title: "Different operators ask different questions",
        description: "`==` checks equality, `>` checks greater than, and `>=` checks greater than or equal to."
      },
      {
        title: "Conditionals depend on these answers",
        description: "An `if` branch runs when its comparison becomes true."
      }
    ],
    explanation: [
      {
        title: "What `==` means",
        body: "The operator `==` asks whether two values are equal. It does not store a value. It checks a relationship between two values."
      },
      {
        title: "What `>` and `>=` mean",
        body: "`>` asks whether the value on the left is bigger. `>=` asks whether it is bigger or exactly the same."
      },
      {
        title: "Why the answer matters",
        body: "The result of a comparison becomes `True` or `False`. That answer is what your conditional uses to decide which branch to run."
      },
      {
        title: "Read the question in plain language first",
        body: "If you can say the comparison out loud in normal words, the code usually becomes easier to reason about."
      }
    ],
    example: "score = 70\n\nprint(score == 70)\nprint(score > 70)\nprint(score >= 70)\n\n# Output:\n# True\n# False\n# True",
    practicePrompt: "Choose a number for `coins` and write three comparisons: one that becomes `True`, one that becomes `False`, and one that checks equality.",
    practiceChecklist: [
      "Use at least two different comparison operators.",
      "Say each comparison out loud in plain language.",
      "Check whether your predicted `True` or `False` result makes sense."
    ],
    commonMistakes: [
      "Using `=` when you meant `==`.",
      "Forgetting that `>=` includes the equal case.",
      "Reading the symbols too quickly without translating them into words."
    ],
    bugChallenge: {
      prompt: "This code should check whether a score is at least 10, but the operator changes the question.",
      brokenCode: "score = 10\n\nif score > 10:\n    print('Enough points')",
      expectedLearning: "Changing `>` to `>=` changes the meaning of the condition in an important way."
    },
    playground: {
      title: "Try comparison questions",
      guidance: "Change the number and the comparison operator, then run the code to see how the result changes.",
      starterCode:
        "score = 70\n\nprint(score == 70)\nprint(score > 70)\nprint(score >= 70)",
      emptyOutputHint: "A few `print()` lines are enough to make the comparison results visible."
    },
    exerciseSlug: "comparison-question-check"
  },
  {
    slug: "why-loops-help",
    module: "Loops",
    moduleSlug: "loops",
    order: 1,
    title: "Why loops help with repetition",
    duration: "13 min",
    difficulty: "Beginner",
    summary: "Learn what repetition is and why loops save you from writing the same line again and again.",
    warmup: "If you need to clap three times, you do not write three different rules for clapping. A loop works the same way in code.",
    goal: "By the end, you should understand that a loop repeats a block of code and is useful when the same action needs to happen more than once.",
    keyIdeas: [
      {
        title: "Loops repeat work",
        description: "A loop lets Python do the same action many times."
      },
      {
        title: "Repetition can stay readable",
        description: "A short loop is often clearer than copying the same line again and again."
      },
      {
        title: "The loop body is the repeated block",
        description: "Indented lines under the loop are the steps that repeat."
      }
    ],
    explanation: [
      {
        title: "Why repetition shows up quickly",
        body: "As soon as you start making programs, you find tasks that repeat: printing several lines, counting items, or doing the same check many times."
      },
      {
        title: "What a loop changes",
        body: "Instead of copying one line three or four times, you tell Python to repeat that line for you. That makes your code shorter and easier to change later."
      },
      {
        title: "A loop is still read top to bottom",
        body: "Python reaches the loop line, then runs the indented block again and again until the loop finishes. Reading the loop calmly keeps it understandable."
      },
      {
        title: "Start with simple repetition",
        body: "At first, loops do not need to be fancy. Even repeating one short `print()` line is enough to learn the core idea."
      }
    ],
    example: "for _ in range(3):\n    print('Practice makes progress')",
    practicePrompt: "Write a loop that prints `Small steps matter` three times.",
    practiceChecklist: [
      "Start with `for` and `range(3)`.",
      "Indent the `print()` line under the loop.",
      "Run the code and count how many times the message appears."
    ],
    commonMistakes: [
      "Forgetting to indent the repeated line.",
      "Expecting the loop to run forever instead of a set number of times.",
      "Writing repeated code manually instead of placing it inside the loop."
    ],
    bugChallenge: {
      prompt: "This code should print the same message three times, but the repeated line is not in the loop body.",
      brokenCode: "for _ in range(3):\nprint('Keep going')",
      expectedLearning: "Indented lines belong to the loop. Without indentation, Python cannot see what should repeat."
    },
    playground: {
      title: "See repetition happen",
      guidance: "Run the loop, then change the message or the number in `range()` and watch how the repetition changes.",
      starterCode: "for _ in range(3):\n    print('Practice makes progress')",
      emptyOutputHint: "A loop usually becomes easier to understand once you see the repeated output."
    },
    exerciseSlug: "read-cheer-loop-output"
  },
  {
    slug: "for-loops-with-range",
    module: "Loops",
    moduleSlug: "loops",
    order: 2,
    title: "Counting with `for` loops and `range()`",
    duration: "14 min",
    difficulty: "Beginner",
    summary: "Use `range()` to repeat a loop a specific number of times and build simple counting output.",
    warmup: "If you want Python to count through a small list of numbers, `range()` gives it those steps.",
    goal: "By the end, you should be able to use `for` with `range()` to print a simple sequence like 1, 2, 3.",
    keyIdeas: [
      {
        title: "`range()` provides counting steps",
        description: "It gives the loop the values it moves through."
      },
      {
        title: "The loop variable changes each time",
        description: "Inside the loop, the variable holds the current step."
      },
      {
        title: "Reading output reveals the pattern",
        description: "A counting loop should make a visible sequence when you print the loop variable."
      }
    ],
    explanation: [
      {
        title: "What `range(3)` means",
        body: "When you use `range(3)`, Python gives the loop three steps: 0, 1, and 2. That is why the loop repeats three times."
      },
      {
        title: "Printing the loop variable",
        body: "If you write `for number in range(3): print(number)`, Python prints the current value each time through the loop."
      },
      {
        title: "Starting from 1 instead of 0",
        body: "You can use `range(1, 4)` when you want 1, 2, 3. The first number is where the count starts, and the last number is not included."
      },
      {
        title: "This pattern appears everywhere",
        body: "Simple counting loops are the start of progress bars, repeated practice rounds, and many other beginner-friendly programs."
      }
    ],
    example: "for number in range(1, 4):\n    print(number)",
    practicePrompt: "Write a loop that prints the numbers 1, 2, 3, and 4, one per line.",
    practiceChecklist: [
      "Use a loop variable such as `number`.",
      "Choose a `range()` that starts and stops in the right place.",
      "Run the code and compare the printed sequence with what you expected."
    ],
    commonMistakes: [
      "Forgetting that the last number in `range()` is not included.",
      "Indenting the `print()` line incorrectly.",
      "Printing the wrong variable or a fixed number every time."
    ],
    bugChallenge: {
      prompt: "This code should print 1, 2, and 3, but the stopping point makes the output too short.",
      brokenCode: "for number in range(1, 3):\n    print(number)",
      expectedLearning: "The last number in `range()` is not included, so you often need to go one higher than you first think."
    },
    playground: {
      title: "Try counting with range",
      guidance: "Run the loop, then change the start and stop values to see how the printed sequence changes.",
      starterCode: "for number in range(1, 4):\n    print(number)",
      emptyOutputHint: "A counting loop should show one printed number on each line."
    },
    exerciseSlug: "build-counting-loop"
  },
  {
    slug: "reading-loop-output-calmly",
    module: "Loops",
    moduleSlug: "loops",
    order: 3,
    title: "Reading loop output calmly",
    duration: "14 min",
    difficulty: "Beginner",
    summary: "Practice reading repeated output, spotting off-by-one issues, and fixing simple loop structure mistakes.",
    warmup: "Loops can look intimidating at first because one short block creates many lines of output. The trick is to read one pass at a time.",
    goal: "By the end, you should be able to trace a simple loop, predict its output, and fix a small loop bug without getting lost.",
    keyIdeas: [
      {
        title: "One pass at a time",
        description: "Imagine the loop body running once, then again, instead of trying to picture everything at once."
      },
      {
        title: "Off-by-one errors are common",
        description: "A loop can repeat one too many or one too few times if the range is slightly off."
      },
      {
        title: "Indentation still matters",
        description: "Loops use indentation the same way conditionals do."
      }
    ],
    explanation: [
      {
        title: "Tracing a loop in slow motion",
        body: "Pick the first value the loop uses, read the body once, then move to the next value. That step-by-step view keeps repetition from feeling chaotic."
      },
      {
        title: "What off-by-one means",
        body: "An off-by-one mistake happens when the loop repeats one extra time or stops one step too early. This is very common with `range()` and very fixable."
      },
      {
        title: "Use output as a clue",
        body: "If the output has too many lines or stops too early, that usually means your loop structure is close but your `range()` or indentation needs one adjustment."
      },
      {
        title: "Stay focused on the pattern",
        body: "The best beginner move is to ask: what should happen on each pass, and how many passes should there be?"
      }
    ],
    example: "for step in range(1, 4):\n    print('Step', step)\nprint('Done!')",
    practicePrompt: "Write a loop that prints `Step 1`, `Step 2`, and `Step 3`, then prints `Done!` after the loop finishes.",
    practiceChecklist: [
      "Keep the `print('Done!')` line outside the loop.",
      "Use a counting variable inside the loop.",
      "Read the final output line by line to confirm the pattern."
    ],
    commonMistakes: [
      "Indenting `Done!` inside the loop by accident.",
      "Using a `range()` that repeats too many or too few times.",
      "Trying to debug the whole loop at once instead of tracing one pass at a time."
    ],
    bugChallenge: {
      prompt: "This code should print three steps and then `Done!`, but one indentation mistake changes the output pattern.",
      brokenCode: "for step in range(1, 4):\n    print('Step', step)\n    print('Done!')",
      expectedLearning: "A line outside the loop should not be indented. Small indentation changes can completely change the repeated output."
    },
    playground: {
      title: "Trace the loop output",
      guidance: "Run the code, then change the `range()` or the final line placement to see how the pattern changes.",
      starterCode: "for step in range(1, 4):\n    print('Step', step)\nprint('Done!')",
      emptyOutputHint: "The output should show repeated step lines followed by one final line after the loop."
    },
    exerciseSlug: "fix-step-loop"
  },
  {
    slug: "why-functions-help",
    module: "Functions",
    moduleSlug: "functions",
    order: 1,
    title: "Why functions help",
    duration: "14 min",
    difficulty: "Beginner",
    summary: "Learn what a function is in plain language and why named actions help you avoid repeating yourself.",
    warmup: "If you make tea every morning, you probably think of it as one routine, not ten separate instructions. A function works like giving that routine a name in code.",
    goal: "By the end, you should understand that a function is a named block of code you can run whenever you need that action again.",
    keyIdeas: [
      {
        title: "A function is a named action",
        description: "It groups a few steps together and gives them a clear name."
      },
      {
        title: "Functions reduce repetition",
        description: "You can call the function instead of rewriting the same block again."
      },
      {
        title: "A good name explains the job",
        description: "Clear function names make code easier to read."
      }
    ],
    explanation: [
      {
        title: "Why functions appear after loops",
        body: "Loops helped you repeat the same action many times. Functions help you package a useful action so you can run it whenever you need it in different parts of a program."
      },
      {
        title: "Think in named routines",
        body: "A function lets you say, 'Here is one small job my program knows how to do.' That keeps your code from turning into one long wall of instructions."
      },
      {
        title: "Functions make change easier",
        body: "If the behavior needs to change later, you can often update the function in one place instead of hunting through repeated code."
      },
      {
        title: "Start with tiny functions",
        body: "Your first function does not need to be clever. Even a short greeting function is enough to learn the pattern."
      }
    ],
    example: "def cheer():\n    print('Keep going!')\n\ncheer()\ncheer()",
    practicePrompt: "Write a function called `welcome()` that prints one friendly line, then call it two times.",
    practiceChecklist: [
      "Start with `def welcome():`.",
      "Indent the `print()` line inside the function.",
      "Call the function by name after the definition."
    ],
    commonMistakes: [
      "Forgetting the parentheses when calling a function.",
      "Leaving the function body unindented.",
      "Using a vague function name like `thing()` instead of a clear name."
    ],
    bugChallenge: {
      prompt: "This code should define a function and call it, but two tiny syntax issues break the pattern.",
      brokenCode: "def welcome()\nprint('Hi there')\n\nwelcome",
      expectedLearning: "A function definition needs a colon, the body must be indented, and calling a function uses parentheses."
    },
    playground: {
      title: "Try your first function",
      guidance: "Run the code, then rename the function or change the message. Notice how calling the same function twice repeats the behavior without copying the print line.",
      starterCode: "def cheer():\n    print('Keep going!')\n\ncheer()\ncheer()",
      emptyOutputHint: "A working function example should print the same message each time you call it."
    },
    exerciseSlug: "read-greet-function-output"
  },
  {
    slug: "defining-and-calling-functions",
    module: "Functions",
    moduleSlug: "functions",
    order: 2,
    title: "Defining and calling a basic function",
    duration: "15 min",
    difficulty: "Beginner",
    summary: "Practice the exact shape of a small function: define it, indent the body, and call it clearly.",
    warmup: "A function has two parts: first you teach Python the routine, then you tell Python to run it.",
    goal: "By the end, you should be able to define a simple function and call it confidently without mixing up the two steps.",
    keyIdeas: [
      {
        title: "Define first, call second",
        description: "Python needs to see the function definition before you call it."
      },
      {
        title: "Indentation marks the function body",
        description: "Indented lines belong to the function, just like loop and conditional blocks."
      },
      {
        title: "Calling uses the function name with parentheses",
        description: "The parentheses tell Python to run the function."
      }
    ],
    explanation: [
      {
        title: "What `def` does",
        body: "The word `def` tells Python that you are defining a function. You give the function a name, add parentheses, and end the line with a colon."
      },
      {
        title: "Why the body must be indented",
        body: "The indented lines below `def` are the steps Python should remember as part of that function. Without indentation, Python cannot see the function body clearly."
      },
      {
        title: "What calling means",
        body: "After the function is defined, writing `greet()` tells Python to run that saved block of code. The definition explains the action; the call performs it."
      },
      {
        title: "Separate the shape from the meaning",
        body: "At first, functions feel like new punctuation. That is normal. Focus on the simple pattern: define, indent, call."
      }
    ],
    example: "def greet():\n    print('Hello from a function')\n\ngreet()",
    practicePrompt: "Create a function called `show_tip()` that prints `Small steps matter`, then call it twice.",
    practiceChecklist: [
      "Write `def show_tip():` on its own line.",
      "Indent the print line under it.",
      "Call `show_tip()` after the definition."
    ],
    commonMistakes: [
      "Calling the function before it is defined.",
      "Writing `show_tip` instead of `show_tip()`.",
      "Indenting the call as if it were still inside the function."
    ],
    bugChallenge: {
      prompt: "This code should define `wave()` and call it, but the call is missing the part that actually runs the function.",
      brokenCode: "def wave():\n    print('Hello')\n\nwave",
      expectedLearning: "A function name by itself is not the same as calling the function. Parentheses matter."
    },
    playground: {
      title: "Build and run a basic function",
      guidance: "Run the code, then change the message or call the function more than once. This is a simple way to see how one function can be reused.",
      starterCode: "def greet():\n    print('Hello from a function')\n\ngreet()",
      emptyOutputHint: "If nothing happens, check whether the function is being called with parentheses."
    },
    exerciseSlug: "build-cheer-function"
  },
  {
    slug: "simple-parameters-and-function-mistakes",
    module: "Functions",
    moduleSlug: "functions",
    order: 3,
    title: "Simple parameters and common function mistakes",
    duration: "16 min",
    difficulty: "Beginner",
    summary: "Learn how a function can accept one small piece of information and how to debug beginner function mistakes calmly.",
    warmup: "A reusable greeting becomes more useful when you can choose who it greets. Parameters let the function receive that detail.",
    goal: "By the end, you should understand that a parameter is a named input for a function and be able to spot common beginner mistakes with names, parentheses, and indentation.",
    keyIdeas: [
      {
        title: "A parameter is an input",
        description: "It gives the function a value to use when it runs."
      },
      {
        title: "The call provides the real value",
        description: "You pass the value in the parentheses when you call the function."
      },
      {
        title: "Function errors are often small shape mistakes",
        description: "Missing parentheses, missing colons, and indentation issues are common and fixable."
      }
    ],
    explanation: [
      {
        title: "Why parameters help",
        body: "Without parameters, you might need a different function for every person or value. With a parameter, one function can stay general and become more useful."
      },
      {
        title: "Read the definition in plain language",
        body: "You can read `def greet(name):` like this: 'Define a function called greet that expects one value named name.'"
      },
      {
        title: "Read the call in plain language",
        body: "You can read `greet('Maya')` like this: 'Run greet using Maya as the value for name.' That simple translation makes function calls much less abstract."
      },
      {
        title: "Stay calm with function errors",
        body: "If a function is not working, start by checking the shape: the `def` line, the colon, the indentation, the parentheses, and whether the call passes the value you expected."
      }
    ],
    example: "def greet(name):\n    print('Hello, ' + name)\n\ngreet('Maya')",
    practicePrompt: "Write a function called `cheer(name)` that prints `You can do this, ` plus the given name, then call it with one name.",
    practiceChecklist: [
      "Put one parameter name inside the function parentheses.",
      "Use that parameter inside `print()`.",
      "Call the function with one value in quotes."
    ],
    commonMistakes: [
      "Defining the parameter but forgetting to use it inside the function.",
      "Calling the function without passing the needed value.",
      "Putting the call inside the function body by accident."
    ],
    bugChallenge: {
      prompt: "This code should greet one person by name, but the function line and the call do not match cleanly.",
      brokenCode: "def greet(name)\n    print('Hello, ' + name)\n\ngreet",
      expectedLearning: "Function definitions need a colon, and running the function requires parentheses in the call."
    },
    playground: {
      title: "Try a function with a parameter",
      guidance: "Run the code, then change the name in the function call. This is the first step toward reusable functions that work with different values.",
      starterCode: "def greet(name):\n    print('Hello, ' + name)\n\ngreet('Maya')",
      emptyOutputHint: "A working function with a parameter should print the greeting using the value from the call."
    },
    exerciseSlug: "fix-name-greeter-function"
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
    playground: {
      title: "Test the fix",
      guidance: "After editing the code in the answer box, you can also try the same idea here and run it directly in the browser.",
      starterCode: "print('Welcome to PyMentor')\nprint(\"Let's learn Python\")",
      emptyOutputHint: "A correct solution should print two friendly lines."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Welcome to PyMentor\nLet's learn Python"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
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
    order: 2,
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
    slug: "fix-the-name-print",
    title: "Fix the name print bug",
    exerciseType: "bug_fix",
    responseFormat: "code",
    moduleSlug: "introduction-to-programming",
    lessonSlug: "reading-python-errors-calmly",
    order: 3,
    duration: "6 min",
    summary: "Practice fixing one tiny error by focusing on the first broken line.",
    prompt:
      "This code should store a name and print it. Repair the mistake without changing the overall idea of the program.",
    responseLabel: "Your corrected code",
    responsePlaceholder: "name = 'Maya'\nprint(name)",
    instructions: [
      "Read the first broken line carefully.",
      "Keep the stored name exactly as it is.",
      "Fix the spelling mistake and nothing extra."
    ],
    hints: [
      "The variable line is already fine.",
      "The print function name is misspelled.",
      "One small typo can stop the whole file."
    ],
    starterCode: "name = 'Maya'\nprnit(name)",
    successCriteria: [
      "The code keeps the variable `name`.",
      "The print function is spelled correctly.",
      "The program prints the stored name."
    ],
    playground: {
      title: "Run the corrected program",
      guidance: "Fix the typo and run the code. This is a good way to see how one tiny spelling change can unblock the whole program.",
      starterCode: "name = 'Maya'\nprint(name)",
      emptyOutputHint: "A working solution should print the stored name."
    },
    evaluator: {
      type: "rule_based",
      minLength: 18,
      passingScore: 4,
      rules: [
        {
          id: "keeps-name-variable",
          label: "Keeps the `name` variable",
          type: "includes",
          value: "name = 'Maya'",
          feedbackWhenMissing: "Keep the original variable assignment so the program still stores the name."
        },
        {
          id: "uses-print",
          label: "Uses `print()` correctly",
          type: "includes",
          value: "print(name)",
          feedbackWhenMissing: "The second line should use `print(name)`."
        },
        {
          id: "removes-prnit",
          label: "Removes the misspelled function name",
          type: "excludes",
          value: "prnit",
          feedbackWhenMissing: "The misspelled function name is still present."
        },
        {
          id: "two-lines-remain",
          label: "Keeps the program short and focused",
          type: "occurrences_at_least",
          value: "\n",
          count: 1,
          feedbackWhenMissing: "Keep the answer as the same small two-line program."
        }
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
    slug: "coins-after-update",
    title: "Predict the updated value",
    exerciseType: "output_check",
    responseFormat: "text",
    moduleSlug: "variables",
    lessonSlug: "changing-variable-values",
    order: 2,
    duration: "6 min",
    summary: "Practice following a variable as it changes value from one line to the next.",
    prompt:
      "Read the program below. What exact output will it print after the variable changes? Write one output line per line.",
    responseLabel: "Expected output",
    responsePlaceholder: "3\n5",
    instructions: [
      "Read the first assignment and print first.",
      "Then read the update before the second print.",
      "Write only the output values."
    ],
    hints: [
      "The first print happens before the variable changes.",
      "The second print uses the newest value.",
      "You should end up with two output lines."
    ],
    starterCode: "coins = 3\nprint(coins)\ncoins = 5\nprint(coins)",
    successCriteria: [
      "Shows the old value first.",
      "Shows the updated value second.",
      "Writes only the output, not the code."
    ],
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["3\n5"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "exact_answer",
      minLength: 3,
      normalizeWhitespace: true,
      ignoreCase: true,
      acceptableAnswers: ["3\n5", "3\r\n5"]
    }
  },
  {
    slug: "friendly-intro-input",
    title: "Build a tiny input greeting",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "variables",
    lessonSlug: "using-input-to-store-text",
    order: 3,
    duration: "8 min",
    summary: "Put input, variables, and output together in one tiny interactive program.",
    prompt:
      "Write a short program that asks for a name, stores the answer in a variable, and prints a friendly hello message using that variable.",
    responseLabel: "Your input program",
    responsePlaceholder:
      "name = input('What is your name? ')\nprint('Hello, ' + name)",
    instructions: [
      "Ask one simple question with `input()`.",
      "Store the answer in a variable such as `name`.",
      "Print a reply that includes the stored variable."
    ],
    hints: [
      "Start with `name = input(...)`.",
      "Use `print()` on the next line.",
      "Keep the program to two short lines."
    ],
    starterCode: "name = input('What is your name? ')\nprint('Hello, ' + name)",
    successCriteria: [
      "Uses `input()` to ask for a name.",
      "Stores the answer in a variable.",
      "Prints a greeting that uses that variable."
    ],
    playground: {
      title: "Try the interactive version",
      guidance: "Run this code and answer the browser prompt. Keep the program short so the interaction stays clear.",
      starterCode: "name = input('What is your name? ')\nprint('Hello, ' + name)",
      emptyOutputHint: "If you do not see output yet, answer the input prompt and make sure the code prints a greeting."
    },
    evaluator: {
      type: "structure_check",
      minLength: 30,
      passingScore: 4,
      requiredPatterns: [
        {
          id: "stores-input",
          label: "Stores `input()` in a variable",
          pattern: "[a-zA-Z_][a-zA-Z0-9_]*\\s*=\\s*input\\(",
          feedbackWhenMissing: "Store the result of `input()` in a variable on the first line."
        },
        {
          id: "uses-print",
          label: "Prints a reply",
          pattern: "print\\(",
          feedbackWhenMissing: "Add a `print()` line for the greeting."
        },
        {
          id: "uses-name-variable",
          label: "Uses the stored variable in the greeting",
          pattern: "print\\([^\\n]*name",
          flags: "i",
          feedbackWhenMissing: "The print line should use the stored variable instead of fixed text only."
        },
        {
          id: "asks-question",
          label: "Includes a simple question in `input()`",
          pattern: "input\\(['\"].+[?].*['\"]\\)",
          feedbackWhenMissing: "Let the `input()` call ask one clear question."
        }
      ],
      orderedPatternIds: ["stores-input", "uses-print"]
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
    playground: {
      title: "Run the repaired conditional",
      guidance: "After fixing the conditional, run it here and change `age` to see which branch prints.",
      starterCode: "age = 18\n\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
      emptyOutputHint: "Try changing `age` to a smaller number and running the code again."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Adult"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
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
  },
  {
    slug: "score-band-order",
    title: "Fix the score band order",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "conditionals",
    lessonSlug: "elif-and-else-paths",
    order: 2,
    duration: "8 min",
    summary: "Repair a branching program by putting the most specific check first.",
    prompt:
      "This score program should print `High` for 90 or more and `Medium` for 60 or more. Reorder the conditional so Python checks the branches in a sensible way.",
    responseLabel: "Your reordered conditional",
    responsePlaceholder:
      "score = 95\n\nif score >= 90:\n    print('High')\nelif score >= 60:\n    print('Medium')\nelse:\n    print('Low')",
    instructions: [
      "Keep the same three outputs: `High`, `Medium`, and `Low`.",
      "Place the highest threshold first.",
      "Keep the branch structure readable."
    ],
    hints: [
      "If Python matches the first true branch, it stops there.",
      "A lower threshold first can hide a higher one.",
      "The order should be `if`, then `elif`, then `else`."
    ],
    starterCode: "score = 95\n\nif score >= 60:\n    print('Medium')\nelif score >= 90:\n    print('High')\nelse:\n    print('Low')",
    successCriteria: [
      "The `>= 90` branch comes before the `>= 60` branch.",
      "All three outputs remain.",
      "The structure still uses `if`, `elif`, and `else`."
    ],
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["High"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 50,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "high-check",
          label: "Checks `score >= 90`",
          pattern: "score\\s*>=\\s*90",
          feedbackWhenMissing: "The solution should still check whether the score is at least 90."
        },
        {
          id: "medium-check",
          label: "Checks `score >= 60`",
          pattern: "score\\s*>=\\s*60",
          feedbackWhenMissing: "Keep the medium branch that checks whether the score is at least 60."
        },
        {
          id: "uses-elif",
          label: "Uses `elif` for the second branch",
          pattern: "elif\\s+score\\s*>=\\s*60",
          feedbackWhenMissing: "The second branch should be an `elif`, not a separate `if`."
        },
        {
          id: "high-output",
          label: "Keeps the `High` output",
          pattern: "High",
          feedbackWhenMissing: "The `High` output should still be present."
        },
        {
          id: "low-output",
          label: "Keeps the `Low` fallback",
          pattern: "Low",
          feedbackWhenMissing: "Keep the fallback `Low` branch."
        }
      ],
      orderedPatternIds: ["high-check", "medium-check", "low-output"]
    }
  },
  {
    slug: "comparison-question-check",
    title: "Explain what the comparison is asking",
    exerciseType: "concept_check",
    responseFormat: "text",
    moduleSlug: "conditionals",
    lessonSlug: "comparison-questions-in-python",
    order: 3,
    duration: "7 min",
    summary: "Turn comparison symbols into plain words so the logic becomes easier to understand.",
    prompt:
      "In 2 or 3 short sentences, explain what `score >= 70` asks and why that matters inside an `if` statement.",
    responseLabel: "Your explanation",
    responsePlaceholder:
      "`score >= 70` asks whether score is at least 70. The answer becomes true or false, and the `if` statement uses that answer to decide whether to run the branch.",
    instructions: [
      "Say what question the comparison asks.",
      "Mention `True` or `False` in simple language.",
      "Connect that answer to what the `if` statement does next."
    ],
    hints: [
      "Read `>=` as 'greater than or equal to'.",
      "A comparison produces a yes-or-no style answer.",
      "The `if` statement uses that answer to choose a branch."
    ],
    starterCode: "if score >= 70:\n    print('Pass')",
    successCriteria: [
      "Explains the meaning of `>= 70`.",
      "Mentions that the comparison becomes `True` or `False`.",
      "Connects that result to the `if` branch running or not running."
    ],
    evaluator: {
      type: "ordered_concepts",
      minLength: 40,
      passingScore: 4,
      requireOrder: true,
      concepts: [
        {
          id: "comparison-question",
          label: "Explains the question the comparison asks",
          keywords: ["at least", "greater than or equal", "70"],
          feedbackWhenMissing: "Explain the comparison in plain words, such as 'at least 70'."
        },
        {
          id: "true-or-false",
          label: "Mentions `True` or `False`",
          keywords: ["true", "false"],
          feedbackWhenMissing: "Mention that the comparison becomes `True` or `False`."
        },
        {
          id: "if-branch",
          label: "Connects the answer to the `if` decision",
          keywords: ["if", "branch", "run", "decide"],
          feedbackWhenMissing: "Add how the `if` statement uses that answer to choose whether to run the branch."
        }
      ]
    }
  },
  {
    slug: "read-cheer-loop-output",
    title: "Read the repeated cheer output",
    exerciseType: "output_check",
    responseFormat: "text",
    moduleSlug: "loops",
    lessonSlug: "why-loops-help",
    order: 1,
    duration: "6 min",
    summary: "Practice reading a simple loop by predicting the exact repeated output.",
    prompt:
      "Look at the loop below. Write the output exactly as Python would print it, one line per output line.",
    responseLabel: "Expected output",
    responsePlaceholder: "Go!\nGo!\nGo!",
    instructions: [
      "Read the loop header first.",
      "Notice how many times the loop repeats.",
      "Write only the printed output, not the code itself."
    ],
    hints: [
      "`range(3)` means the loop body runs three times.",
      "The printed text is the same on each pass.",
      "Your answer should have three lines."
    ],
    starterCode: "for _ in range(3):\n    print('Go!')",
    successCriteria: [
      "The answer shows three output lines.",
      "Each line contains the same printed word.",
      "Only the output text is included."
    ],
    evaluator: {
      type: "exact_answer",
      minLength: 8,
      normalizeWhitespace: true,
      ignoreCase: false,
      acceptableAnswers: ["Go!\nGo!\nGo!", "Go!\r\nGo!\r\nGo!"]
    }
  },
  {
    slug: "build-counting-loop",
    title: "Build a counting loop",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "loops",
    lessonSlug: "for-loops-with-range",
    order: 2,
    duration: "8 min",
    summary: "Write a small `for` loop that prints a calm counting pattern from 1 to 3.",
    prompt:
      "Write a `for` loop that prints the numbers 1, 2, and 3, one number per line. Keep the code short and readable.",
    responseLabel: "Your counting loop",
    responsePlaceholder:
      "for number in range(1, 4):\n    print(number)",
    instructions: [
      "Use a loop variable such as `number`.",
      "Choose a `range()` that starts at 1 and stops after 3.",
      "Print the loop variable inside the loop body."
    ],
    hints: [
      "A good starting shape is `for number in range(...):`.",
      "To include 3, the end of `range()` needs to go one higher.",
      "The `print()` line should be indented under the loop."
    ],
    starterCode: "for number in range(1, 4):\n    print(number)",
    successCriteria: [
      "Uses a `for` loop with `range()`.",
      "Prints 1, 2, and 3 in order.",
      "Keeps the `print()` line inside the loop."
    ],
    playground: {
      title: "Run the counting loop",
      guidance: "Run the code and read the printed sequence calmly. Then change the range to see how the output pattern changes.",
      starterCode: "for number in range(1, 4):\n    print(number)",
      emptyOutputHint: "A correct answer should print one number on each line."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["1\n2\n3"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 28,
      passingScore: 4,
      requiredPatterns: [
        {
          id: "uses-for-loop",
          label: "Uses a `for` loop",
          pattern: "for\\s+[a-zA-Z_][a-zA-Z0-9_]*\\s+in\\s+range\\(",
          feedbackWhenMissing: "Start with a `for` loop that uses `range()`."
        },
        {
          id: "counts-one-to-three",
          label: "Uses a range that reaches 1, 2, and 3",
          pattern: "range\\(\\s*1\\s*,\\s*4\\s*\\)",
          feedbackWhenMissing: "Use `range(1, 4)` so the loop prints 1, 2, and 3."
        },
        {
          id: "prints-loop-variable",
          label: "Prints the loop variable",
          pattern: "print\\(\\s*[a-zA-Z_][a-zA-Z0-9_]*\\s*\\)",
          feedbackWhenMissing: "Print the loop variable inside the loop body."
        }
      ],
      orderedPatternIds: ["uses-for-loop", "counts-one-to-three", "prints-loop-variable"]
    }
  },
  {
    slug: "fix-step-loop",
    title: "Fix the step loop",
    exerciseType: "bug_fix",
    responseFormat: "code",
    moduleSlug: "loops",
    lessonSlug: "reading-loop-output-calmly",
    order: 3,
    duration: "8 min",
    summary: "Repair a simple loop so the repeated lines and the final line appear in the right pattern.",
    prompt:
      "This program should print `Step 1`, `Step 2`, `Step 3`, and then `Done!` one time after the loop ends. Fix the structure without changing the goal.",
    responseLabel: "Your corrected loop",
    responsePlaceholder:
      "for step in range(1, 4):\n    print('Step', step)\nprint('Done!')",
    instructions: [
      "Keep the loop counting from 1 to 3.",
      "Print the step line inside the loop.",
      "Move the final `Done!` line so it runs after the loop finishes."
    ],
    hints: [
      "The `Done!` line should not be indented under the loop.",
      "A small indentation change can fix the whole pattern.",
      "Run the code and compare the printed lines with the expected sequence."
    ],
    starterCode: "for step in range(1, 4):\n    print('Step', step)\n    print('Done!')",
    successCriteria: [
      "The loop prints three step lines.",
      "The final line prints only once after the loop.",
      "The indentation shows clearly what repeats and what does not."
    ],
    playground: {
      title: "Run the repaired loop",
      guidance: "Run the code after fixing the indentation. The output should show the repeated step lines first and the final line once at the end.",
      starterCode: "for step in range(1, 4):\n    print('Step', step)\nprint('Done!')",
      emptyOutputHint: "The output should end with one `Done!` line after the step lines."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Step 1\nStep 2\nStep 3\nDone!"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 40,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "step-loop",
          label: "Keeps the counting loop",
          pattern: "for\\s+step\\s+in\\s+range\\(\\s*1\\s*,\\s*4\\s*\\)\\s*:",
          feedbackWhenMissing: "Keep the loop that counts `step` from 1 to 3."
        },
        {
          id: "prints-step",
          label: "Prints each step inside the loop",
          pattern: "print\\(\\s*['\"]Step['\"]\\s*,\\s*step\\s*\\)",
          feedbackWhenMissing: "Inside the loop, print the current step number."
        },
        {
          id: "prints-done",
          label: "Keeps the final `Done!` line",
          pattern: "print\\(\\s*['\"]Done!['\"]\\s*\\)",
          feedbackWhenMissing: "Keep the final `Done!` message after the loop."
        }
      ],
      orderedPatternIds: ["step-loop", "prints-step", "prints-done"]
    }
  },
  {
    slug: "read-greet-function-output",
    title: "Read the function output",
    exerciseType: "output_check",
    responseFormat: "text",
    moduleSlug: "functions",
    lessonSlug: "why-functions-help",
    order: 1,
    duration: "6 min",
    summary: "Practice reading a small function definition and two function calls without getting lost.",
    prompt:
      "Look at the code below. Write the exact output Python will print when the function is called two times.",
    responseLabel: "Expected output",
    responsePlaceholder: "Nice work!\nNice work!",
    instructions: [
      "Read the function body first.",
      "Then count how many times the function is called.",
      "Write only the printed output, one line per line."
    ],
    hints: [
      "The function body prints one line.",
      "The function is called twice.",
      "The output should repeat the same message two times."
    ],
    starterCode: "def cheer():\n    print('Nice work!')\n\ncheer()\ncheer()",
    successCriteria: [
      "The output shows two lines.",
      "Both lines match the function body output.",
      "Only the output text is included."
    ],
    evaluator: {
      type: "exact_answer",
      minLength: 12,
      normalizeWhitespace: true,
      ignoreCase: false,
      acceptableAnswers: ["Nice work!\nNice work!", "Nice work!\r\nNice work!"]
    }
  },
  {
    slug: "build-cheer-function",
    title: "Build a small cheer function",
    exerciseType: "guided_code",
    responseFormat: "code",
    moduleSlug: "functions",
    lessonSlug: "defining-and-calling-functions",
    order: 2,
    duration: "8 min",
    summary: "Define one simple function and call it so the program prints a helpful message twice.",
    prompt:
      "Write a function called `cheer()` that prints `Keep practicing!`, then call it two times below the function definition.",
    responseLabel: "Your function",
    responsePlaceholder:
      "def cheer():\n    print('Keep practicing!')\n\ncheer()\ncheer()",
    instructions: [
      "Use `def cheer():` to define the function.",
      "Put the `print()` line inside the function body.",
      "Call `cheer()` two times after the definition."
    ],
    hints: [
      "The definition line needs parentheses and a colon.",
      "The function body should be indented.",
      "The calls should appear after the function is defined."
    ],
    starterCode: "def cheer():\n    print('Keep practicing!')\n\ncheer()\ncheer()",
    successCriteria: [
      "Defines `cheer()` correctly.",
      "Prints the expected message.",
      "Calls the function two times."
    ],
    playground: {
      title: "Run the cheer function",
      guidance: "Run the function, then change the message or add another call. This helps make reuse feel concrete.",
      starterCode: "def cheer():\n    print('Keep practicing!')\n\ncheer()\ncheer()",
      emptyOutputHint: "A correct answer should print the message each time the function is called."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Keep practicing!\nKeep practicing!"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 45,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "defines-cheer",
          label: "Defines `cheer()`",
          pattern: "def\\s+cheer\\s*\\(\\s*\\)\\s*:",
          feedbackWhenMissing: "Start by defining the function as `def cheer():`."
        },
        {
          id: "prints-message",
          label: "Prints the cheer message",
          pattern: "print\\(\\s*['\"]Keep practicing!['\"]\\s*\\)",
          feedbackWhenMissing: "Inside the function, print `Keep practicing!`."
        },
        {
          id: "calls-cheer-twice",
          label: "Calls `cheer()` two times",
          pattern: "cheer\\s*\\(\\s*\\)",
          feedbackWhenMissing: "Remember to call the function after defining it."
        }
      ],
      orderedPatternIds: ["defines-cheer", "prints-message", "calls-cheer-twice"]
    }
  },
  {
    slug: "fix-name-greeter-function",
    title: "Fix the name greeter function",
    exerciseType: "bug_fix",
    responseFormat: "code",
    moduleSlug: "functions",
    lessonSlug: "simple-parameters-and-function-mistakes",
    order: 3,
    duration: "9 min",
    summary: "Repair a beginner function so it accepts one name and prints a personal greeting correctly.",
    prompt:
      "This function should greet one person by name. Fix the function definition and the call so the program prints `Hello, Maya`.",
    responseLabel: "Your corrected function",
    responsePlaceholder:
      "def greet(name):\n    print('Hello, ' + name)\n\ngreet('Maya')",
    instructions: [
      "Check the `def` line for punctuation.",
      "Keep the print line inside the function body.",
      "Call the function with one name in quotes."
    ],
    hints: [
      "The function definition needs a colon.",
      "Calling the function requires parentheses.",
      "The call should provide the name the function expects."
    ],
    starterCode: "def greet(name)\n    print('Hello, ' + name)\n\ngreet",
    successCriteria: [
      "Defines the function with one parameter.",
      "Prints the greeting using that parameter.",
      "Calls the function so it prints `Hello, Maya`."
    ],
    playground: {
      title: "Run the repaired greeter",
      guidance: "Fix the function, then run it. Try changing the name in the call to see how one function can greet different people.",
      starterCode: "def greet(name):\n    print('Hello, ' + name)\n\ngreet('Maya')",
      emptyOutputHint: "A correct solution should print one greeting using the name from the function call."
    },
    executionValidation: {
      requireRunBeforeCheck: true,
      requireRunBeforeComplete: true,
      expectedOutput: ["Hello, Maya"],
      normalizeOutputWhitespace: true,
      ignoreOutputCase: false,
      requireNoRuntimeError: true
    },
    evaluator: {
      type: "structure_check",
      minLength: 48,
      passingScore: 5,
      requiredPatterns: [
        {
          id: "defines-greet-with-parameter",
          label: "Defines `greet(name)`",
          pattern: "def\\s+greet\\s*\\(\\s*name\\s*\\)\\s*:",
          feedbackWhenMissing: "Define the function as `def greet(name):`."
        },
        {
          id: "uses-name-in-print",
          label: "Uses the parameter inside the greeting",
          pattern: "print\\([^\\n]*name[^\\n]*\\)",
          feedbackWhenMissing: "Use the `name` parameter inside the `print()` line."
        },
        {
          id: "calls-greet-with-maya",
          label: "Calls `greet('Maya')`",
          pattern: "greet\\(\\s*['\"]Maya['\"]\\s*\\)",
          feedbackWhenMissing: "Call the function with `'Maya'` so the program prints the expected greeting."
        }
      ],
      orderedPatternIds: ["defines-greet-with-parameter", "uses-name-in-print", "calls-greet-with-maya"]
    }
  }
];
