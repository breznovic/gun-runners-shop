import Nav, { NavLink } from "../components/Nav/Nav";
import s from "./page.module.css";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/admin/weapons">Weapons</NavLink>
        <NavLink href="/admin/customers">Customers</NavLink>
        <NavLink href="/admin/orders">Sales</NavLink>
      </Nav>
      <div className={s.container}>{children}</div>
    </>
  );
}
