const testimonials = [
  {
    quote:
      'Excellent service! The home collection was punctual and professional. Got my reports within 12 hours. Highly recommend PATHKIND LAB.',
    name: 'Priya Sharma',
  },
  {
    quote:
      'Very impressed with the accuracy and speed of the reports. The staff was courteous and the entire process was seamless.',
    name: 'Rajesh Kumar',
  },
  {
    quote:
      'The prices are transparent and reasonable. No hidden charges. The WhatsApp booking made it super convenient for me.',
    name: 'Anita Desai',
  },
];

export function Testimonials() {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        backgroundColor: 'var(--soft-background)',
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
                color: 'var(--primary-blue)',
                fontWeight: '500',
              }}
            >
              Testimonials
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
              color: 'var(--dark-navy)',
            }}
          >
            What Our Patients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 relative"
              style={{
                borderRadius: '12px',
                boxShadow: '0 2px 12px rgba(13,43,78,0.06)',
              }}
            >
              {/* Quote Mark */}
              <div
                className="absolute top-4 left-4 opacity-20"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '64px',
                  color: 'var(--teal-accent)',
                  lineHeight: '1',
                }}
              >
                "
              </div>

              <div className="relative pt-8">
                <p
                  className="mb-4 italic"
                  style={{
                    fontSize: '15px',
                    color: 'var(--text-primary)',
                    lineHeight: '1.6',
                  }}
                >
                  {testimonial.quote}
                </p>

                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '14px',
                        color: '#FFC107',
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: 'var(--dark-navy)',
                  }}
                >
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
