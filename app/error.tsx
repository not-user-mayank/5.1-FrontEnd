"use client";

export default function ErrorPage({
  error,
  retry,
  reset,
}: {
  error: Error & { digest?: string };
  retry?: () => void;
  reset?: () => void;
}) {
  const recover = retry ?? reset;

  return (
    <main className="page-shell status-page" role="alert">
      <p className="eyebrow">A little kitchen mishap</p>
      <h1>Something went wrong.</h1>
      <p className="intro-copy">
        We couldn’t load this page just now. Please try again.
      </p>
      <button className="action-button" onClick={() => recover?.()}>
        Try again
      </button>
      {error.digest ? <p className="error-reference">Reference: {error.digest}</p> : null}
    </main>
  );
}
