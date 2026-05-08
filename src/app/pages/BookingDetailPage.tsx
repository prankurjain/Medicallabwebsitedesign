import { useParams, Link } from 'react-router';
import { ChevronLeft, Download, Check } from 'lucide-react';

const steps = [
  {
    title: 'Booking Confirmed',
    date: '28 Apr 2026, 10:30 AM',
    completed: true,
  },
  {
    title: 'Sample Collected',
    date: '29 Apr 2026, 8:45 AM',
    completed: true,
  },
  {
    title: 'Sample Under Processing',
    date: '29 Apr 2026, 11:00 AM',
    completed: true,
    current: true,
  },
  {
    title: 'Report Ready',
    date: '',
    completed: false,
  },
];

export function BookingDetailPage() {
  const { bookingId } = useParams();

  // Mock booking data
  const booking = {
    id: bookingId,
    testName: 'Complete Blood Count (CBC)',
    bookingDate: '2026-04-28',
    sampleCollectionDate: '2026-04-29',
    status: 'Processing',
    amount: 299,
    paymentStatus: 'Paid',
    patientName: 'Rajesh Kumar',
    age: 35,
    gender: 'Male',
    sampleType: 'Blood',
    reportTime: '6 hours',
  };

  return (
    <div>
      {/* Header */}
      <div
        className="py-6"
        style={{
          backgroundColor: 'var(--dark-navy)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 mb-4 transition-colors duration-200 hover:opacity-80"
            style={{
              color: 'white',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            <ChevronLeft size={20} />
            Back to Dashboard
          </Link>
          <h1
            style={{
              fontSize: '28px',
              color: 'white',
              fontWeight: '700',
            }}
          >
            Booking Details
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Status Timeline */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3
                  className="mb-6"
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'var(--dark-navy)',
                  }}
                >
                  Order Status
                </h3>

                <div className="relative">
                  {steps.map((step, index) => (
                    <div key={index} className="flex gap-4 pb-8 last:pb-0">
                      {/* Circle Indicator */}
                      <div className="relative flex flex-col items-center">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                          style={{
                            backgroundColor: step.completed
                              ? 'var(--teal-accent)'
                              : step.current
                              ? 'var(--primary-blue)'
                              : 'var(--border-color)',
                            boxShadow: step.current
                              ? '0 0 0 4px rgba(26,111,191,0.2)'
                              : 'none',
                            animation: step.current
                              ? 'pulseRing 2s ease-in-out infinite'
                              : 'none',
                          }}
                        >
                          {step.completed ? (
                            <Check size={20} color="white" />
                          ) : (
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{
                                backgroundColor: step.current
                                  ? 'white'
                                  : 'transparent',
                              }}
                            />
                          )}
                        </div>

                        {/* Connecting Line */}
                        {index < steps.length - 1 && (
                          <div
                            className="w-0.5 flex-1 mt-2"
                            style={{
                              height: '100%',
                              minHeight: '40px',
                              backgroundColor: step.completed
                                ? 'var(--teal-accent)'
                                : 'var(--border-color)',
                              borderStyle: step.completed ? 'solid' : 'dashed',
                              position: 'absolute',
                              top: '40px',
                              left: '19px',
                            }}
                          />
                        )}
                      </div>

                      {/* Step Details */}
                      <div className="flex-1 pt-2">
                        <h4
                          style={{
                            fontSize: '15px',
                            fontWeight: '600',
                            color: step.completed || step.current
                              ? 'var(--dark-navy)'
                              : 'var(--text-secondary)',
                            marginBottom: '4px',
                          }}
                        >
                          {step.title}
                        </h4>
                        {step.date && (
                          <p
                            style={{
                              fontSize: '13px',
                              color: 'var(--text-secondary)',
                            }}
                          >
                            {step.date}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Booking Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Test Information */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2
                      className="mb-1"
                      style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: 'var(--dark-navy)',
                      }}
                    >
                      {booking.testName}
                    </h2>
                    <p
                      style={{
                        fontSize: '13px',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Booking ID: {booking.id}
                    </p>
                  </div>

                  <div
                    className="px-4 py-2"
                    style={{
                      backgroundColor: 'var(--status-processing-bg)',
                      borderRadius: '99px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'var(--status-processing-text)',
                        fontWeight: '600',
                      }}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <p
                      className="mb-1"
                      style={{
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Sample Type
                    </p>
                    <p
                      style={{
                        fontSize: '15px',
                        color: 'var(--dark-navy)',
                        fontWeight: '600',
                      }}
                    >
                      {booking.sampleType}
                    </p>
                  </div>
                  <div>
                    <p
                      className="mb-1"
                      style={{
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Report Time
                    </p>
                    <p
                      style={{
                        fontSize: '15px',
                        color: 'var(--dark-navy)',
                        fontWeight: '600',
                      }}
                    >
                      {booking.reportTime}
                    </p>
                  </div>
                  <div>
                    <p
                      className="mb-1"
                      style={{
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Payment Status
                    </p>
                    <p
                      style={{
                        fontSize: '15px',
                        color: 'var(--success-green)',
                        fontWeight: '600',
                      }}
                    >
                      {booking.paymentStatus}
                    </p>
                  </div>
                </div>
              </div>

              {/* Patient Details */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3
                  className="mb-4"
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'var(--dark-navy)',
                  }}
                >
                  Patient Details
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <p
                      className="mb-1"
                      style={{
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Name
                    </p>
                    <p
                      style={{
                        fontSize: '15px',
                        color: 'var(--dark-navy)',
                        fontWeight: '600',
                      }}
                    >
                      {booking.patientName}
                    </p>
                  </div>
                  <div>
                    <p
                      className="mb-1"
                      style={{
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Age
                    </p>
                    <p
                      style={{
                        fontSize: '15px',
                        color: 'var(--dark-navy)',
                        fontWeight: '600',
                      }}
                    >
                      {booking.age} years
                    </p>
                  </div>
                  <div>
                    <p
                      className="mb-1"
                      style={{
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Gender
                    </p>
                    <p
                      style={{
                        fontSize: '15px',
                        color: 'var(--dark-navy)',
                        fontWeight: '600',
                      }}
                    >
                      {booking.gender}
                    </p>
                  </div>
                </div>
              </div>

              {/* Billing Information */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3
                  className="mb-4"
                  style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'var(--dark-navy)',
                  }}
                >
                  Billing Information
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between pb-3 border-b" style={{ borderColor: 'var(--border-color)' }}>
                    <span style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
                      Test Amount
                    </span>
                    <span style={{ fontSize: '15px', color: 'var(--dark-navy)', fontWeight: '600' }}>
                      ₹{booking.amount}
                    </span>
                  </div>
                  <div className="flex justify-between pb-3 border-b" style={{ borderColor: 'var(--border-color)' }}>
                    <span style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
                      Home Collection
                    </span>
                    <span style={{ fontSize: '15px', color: 'var(--success-green)', fontWeight: '600' }}>
                      FREE
                    </span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span style={{ fontSize: '17px', color: 'var(--dark-navy)', fontWeight: '700' }}>
                      Total Amount
                    </span>
                    <span style={{ fontSize: '20px', color: 'var(--primary-blue)', fontWeight: '700' }}>
                      ₹{booking.amount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Download Report Button (if available) */}
              {booking.status === 'Report Ready' && (
                <button
                  className="w-full flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
                  style={{
                    height: '52px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--success-green)',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '700',
                  }}
                >
                  <Download size={20} />
                  Download Report
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulseRing {
          0%, 100% {
            box-shadow: 0 0 0 4px rgba(26,111,191,0.2);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(26,111,191,0.1);
          }
        }
      `}</style>
    </div>
  );
}
