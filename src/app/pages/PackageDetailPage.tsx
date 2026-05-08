import { useParams, Link } from 'react-router';
import { ChevronRight, AlertTriangle, MessageCircle, Check } from 'lucide-react';

export function PackageDetailPage() {
  const { packageId } = useParams();

  // Mock package data
  const pkg = {
    id: packageId,
    name: 'Full Body Checkup - Basic',
    category: 'Health Package',
    description:
      'A comprehensive health checkup package designed to assess your overall health status. Includes essential tests to detect early signs of common health conditions.',
    sampleType: 'Blood',
    reportTime: '24 hours',
    homeCollection: true,
    price: 1299,
    originalPrice: 2499,
    testsCount: 8,
    parametersCount: 42,
    tag: 'Best Seller',
    preparation: [
      'Fasting required for 10-12 hours before sample collection',
      'Water is allowed during fasting period',
      'Continue your regular medications unless advised otherwise',
    ],
    includedTests: [
      {
        name: 'Complete Blood Count (CBC)',
        parameters: 14,
      },
      {
        name: 'Lipid Profile',
        parameters: 8,
      },
      {
        name: 'Liver Function Test (LFT)',
        parameters: 11,
      },
      {
        name: 'Kidney Function Test (KFT)',
        parameters: 5,
      },
      {
        name: 'Thyroid Profile',
        parameters: 3,
      },
      {
        name: 'Blood Sugar (Fasting & PP)',
        parameters: 2,
      },
    ],
  };

  const savings = pkg.originalPrice - pkg.price;

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div
        className="py-4"
        style={{ backgroundColor: 'var(--soft-background)' }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-2 flex-wrap">
            <Link
              to="/"
              style={{
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
              }}
            >
              Home
            </Link>
            <ChevronRight
              size={14}
              style={{ color: 'var(--teal-accent)' }}
            />
            <Link
              to="/#packages"
              style={{
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
              }}
            >
              Packages
            </Link>
            <ChevronRight
              size={14}
              style={{ color: 'var(--teal-accent)' }}
            />
            <span
              style={{
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-primary)',
              }}
            >
              {pkg.name}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hero Area */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image */}
                <div
                  className="rounded-2xl overflow-hidden flex items-center justify-center relative"
                  style={{
                    height: '280px',
                    background:
                      'linear-gradient(135deg, var(--badge-bg) 0%, var(--soft-background) 100%)',
                  }}
                >
                  {pkg.tag && (
                    <div
                      className="absolute top-4 right-4 px-3 py-1.5"
                      style={{
                        backgroundColor: 'var(--teal-accent)',
                        borderRadius: '99px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          color: 'white',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {pkg.tag}
                      </span>
                    </div>
                  )}
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                  >
                    <rect
                      x="30"
                      y="40"
                      width="60"
                      height="54"
                      rx="6"
                      stroke="var(--soft-blue-white)"
                      strokeWidth="3"
                    />
                    <path
                      d="M45 57H75M45 70H65"
                      stroke="var(--soft-blue-white)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Info */}
                <div className="space-y-4">
                  <div
                    className="inline-block px-3 py-1"
                    style={{
                      backgroundColor: 'rgba(26, 111, 191, 0.1)',
                      borderRadius: '99px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        color: 'var(--primary-blue)',
                        fontFamily: 'var(--font-mono)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontWeight: '600',
                      }}
                    >
                      {pkg.category}
                    </span>
                  </div>

                  <h1
                    style={{
                      fontSize: 'clamp(28px, 4vw, 36px)',
                      fontWeight: '700',
                      color: 'var(--dark-navy)',
                      lineHeight: '1.2',
                    }}
                  >
                    {pkg.name}
                  </h1>

                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    Includes {pkg.testsCount} tests • {pkg.parametersCount}{' '}
                    parameters
                  </p>

                  <p
                    style={{
                      fontSize: '15px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                    }}
                  >
                    {pkg.description}
                  </p>

                  {/* Badges Row */}
                  <div className="flex gap-2 flex-wrap">
                    <span
                      className="px-3 py-1.5 flex items-center gap-2"
                      style={{
                        fontSize: '13px',
                        backgroundColor: 'var(--badge-bg)',
                        color: 'var(--primary-blue)',
                        borderRadius: '99px',
                        fontWeight: '500',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      {pkg.sampleType}
                    </span>
                    <span
                      className="px-3 py-1.5 flex items-center gap-2"
                      style={{
                        fontSize: '13px',
                        backgroundColor: 'var(--badge-bg)',
                        color: 'var(--primary-blue)',
                        borderRadius: '99px',
                        fontWeight: '500',
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M8 4V8L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      {pkg.reportTime}
                    </span>
                    {pkg.homeCollection && (
                      <span
                        className="px-3 py-1.5 flex items-center gap-2"
                        style={{
                          fontSize: '13px',
                          backgroundColor: 'var(--savings-bg)',
                          color: 'var(--success-green)',
                          borderRadius: '99px',
                          fontWeight: '500',
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2 6L8 2L14 6V13H2V6Z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        Home Collection
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Preparation Instructions */}
              {pkg.preparation.length > 0 && (
                <div
                  className="p-4 rounded-xl"
                  style={{
                    backgroundColor: 'var(--prep-bg)',
                    borderLeft: '3px solid var(--warning-amber)',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle
                      size={20}
                      style={{ color: 'var(--warning-amber)', marginTop: '2px' }}
                    />
                    <div>
                      <h3
                        className="mb-2"
                        style={{
                          fontSize: '15px',
                          fontWeight: '600',
                          color: 'var(--dark-navy)',
                        }}
                      >
                        Preparation Instructions
                      </h3>
                      <ul className="space-y-1">
                        {pkg.preparation.map((instruction, index) => (
                          <li
                            key={index}
                            style={{
                              fontSize: '14px',
                              color: 'var(--dark-navy)',
                            }}
                          >
                            • {instruction}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Included Tests */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3
                  className="mb-4"
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: 'var(--dark-navy)',
                  }}
                >
                  Tests Included ({pkg.testsCount})
                </h3>

                <div className="space-y-3">
                  {pkg.includedTests.map((test, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg"
                      style={{
                        backgroundColor: 'var(--soft-background)',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: 'var(--teal-accent)' }}
                        >
                          <Check size={16} color="white" />
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: '15px',
                              fontWeight: '600',
                              color: 'var(--dark-navy)',
                            }}
                          >
                            {test.name}
                          </p>
                          <p
                            style={{
                              fontSize: '13px',
                              color: 'var(--text-secondary)',
                            }}
                          >
                            {test.parameters} parameters
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Price Card */}
            <div className="lg:col-span-1">
              <div
                className="bg-white rounded-xl p-6 sticky top-24"
                style={{
                  border: '1px solid var(--border-color)',
                  boxShadow: '0 8px 32px rgba(13,43,78,0.10)',
                }}
              >
                <div className="space-y-4">
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span
                        style={{
                          fontSize: '15px',
                          color: 'var(--text-secondary)',
                          textDecoration: 'line-through',
                        }}
                      >
                        ₹{pkg.originalPrice}
                      </span>
                      <span
                        style={{
                          fontSize: '32px',
                          fontWeight: '700',
                          color: 'var(--primary-blue)',
                        }}
                      >
                        ₹{pkg.price}
                      </span>
                    </div>
                    <div
                      className="w-full text-center py-2 mb-2"
                      style={{
                        backgroundColor: 'var(--savings-bg)',
                        borderRadius: '6px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '14px',
                          color: 'var(--success-green)',
                          fontWeight: '600',
                        }}
                      >
                        You save ₹{savings}
                      </span>
                    </div>
                  </div>

                  <hr style={{ borderColor: 'var(--border-color)' }} />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span
                        style={{
                          fontSize: '14px',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        Tests Included
                      </span>
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: 'var(--dark-navy)',
                        }}
                      >
                        {pkg.testsCount} tests
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span
                        style={{
                          fontSize: '14px',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        Total Parameters
                      </span>
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: 'var(--dark-navy)',
                        }}
                      >
                        {pkg.parametersCount}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span
                        style={{
                          fontSize: '14px',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        Sample Type
                      </span>
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: 'var(--dark-navy)',
                        }}
                      >
                        {pkg.sampleType}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span
                        style={{
                          fontSize: '14px',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        Report Time
                      </span>
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: 'var(--dark-navy)',
                        }}
                      >
                        {pkg.reportTime}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span
                        style={{
                          fontSize: '14px',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        Home Collection
                      </span>
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: pkg.homeCollection
                            ? 'var(--success-green)'
                            : 'var(--text-secondary)',
                        }}
                      >
                        {pkg.homeCollection ? 'Available' : 'Not Available'}
                      </span>
                    </div>
                  </div>

                  <button
                    className="w-full flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
                    style={{
                      height: '52px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--whatsapp-green)',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: '700',
                    }}
                  >
                    <MessageCircle size={20} />
                    Book on WhatsApp
                  </button>

                  <p
                    className="text-center"
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    Quick booking • Free home collection • Same day reports
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
