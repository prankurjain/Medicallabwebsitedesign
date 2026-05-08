import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div
          className="mb-6"
          style={{
            fontSize: '120px',
            fontWeight: '700',
            color: 'var(--primary-blue)',
            lineHeight: '1',
            fontFamily: 'var(--font-display)',
          }}
        >
          404
        </div>
        <h1
          className="mb-4"
          style={{
            fontSize: '32px',
            fontWeight: '700',
            color: 'var(--dark-navy)',
          }}
        >
          Page Not Found
        </h1>
        <p
          className="mb-8"
          style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
          }}
        >
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 transition-all duration-200 hover:opacity-90"
          style={{
            height: '48px',
            borderRadius: '12px',
            backgroundColor: 'var(--primary-blue)',
            color: 'white',
            fontSize: '16px',
            fontWeight: '600',
          }}
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
