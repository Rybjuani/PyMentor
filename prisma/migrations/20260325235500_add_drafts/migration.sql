CREATE TYPE "DraftScope" AS ENUM ('lesson', 'exercise');

CREATE TABLE "Draft" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "scope" "DraftScope" NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Draft_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Draft_userId_scope_slug_key" ON "Draft"("userId", "scope", "slug");
CREATE INDEX "Draft_userId_updatedAt_idx" ON "Draft"("userId", "updatedAt" DESC);

ALTER TABLE "Draft" ADD CONSTRAINT "Draft_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
