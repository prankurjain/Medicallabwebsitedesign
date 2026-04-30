import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-white shadow-[0_2px_16px_rgba(13,43,78,0.08)]'
            : 'bg-transparent'
        }`}
        style={{ height: '70px' }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: isScrolled
                  ? 'var(--primary-blue)'
                  : 'rgba(255,255,255,0.2)',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L4 7V17L12 22L20 17V7L12 2Z"
                  stroke={isScrolled ? 'white' : 'white'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22V12"
                  stroke={isScrolled ? 'white' : 'white'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span
              className="font-bold text-lg"
              style={{
                color: isScrolled ? 'var(--dark-navy)' : 'white',
                fontFamily: 'var(--font-sans)',
              }}
            >
              PATHKIND LAB
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-9">
            {['Tests', 'Packages', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors duration-200"
                style={{
                  color: isScrolled ? 'var(--dark-navy)' : 'white',
                  fontSize: '15px',
                  fontWeight: '400',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--teal-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isScrolled
                    ? 'var(--dark-navy)'
                    : 'white';
                }}
              >
                {item}
              </a>
            ))}
            <button
              className="px-4 transition-all duration-200"
              style={{
                height: '36px',
                borderRadius: '99px',
                backgroundColor: isScrolled
                  ? 'var(--primary-blue)'
                  : 'transparent',
                border: isScrolled ? 'none' : '1px solid white',
                color: 'white',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              My Account
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              color: isScrolled ? 'var(--dark-navy)' : 'white',
            }}
          >
            <Menu size={24} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className="fixed top-0 right-0 bottom-0 w-64 bg-white z-50 p-6 flex flex-col"
            style={{
              animation: 'slideIn 200ms ease-out',
            }}
          >
            <button
              className="self-end mb-8"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ color: 'var(--dark-navy)' }}
            >
              <X size={24} />
            </button>
            {['Tests', 'Packages', 'Contact', 'My Account'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-4 border-b"
                style={{
                  color: 'var(--dark-navy)',
                  fontSize: '15px',
                  borderColor: 'var(--border-color)',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
