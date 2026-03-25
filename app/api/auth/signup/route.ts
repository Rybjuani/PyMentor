import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { recordActivity } from "@/lib/activity";
import { prisma } from "@/lib/db";

interface SignupRequestBody {
  name?: string;
  email?: string;
  password?: string;
}

export async function POST(request: Request) {
  let body: SignupRequestBody;

  try {
    body = (await request.json()) as SignupRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim().toLowerCase();
  const password = body.password?.trim();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Name, email, and password are required." }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
  }

  const passwordHash = await hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash
    }
  });

  await recordActivity({
    userId: user.id,
    type: "account_created",
    description: "Created your PyMentor account and opened your Python roadmap."
  });

  return NextResponse.json({ ok: true });
}
