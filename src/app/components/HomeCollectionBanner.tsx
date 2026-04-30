import { MessageCircle } from 'lucide-react';

export function HomeCollectionBanner() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, var(--teal-accent) 0%, #0082A5 100%)',
            boxShadow: '0 8px 32px rgba(0, 191, 165, 0.25)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Left - Text Content */}
            <div className="text-white space-y-4">
              <h2
                style={{
                  fontSize: 'clamp(28px, 4vw, 36px)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '700',
                  lineHeight: '1.2',
                }}
              >
                Sample Collection at Your Doorstep
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  opacity: '0.95',
                  lineHeight: '1.6',
                }}
              >
                Safe, hygienic, and convenient. Our trained phlebotomists will
                collect your samples from the comfort of your home at your
                preferred time slot.
              </p>

              <div className="pt-2">
                <button
                  className="flex items-center gap-2 px-6 transition-all duration-200 hover:shadow-lg hover:scale-105"
                  style={{
                    height: '52px',
                    borderRadius: '12px',
                    backgroundColor: 'white',
                    color: 'var(--teal-accent)',
                    fontSize: '16px',
                    fontWeight: '700',
                  }}
                >
                  <MessageCircle size={20} />
                  Book Home Collection on WhatsApp
                </button>
              </div>

              <div className="flex flex-wrap gap-6 pt-4 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M6 10L9 13L14 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Free Collection</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M6 10L9 13L14 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Trained Staff</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="8"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M6 10L9 13L14 7"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Safe & Hygienic</span>
                </div>
              </div>
            </div>

            {/* Right - Illustration */}
            <div className="hidden lg:flex justify-center">
              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* House */}
                <rect
                  x="80"
                  y="140"
                  width="140"
                  height="120"
                  rx="8"
                  stroke="white"
                  strokeWidth="3"
                  opacity="0.9"
                />
                <path
                  d="M60 150L150 80L240 150"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.9"
                />
                <rect
                  x="120"
                  y="200"
                  width="30"
                  height="40"
                  rx="4"
                  fill="white"
                  opacity="0.7"
                />
                <rect
                  x="170"
                  y="170"
                  width="30"
                  height="30"
                  rx="4"
                  stroke="white"
                  strokeWidth="2"
                  opacity="0.7"
                />

                {/* Medical Kit */}
                <rect
                  x="200"
                  y="100"
                  width="60"
                  height="40"
                  rx="6"
                  fill="white"
                  opacity="0.95"
                />
                <path
                  d="M220 115H240M230 105V125"
                  stroke="var(--teal-accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Person */}
                <circle
                  cx="45"
                  cy="180"
                  r="15"
                  fill="white"
                  opacity="0.9"
                />
                <path
                  d="M25 230C25 215 33 205 45 205C57 205 65 215 65 230"
                  fill="white"
                  opacity="0.9"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
