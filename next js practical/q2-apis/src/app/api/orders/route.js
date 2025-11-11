import { orders } from "../../../../data";

export async function GET() {
  return Response.json(orders);
}

export async function POST(request) {
  const data = await request.json();
  const newOrder = { id: orders.length + 1, ...data };
  orders.push(newOrder);
  return Response.json(newOrder);
}
