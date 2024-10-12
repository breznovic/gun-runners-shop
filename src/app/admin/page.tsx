import prisma from "@/db/db";
import Card from "../components/Card/Card";
import s from "./page.module.css";

async function getSalesdata() {
  const data = await prisma.order.aggregate({
    _sum: {
      price: true,
    },
    _count: true,
  });

  return {
    amount: data._sum.price || 0,
    numberOfSales: data._count || 0,
  };
}

async function getUserData() {
  const [userCount, orderData] = await Promise.all([
    prisma.user.count(),
    prisma.order.aggregate({
      _sum: {
        price: true,
      },
    }),
  ]);

  return {
    userCount,
    averageValuePerUser:
      userCount === 0 ? 0 : orderData._sum.price || 0 / userCount,
  };
}

async function getWeaponsData() {
  const data = await prisma.weapon.count();
  return data;
}
export default async function AdminPage() {
  const { amount, numberOfSales } = await getSalesdata();
  const { userCount, averageValuePerUser } = await getUserData();

  return (
    <div className={s.container}>
      <Card
        title="Sales"
        content={`Total income: ${amount} $`}
        subtitle={`Total orders: ${numberOfSales}`}
      />
      <Card
        title="Customers"
        content={`Total customers: ${userCount}`}
        subtitle={`Average order value: ${averageValuePerUser} $`}
      />
      <Card
        title="Weapons"
        content={`${await getWeaponsData()}`}
        subtitle="Amount of available weapons"
      />
    </div>
  );
}
