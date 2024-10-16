"use server";

import prisma from "@/db/db";
import { z } from "zod";
import fs from "fs/promises";
import { notFound, redirect } from "next/navigation";

const fileSchema = z.instanceof(File, {
  message: "File is required",
});

const addWeaponSchema = z.object({
  name: z.string().min(1),
  price: z.coerce.number().min(1),
  image: fileSchema.refine((file) => file.size > 0, "Required"),
});

export async function fetchWeapons() {
  const weapons = await prisma.weapon.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      orders: true,
      _count: {
        select: {
          orders: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  return weapons;
}

export async function addWeapon(prevState: unknown, formData: FormData) {
  const result = addWeaponSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!result.success) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  await fs.mkdir("public/weapons", { recursive: true });
  const filePath = `/weapons/${crypto.randomUUID()}-${data.image.name}`;
  await fs.writeFile(
    `public${filePath}`,
    Buffer.from(await data.image.arrayBuffer())
  );

  await prisma.weapon.create({
    data: {
      name: data.name,
      price: data.price,
      image: filePath,
    },
  });

  redirect("/admin/weapons");
}

export async function deleteWeapon(id: number) {
  const weapon = await prisma.weapon.delete({
    where: {
      id,
    },
  });

  if (weapon === null) {
    return notFound();
  }

  await fs.unlink(`public${weapon.image}`);
}
