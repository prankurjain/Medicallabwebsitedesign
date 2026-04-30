import { Shield, Clock, Home, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'NABL Certified',
    description:
      'Accredited laboratory ensuring accurate and reliable test results with stringent quality control.',
  },
  {
    icon: Clock,
    title: 'Same-Day Reports',
    description:
      'Get your test results within 24 hours for most tests. Urgent reports available on request.',
  },
  {
    icon: Home,
    title: 'Home Collection',
    description:
      'Free sample collection from your home at your convenient time. Safe and hygienic process.',
  },
  {
    icon: Award,
    title: 'Transparent Pricing',
    description:
      'No hidden charges. What you see is what you pay. Compare and choose with confidence.',
  },
];

export function WhyChooseUs() {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        backgroundColor: 'var(--dark-navy)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <div className="flex items-center gap-3 justify-center mb-2">
            <div
              style={{
                width: '32px',
                height: '2px',
                backgroundColor: 'var(--teal-accent)',
              }}
            />
            <span
              style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--teal-accent)',
                fontWeight: '500',
              }}
            >
              Why Choose Us
            </span>
            <div
              style={{
                width: '32px',
                height: '2px',
                backgroundColor: 'var(--teal-accent)',
              }}
            />
          </div>

          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 32px)',
              fontFamily: 'var(--font-sans)',
              fontWeight: '700',
              color: 'white',
            }}
          >
            Healthcare You Can Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center opacity-0"
                style={{
                  animation: `fadeInUp 400ms ease-out ${index * 120}ms forwards`,
                }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(0, 191, 165, 0.2)',
                    }}
                  >
                    <Icon size={32} style={{ color: 'var(--teal-accent)' }} />
                  </div>
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontSize: '18px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '700',
                    color: 'white',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--soft-blue-white)',
                    lineHeight: '1.6',
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
