"use client";

import { DeleteWeapon } from "@/app/components/DeleteWeapon/DeleteWeapon";
import React, { useState, useEffect } from "react";
import s from "./Table.module.css";
import { fetchWeapons } from "@/app/admin/_actions/weaponsActions";

function Table() {
  const [weapons, setWeapons] = useState<any[]>([]);

  useEffect(() => {
    fetchWeapons().then((data) => setWeapons(data));
  }, []);

  if (weapons.length === 0) {
    return <div className={s.notFound}>No weapons found</div>;
  }

  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Orders</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {weapons.map((w) => (
          <React.Fragment key={w.id}>
            <tr>
              <td>{w.name}</td>
              <td>{w.price}</td>
              <td>{w._count.orders}</td>
              <td>
                <DeleteWeapon id={w.id} disabled={w._count.orders > 0} />
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
