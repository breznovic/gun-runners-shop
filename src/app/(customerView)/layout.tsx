import s from "./page.module.css";
import Nav, { NavLink } from "../components/Nav/Nav";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/weapons">Weapons</NavLink>
      </Nav>
      <div className={s.container}>{children}</div>
    </>
  );
}
