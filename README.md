# PyMentor

PyMentor is a production-oriented MVP foundation for a beginner-safe Python learning platform with an integrated AI mentor.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Mock data + reusable components
- Groq-ready API route scaffold

## Run locally

```bash
npm install
npm run dev
```

## Environment

Create `.env.local` with:

```bash
GROQ_API_KEY=your_key_here
```

The mentor route currently returns placeholder responses until real Groq integration is wired in.
