"use client";

import { ComponentProps, ReactNode } from "react";
import s from "./Nav.module.css";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Nav = ({ children }: { children: ReactNode }) => {
  return <nav className={s.nav}>{children}</nav>;
};

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={clsx(s.link, pathname === props.href && s.linkActive)}
    />
  );
}

export default Nav;
