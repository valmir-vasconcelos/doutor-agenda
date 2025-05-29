"use server"; // obrigatório para indicar que este arquivo é uma server action

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { db } from "@/db";
import { clinicsTable, usersToClinicsTable } from "@/db/schema";
import { auth } from "@/lib/auth";

export const createClinicAction = async (name: string) => {
  // verifica se o usuário está autenticado
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  //////////

  // salva a clínica no banco de dados
  const [clinic] = await db.insert(clinicsTable).values({ name }).returning();
  // ou
  //const result = await db.insert(clinicsTable).values({ name }).returning();
  //const clinic = result[0];

  // faz a associação entre o usuário e a clínica
  await db.insert(usersToClinicsTable).values({
    userId: session.user.id,
    clinicId: clinic.id,
  });
  redirect("/dashboard");
};
