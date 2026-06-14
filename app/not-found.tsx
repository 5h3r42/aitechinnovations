import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-pad">
      <div className="container section-heading center">
        <h1>Page not found</h1>
        <p>The page you requested does not exist or has moved.</p>
        <Link className="button primary" href="/">Return to the homepage</Link>
      </div>
    </main>
  );
}
