"use client";

import s from "./page.module.css";
import Link from "next/link";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <div className={s.container}>
      <div className={s.header}>Most popular weapons</div>
      <div className={s.weapons}></div>
      <Link href="/weapons">
        <Button onClick={() => {}}>View all weapons</Button>
      </Link>
    </div>
  );
}
