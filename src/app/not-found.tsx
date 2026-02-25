import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container text-center my-5">
      <h1>404 - Page Not Found</h1>
      <p className="mt-3">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="btn btn-primary mt-3">
        Go Home
      </Link>
    </div>
  );
}
