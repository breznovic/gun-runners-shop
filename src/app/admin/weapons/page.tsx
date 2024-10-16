"use client";

import Button from "@/app/components/Button/Button";
import admin from "@/app/admin/admin-styles.module.css";
import Link from "next/link";
import Table from "@/app/components/Table/Table";

export default function WeaponsPage() {
  return (
    <div className={admin.container}>
      <div className={admin.header}>
        <div>Weapons</div>
        <Button onClick={() => {}}>
          <Link href="/admin/weapons/new" className={admin.link}>
            Add new weapon
          </Link>
        </Button>
      </div>
      <Table />
    </div>
  );
}
