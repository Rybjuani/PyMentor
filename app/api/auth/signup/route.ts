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
    return NextResponse.json({ error: "El cuerpo de la solicitud no es válido." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim().toLowerCase();
  const password = body.password?.trim();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Hace falta nombre, correo y contraseña." }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: "La contraseña debe tener al menos 8 caracteres." }, { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    return NextResponse.json({ error: "Ya existe una cuenta con este correo." }, { status: 409 });
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
    description: "Creaste tu cuenta de PyMentor y abriste tu ruta de Python."
  });

  return NextResponse.json({ ok: true });
}
