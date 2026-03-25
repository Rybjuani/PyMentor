# PyMentor

PyMentor is a production-oriented MVP foundation for a beginner-safe Python learning platform with an integrated AI mentor.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- NextAuth credentials auth
- Prisma + PostgreSQL-ready schema
- File-based course content + user-backed progress
- Groq-powered mentor API

## Run locally

```bash
npm install
npm run prisma:generate
npm run dev
```

## Environment

Create `.env.local` with:

```bash
GROQ_API_KEY=your_key_here
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000
```

## Database

Apply the included Prisma migration with:

```bash
npm run prisma:migrate
```
