import { useParams, Link } from 'react-router';
import { ChevronRight, AlertTriangle, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function TestDetailPage() {
  const { testId } = useParams();
  const [showAllParameters, setShowAllParameters] = useState(false);

  // Mock test data - in real app, fetch based on testId
  const test = {
    id: testId,
    name: 'Complete Blood Count (CBC)',
    category: 'Blood Test',
    description:
      'A complete blood count (CBC) is a blood test used to evaluate your overall health and detect a wide range of disorders, including anemia, infection and leukemia. It measures several components and features of your blood.',
    sampleType: 'Blood',
    reportTime: '6 hours',
    homeCollection: true,
    price: 299,
    originalPrice: 499,
    preparation: [
      'No special preparation required',
      'Can be done at any time of the day',
      'Continue your regular medications unless advised otherwise',
    ],
    parameters: [
      'Hemoglobin',
      'Total RBC Count',
      'Total WBC Count',
      'Platelet Count',
      'Packed Cell Volume (PCV)',
      'Mean Corpuscular Volume (MCV)',
      'Mean Corpuscular Hemoglobin (MCH)',
      'Mean Corpuscular Hemoglobin Concentration (MCHC)',
      'Red Cell Distribution Width (RDW)',
      'Neutrophils',
      'Lymphocytes',
      'Monocytes',
      'Eosinophils',
      'Basophils',
    ],
  };

  const savings = test.originalPrice - test.price;
  const displayParameters = showAllParameters
    ? test.parameters
    : test.parameters.slice(0, 6);

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
              to="/#tests"
              style={{
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
              }}
            >
              Tests
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
              {test.name}
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
                  className="rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{
                    height: '280px',
                    background:
                      'linear-gradient(135deg, var(--badge-bg) 0%, var(--soft-background) 100%)',
                  }}
                >
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                  >
                    <path
                      d="M40 30C40 24.4772 44.4772 20 50 20H70C75.5228 20 80 24.4772 80 30V100H40V30Z"
                      stroke="var(--soft-blue-white)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="12"
                      stroke="var(--soft-blue-white)"
                      strokeWidth="3"
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
                      {test.category}
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
                    {test.name}
                  </h1>

                  <p
                    style={{
                      fontSize: '15px',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                    }}
                  >
                    {test.description}
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
                      {test.sampleType}
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
                      {test.reportTime}
                    </span>
                    {test.homeCollection && (
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
              {test.preparation.length > 0 && (
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
                        {test.preparation.map((instruction, index) => (
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

              {/* Parameters Section */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3
                  className="mb-4"
                  style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: 'var(--dark-navy)',
                  }}
                >
                  Test Parameters ({test.parameters.length})
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {displayParameters.map((param, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--teal-accent)',
                        }}
                      />
                      <span
                        style={{
                          fontSize: '15px',
                          color: 'var(--dark-navy)',
                        }}
                      >
                        {param}
                      </span>
                    </div>
                  ))}
                </div>

                {test.parameters.length > 6 && (
                  <button
                    onClick={() => setShowAllParameters(!showAllParameters)}
                    className="mt-4 flex items-center gap-2 transition-colors duration-200"
                    style={{
                      fontSize: '14px',
                      color: 'var(--primary-blue)',
                      fontWeight: '600',
                    }}
                  >
                    {showAllParameters ? (
                      <>
                        Show less <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        Show all {test.parameters.length} parameters{' '}
                        <ChevronDown size={16} />
                      </>
                    )}
                  </button>
                )}
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
                        ₹{test.originalPrice}
                      </span>
                      <span
                        style={{
                          fontSize: '32px',
                          fontWeight: '700',
                          color: 'var(--primary-blue)',
                        }}
                      >
                        ₹{test.price}
                      </span>
                    </div>
                    <div
                      className="inline-block px-3 py-1"
                      style={{
                        backgroundColor: 'var(--savings-bg)',
                        borderRadius: '99px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '13px',
                          color: 'var(--success-green)',
                          fontWeight: '600',
                        }}
                      >
                        Save ₹{savings}
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
                        Sample Type
                      </span>
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: 'var(--dark-navy)',
                        }}
                      >
                        {test.sampleType}
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
                        {test.reportTime}
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
                          color: test.homeCollection
                            ? 'var(--success-green)'
                            : 'var(--text-secondary)',
                        }}
                      >
                        {test.homeCollection ? 'Available' : 'Not Available'}
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
