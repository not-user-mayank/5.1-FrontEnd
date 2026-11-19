import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell status-page" role="alert">
      <p className="eyebrow">Recipe not found</p>
      <h1>This page isn’t on the menu.</h1>
      <p className="intro-copy">
        That recipe may have moved. Head back to the kitchen and choose another.
      </p>
      <Link className="action-button" href="/">
        Browse all recipes
      </Link>
    </main>
  );
}
