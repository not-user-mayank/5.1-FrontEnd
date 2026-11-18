import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="border-b bg-white px-6 py-4">
      <Link href="/" className="text-xl font-bold text-orange-600">
        🍳 NextBites
      </Link>
    </nav>
  );
}