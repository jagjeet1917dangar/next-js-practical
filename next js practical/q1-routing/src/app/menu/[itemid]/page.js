import { menuItems } from "../../../../data";

export default async function ItemDetail({ params }) {
  // In the App Router params can be a Promise. Await it before accessing.
  const p = await params;
  const id = Number(p.itemid);
  const item = menuItems.find((m) => m.id === id);

  if (!item) return <h2>Item Not Found</h2>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: ₹{item.price}</p>
      <p>{item.desc}</p>
    </div>
  );
}
