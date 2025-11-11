import { orders } from "../../../../../data";

export async function GET(request, { params }) {
  const { orderid } = await params;
  const order = orders.find((o) => o.id == orderid);
  return Response.json(order || { message: "Order Not Found" });
}

export async function PATCH(request, { params }) {
  const { orderid } = await params;
  const update = await request.json();
  let order = orders.find((o) => o.id == orderid);

  if (!order) return Response.json({ message: "Order Not Found" });

  Object.assign(order, update);
  return Response.json(order);
}
