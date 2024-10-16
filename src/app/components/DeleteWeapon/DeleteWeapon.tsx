"use client";

import { SquareX } from "lucide-react";
import { useTransition } from "react";
import { deleteWeapon } from "../../admin/_actions/weaponsActions";
import { useRouter } from "next/navigation";
import { font } from "@/app/utils/font";
import s from "./DeleteWeapon.module.css";

type DeleteWeaponProps = {
  id: number;
  disabled: boolean;
};

export function DeleteWeapon({ id, disabled }: DeleteWeaponProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <div className={`${s.container} ${font.className}`}>
      <div className={s.title}>Delete weapon</div>
      <SquareX
        onClick={() =>
          startTransition(async () => {
            await deleteWeapon(id);
            router.refresh();
          })
        }
        className={`${s.button} ${disabled || isPending ? s.disabled : ""}`}
      />
    </div>
  );
}
