import Link from 'next/link';
import { menuItems } from '../../../data';

export default function MenuPage() {
  return (
    <div>
      <h1>Menu</h1>
      {menuItems.map((item) => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
          <Link href={`/menu/${item.id}`}> View Details </Link>
        </div>
      ))}
    </div>
  );
}