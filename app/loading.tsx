export default function Loading() {
  return (
    <main className="page-shell" aria-busy="true" aria-live="polite">
      <p className="eyebrow">One moment</p>
      <h1>Getting recipes ready…</h1>
      <div className="grid loading-grid" aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => (
          <div className="card-skeleton" key={index}>
            <div className="skeleton-art" />
            <div className="skeleton-line" />
            <div className="skeleton-line skeleton-line-short" />
          </div>
        ))}
      </div>
    </main>
  );
}
