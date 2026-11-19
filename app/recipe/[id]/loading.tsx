import Link from "next/link";

export default function RecipeLoading() {
  return (
    <main className="page-shell detail-shell" aria-busy="true" aria-live="polite">
      <Link href="/" className="back-link">← All recipes</Link>
      <div className="detail-skeleton">
        <div className="skeleton-art detail-skeleton-art" />
        <div className="skeleton-line" />
        <p>Loading recipe…</p>
      </div>
    </main>
  );
}
