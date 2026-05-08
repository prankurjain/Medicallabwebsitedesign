import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Lock, User } from 'lucide-react';

export function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (email && password) {
      navigate('/admin');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-6"
      style={{ backgroundColor: 'var(--dark-navy)' }}
    >
      <div
        className="w-full max-w-md bg-white rounded-2xl p-12 space-y-6"
        style={{
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        }}
      >
        {/* Logo */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--primary-blue)' }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L4 7V17L12 22L20 17V7L12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22V12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <h1
            style={{
              fontSize: '32px',
              fontFamily: 'var(--font-sans)',
              fontWeight: '700',
              color: 'var(--dark-navy)',
            }}
          >
            Admin Portal
          </h1>
          <p
            className="mt-2"
            style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
            }}
          >
            Login to access the admin dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              style={{
                fontSize: '13px',
                fontFamily: 'var(--font-sans)',
                fontWeight: '500',
                color: 'var(--dark-navy)',
                display: 'block',
                marginBottom: '8px',
              }}
            >
              Email Address
            </label>
            <div className="relative">
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2"
                size={18}
                style={{ color: 'var(--text-secondary)' }}
              />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@pathkindlab.com"
                className="w-full pl-12 pr-4 outline-none transition-all duration-200"
                style={{
                  height: '56px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  fontSize: '15px',
                  color: 'var(--dark-navy)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.border = '2px solid var(--primary-blue)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26,111,191,0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.border = '1px solid var(--border-color)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              style={{
                fontSize: '13px',
                fontFamily: 'var(--font-sans)',
                fontWeight: '500',
                color: 'var(--dark-navy)',
                display: 'block',
                marginBottom: '8px',
              }}
            >
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2"
                size={18}
                style={{ color: 'var(--text-secondary)' }}
              />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-12 pr-4 outline-none transition-all duration-200"
                style={{
                  height: '56px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  fontSize: '15px',
                  color: 'var(--dark-navy)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.border = '2px solid var(--primary-blue)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(26,111,191,0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.border = '1px solid var(--border-color)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded"
                style={{
                  accentColor: 'var(--primary-blue)',
                }}
              />
              <span
                style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                }}
              >
                Remember me
              </span>
            </label>
            <a
              href="#"
              className="transition-colors duration-200"
              style={{
                fontSize: '14px',
                color: 'var(--primary-blue)',
                fontWeight: '500',
                textDecoration: 'none',
              }}
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full transition-all duration-200 hover:opacity-90"
            style={{
              height: '52px',
              backgroundColor: 'var(--primary-blue)',
              color: 'white',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '700',
            }}
          >
            Login to Dashboard
          </button>
        </form>

        <div className="text-center pt-4">
          <a
            href="/"
            className="transition-colors duration-200"
            style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
            }}
          >
            ← Back to main site
          </a>
        </div>
      </div>
    </div>
  );
}
