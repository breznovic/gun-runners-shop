import { WeaponForm } from "@/app/components/WeaponForm/WeaponForm";
import admin from "@/app/admin/admin-styles.module.css";

export default function NewWeaponPage() {
  return (
    <div className={admin.container}>
      <div className={admin.header}>Add new weapon</div>
      <WeaponForm />
    </div>
  );
}
