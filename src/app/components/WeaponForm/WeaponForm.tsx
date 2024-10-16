"use client";

import { useState } from "react";
import Button from "../Button/Button";
import s from "./WeaponForm.module.css";
import { addWeapon } from "@/app/admin/_actions/weaponsActions";
import { useFormState, useFormStatus } from "react-dom";
import { font } from "@/app/utils/font";

export function WeaponForm() {
  const { pending } = useFormStatus();

  const [error, action] = useFormState(addWeapon, {});

  const [price, setPrice] = useState<number>(0);

  const changePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === "" || inputValue === "0" || isNaN(Number(inputValue))) {
      setPrice(0);
    } else {
      setPrice(Number(inputValue));
    }
  };

  return (
    <form className={s.form} action={action}>
      <div className={s.inputs}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className={`${s.input} ${font.className}`}
        />
        {error.name && <div className={s.error}>{error.name}</div>}

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          required
          value={price}
          onChange={changePrice}
          className={`${s.input} ${font.className}`}
        />
        {error.price && <div className={s.error}>{error.price}</div>}

        <label htmlFor="file">Image:</label>
        <input type="file" id="image" name="image" />
        {error.image && <div className={s.error}>{error.image}</div>}
      </div>
      <Button type="submit" disabled={pending} onClick={() => {}}>
        {pending ? "Saving..." : "Save"}
      </Button>
    </form>
  );
}
