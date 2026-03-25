import { DraftScope } from "@prisma/client";
import { prisma } from "@/lib/db";

export async function getDraftForUser({
  userId,
  scope,
  slug
}: {
  userId: string;
  scope: DraftScope;
  slug: string;
}) {
  return prisma.draft.findUnique({
    where: {
      userId_scope_slug: {
        userId,
        scope,
        slug
      }
    }
  });
}

export async function saveDraftForUser({
  userId,
  scope,
  slug,
  content
}: {
  userId: string;
  scope: DraftScope;
  slug: string;
  content: string;
}) {
  return prisma.draft.upsert({
    where: {
      userId_scope_slug: {
        userId,
        scope,
        slug
      }
    },
    create: {
      userId,
      scope,
      slug,
      content
    },
    update: {
      content
    }
  });
}

export async function deleteDraftForUser({
  userId,
  scope,
  slug
}: {
  userId: string;
  scope: DraftScope;
  slug: string;
}) {
  return prisma.draft.deleteMany({
    where: {
      userId,
      scope,
      slug
    }
  });
}
