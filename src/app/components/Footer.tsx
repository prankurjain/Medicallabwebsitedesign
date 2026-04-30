import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--dark-navy)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
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
              <span
                className="font-bold"
                style={{
                  color: 'white',
                  fontSize: '20px',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                PATHKIND LAB
              </span>
            </div>
            <p
              className="mb-4"
              style={{
                fontSize: '14px',
                color: 'var(--soft-blue-white)',
                lineHeight: '1.6',
              }}
            >
              Your trusted partner for accurate diagnostic services and
              healthcare solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-white/20"
                style={{
                  backgroundColor: '#1A3D63',
                }}
              >
                <Instagram size={16} color="white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-white/20"
                style={{
                  backgroundColor: '#1A3D63',
                }}
              >
                <Facebook size={16} color="white" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--teal-accent)',
                fontWeight: '500',
              }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {['Tests', 'Packages', 'Contact', 'My Account'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="transition-colors duration-200 hover:text-white"
                  style={{
                    fontSize: '14px',
                    color: 'var(--soft-blue-white)',
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--teal-accent)',
                fontWeight: '500',
              }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <Phone
                  size={16}
                  style={{ color: 'var(--teal-accent)', marginTop: '2px' }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    color: 'var(--soft-blue-white)',
                  }}
                >
                  +91 98765 43210
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MessageCircle
                  size={16}
                  style={{ color: 'var(--teal-accent)', marginTop: '2px' }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    color: 'var(--soft-blue-white)',
                  }}
                >
                  WhatsApp Support
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin
                  size={16}
                  style={{ color: 'var(--teal-accent)', marginTop: '2px' }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    color: 'var(--soft-blue-white)',
                    lineHeight: '1.5',
                  }}
                >
                  123 Medical Plaza, Healthcare District, Mumbai - 400001
                </span>
              </div>
            </div>
          </div>

          {/* Column 4 - Hours */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--teal-accent)',
                fontWeight: '500',
              }}
            >
              Hours
            </h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <Clock
                  size={16}
                  style={{ color: 'var(--teal-accent)', marginTop: '2px' }}
                />
                <div>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--soft-blue-white)',
                    }}
                  >
                    Mon - Sat: 7:00 AM - 8:00 PM
                  </p>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--soft-blue-white)',
                    }}
                  >
                    Sunday: 8:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
              <div
                className="px-3 py-1 mt-2 inline-block"
                style={{
                  backgroundColor: 'rgba(0, 191, 165, 0.2)',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: 'var(--teal-accent)',
                  fontWeight: '600',
                }}
              >
                Home Collection Available
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="py-4"
        style={{
          backgroundColor: '#0A2240',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-3">
          <p
            style={{
              fontSize: '13px',
              color: 'var(--soft-blue-white)',
            }}
          >
            © 2026 PATHKIND LAB. All rights reserved.
          </p>
          <a
            href="#"
            className="transition-colors duration-200 hover:text-white"
            style={{
              fontSize: '13px',
              color: 'var(--soft-blue-white)',
            }}
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
