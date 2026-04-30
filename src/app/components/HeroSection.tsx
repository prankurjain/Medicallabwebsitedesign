export function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundColor: 'var(--dark-navy)',
        backgroundImage:
          'radial-gradient(circle at 20% 50%, rgba(0, 191, 165, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0, 191, 165, 0.03) 0%, transparent 50%)',
      }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 8.66v17.32L30 34.64 15 25.98V8.66L30 0z' fill='%2300BFA5' fill-opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fadeInUp">
            {/* Small Label */}
            <div className="flex items-center gap-3 justify-center lg:justify-start opacity-0" style={{ animation: 'fadeUp 600ms ease-out 0ms forwards' }}>
              <div
                className="w-8 h-0.5"
                style={{ backgroundColor: 'var(--teal-accent)' }}
              />
              <span
                className="uppercase tracking-widest"
                style={{
                  color: 'var(--teal-accent)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.1em',
                }}
              >
                Trusted Lab in Your City
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="opacity-0"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 6vw, 72px)',
                fontWeight: '700',
                color: 'white',
                lineHeight: '1.1',
                animation: 'fadeUp 600ms ease-out 100ms forwards',
              }}
            >
              Your Health,
              <br />
              Clear & Simple.
            </h1>

            {/* Subheading */}
            <p
              className="max-w-lg mx-auto lg:mx-0 opacity-0"
              style={{
                fontSize: '18px',
                color: 'var(--soft-blue-white)',
                lineHeight: '1.6',
                animation: 'fadeUp 600ms ease-out 200ms forwards',
              }}
            >
              NABL certified diagnostic lab offering accurate results, home
              collection, and same-day reports at transparent prices.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0" style={{ animation: 'fadeUp 600ms ease-out 300ms forwards' }}>
              <button
                className="px-8 transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,191,165,0.3)] hover:scale-105"
                style={{
                  height: '48px',
                  borderRadius: '20px',
                  backgroundColor: 'var(--teal-accent)',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '600',
                }}
              >
                View Tests & Prices
              </button>
              <button
                className="px-8 transition-all duration-200 hover:bg-white/10"
                style={{
                  height: '48px',
                  borderRadius: '20px',
                  backgroundColor: 'transparent',
                  border: '1px solid white',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '600',
                }}
              >
                Book on WhatsApp
              </button>
            </div>

            {/* Trust Indicators */}
            <div
              className="flex flex-wrap items-center gap-3 justify-center lg:justify-start opacity-0"
              style={{
                fontSize: '13px',
                color: 'var(--soft-blue-white)',
                animation: 'fadeUp 600ms ease-out 400ms forwards',
              }}
            >
              <span>NABL Certified</span>
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--teal-accent)',
                }}
              />
              <span>Same-Day Reports</span>
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--teal-accent)',
                }}
              />
              <span>Home Collection Available</span>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Main Glowing Circle */}
            <div
              className="relative w-96 h-96 rounded-full flex items-center justify-center floatingElement"
              style={{
                backgroundColor: 'rgba(0, 191, 165, 0.15)',
                boxShadow: '0 0 120px rgba(0, 191, 165, 0.2)',
              }}
            >
              {/* Center Icon */}
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 30C40 24.4772 44.4772 20 50 20H70C75.5228 20 80 24.4772 80 30V100H40V30Z"
                  stroke="var(--teal-accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="12"
                  stroke="var(--teal-accent)"
                  strokeWidth="3"
                />
                <path
                  d="M40 100C40 105.523 44.4772 110 50 110H70C75.5228 110 80 105.523 80 110"
                  stroke="var(--teal-accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              {/* Floating Elements */}
              <div
                className="absolute floatingElement2"
                style={{ top: '10%', left: '-10%' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M16 6L20 12H12L16 6Z M16 26L20 20H12L16 26Z"
                      fill="var(--teal-accent)"
                    />
                  </svg>
                </div>
              </div>

              <div
                className="absolute floatingElement3"
                style={{ bottom: '15%', right: '-15%' }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle
                      cx="20"
                      cy="20"
                      r="6"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M14 20L18 24L26 16"
                      stroke="var(--teal-accent)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatingElement {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .floatingElement {
          animation: floatingElement 4s ease-in-out infinite;
        }

        .floatingElement2 {
          animation: floatingElement 3s ease-in-out infinite;
        }

        .floatingElement3 {
          animation: floatingElement 3.5s ease-in-out infinite 0.5s;
        }
      `}</style>
    </section>
  );
}
