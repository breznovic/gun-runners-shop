import { Radiation } from "lucide-react";
import s from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={s.container}>
      <Radiation className={s.loader} size={50} />
    </div>
  );
}
