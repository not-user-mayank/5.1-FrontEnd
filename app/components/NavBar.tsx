import Link from "next/link";

export default function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="NextBites home">
          <span aria-hidden="true">🍳</span> NextBites
        </Link>
        <span className="nav-note">Good food, made simple</span>
      </nav>
    </header>
  );
}
