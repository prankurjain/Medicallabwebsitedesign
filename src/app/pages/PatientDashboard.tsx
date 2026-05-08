import { Link } from 'react-router';
import { Download, Eye } from 'lucide-react';

const bookings = [
  {
    id: 'BK001234',
    testName: 'Complete Blood Count (CBC)',
    bookingDate: '2026-04-28',
    sampleCollectionDate: '2026-04-29',
    status: 'Report Ready',
    amount: 299,
  },
  {
    id: 'BK001235',
    testName: 'Full Body Checkup - Basic',
    bookingDate: '2026-05-01',
    sampleCollectionDate: '2026-05-02',
    status: 'Processing',
    amount: 1299,
  },
  {
    id: 'BK001236',
    testName: 'Thyroid Profile',
    bookingDate: '2026-05-02',
    sampleCollectionDate: null,
    status: 'Sample Collected',
    amount: 449,
  },
  {
    id: 'BK001237',
    testName: 'Lipid Profile',
    bookingDate: '2026-05-02',
    sampleCollectionDate: null,
    status: 'Booked',
    amount: 399,
  },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case 'Booked':
      return {
        bg: 'var(--status-booked-bg)',
        color: 'var(--status-booked-text)',
        borderColor: 'var(--status-booked-text)',
      };
    case 'Sample Collected':
      return {
        bg: 'var(--status-collected-bg)',
        color: 'var(--status-collected-text)',
        borderColor: 'var(--status-collected-text)',
      };
    case 'Processing':
      return {
        bg: 'var(--status-processing-bg)',
        color: 'var(--status-processing-text)',
        borderColor: 'var(--status-processing-text)',
      };
    case 'Report Ready':
      return {
        bg: 'var(--status-ready-bg)',
        color: 'var(--status-ready-text)',
        borderColor: 'var(--status-ready-text)',
      };
    case 'Completed':
      return {
        bg: 'var(--status-completed-bg)',
        color: 'var(--status-completed-text)',
        borderColor: 'var(--status-completed-text)',
      };
    default:
      return {
        bg: 'var(--badge-bg)',
        color: 'var(--primary-blue)',
        borderColor: 'var(--primary-blue)',
      };
  }
};

export function PatientDashboard() {
  return (
    <div>
      {/* Header Strip */}
      <div
        className="py-6"
        style={{
          backgroundColor: 'var(--dark-navy)',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 w-full flex items-center justify-between">
          <h1
            style={{
              fontSize: '22px',
              color: 'white',
              fontWeight: '600',
            }}
          >
            Hello, Rajesh Kumar
          </h1>
          <Link
            to="/"
            style={{
              fontSize: '14px',
              color: 'white',
              fontWeight: '500',
            }}
          >
            Logout
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <h2
            className="mb-6"
            style={{
              fontSize: '28px',
              fontWeight: '700',
              color: 'var(--dark-navy)',
            }}
          >
            My Bookings
          </h2>

          <div className="space-y-4">
            {bookings.map((booking) => {
              const statusStyle = getStatusStyle(booking.status);

              return (
                <div
                  key={booking.id}
                  className="bg-white rounded-xl p-6 shadow-md"
                  style={{
                    borderLeft: `4px solid ${statusStyle.borderColor}`,
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Left - Booking Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3
                            className="mb-1"
                            style={{
                              fontSize: '18px',
                              fontWeight: '600',
                              color: 'var(--dark-navy)',
                            }}
                          >
                            {booking.testName}
                          </h3>
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

                        {/* Status Badge */}
                        <div
                          className="px-3 py-1.5 flex items-center gap-2"
                          style={{
                            backgroundColor: statusStyle.bg,
                            borderRadius: '99px',
                          }}
                        >
                          {booking.status === 'Report Ready' && (
                            <div
                              className="w-2 h-2 rounded-full"
                              style={{
                                backgroundColor: statusStyle.color,
                                animation: 'statusPulse 2s ease-in-out infinite',
                              }}
                            />
                          )}
                          <span
                            style={{
                              fontSize: '12px',
                              color: statusStyle.color,
                              fontWeight: '600',
                            }}
                          >
                            {booking.status}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p
                            style={{
                              fontSize: '12px',
                              color: 'var(--text-secondary)',
                              marginBottom: '2px',
                            }}
                          >
                            Booking Date
                          </p>
                          <p
                            style={{
                              fontSize: '14px',
                              color: 'var(--dark-navy)',
                              fontWeight: '600',
                            }}
                          >
                            {new Date(booking.bookingDate).toLocaleDateString(
                              'en-IN',
                              {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              }
                            )}
                          </p>
                        </div>
                        {booking.sampleCollectionDate && (
                          <div>
                            <p
                              style={{
                                fontSize: '12px',
                                color: 'var(--text-secondary)',
                                marginBottom: '2px',
                              }}
                            >
                              Collection Date
                            </p>
                            <p
                              style={{
                                fontSize: '14px',
                                color: 'var(--dark-navy)',
                                fontWeight: '600',
                              }}
                            >
                              {new Date(
                                booking.sampleCollectionDate
                              ).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })}
                            </p>
                          </div>
                        )}
                        <div>
                          <p
                            style={{
                              fontSize: '12px',
                              color: 'var(--text-secondary)',
                              marginBottom: '2px',
                            }}
                          >
                            Amount
                          </p>
                          <p
                            style={{
                              fontSize: '14px',
                              color: 'var(--dark-navy)',
                              fontWeight: '700',
                            }}
                          >
                            ₹{booking.amount}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right - Action Buttons */}
                    <div className="flex flex-col gap-2 md:min-w-[160px]">
                      <Link
                        to={`/bookings/${booking.id}`}
                        className="flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-80"
                        style={{
                          height: '40px',
                          borderRadius: '8px',
                          backgroundColor: 'var(--primary-blue)',
                          color: 'white',
                          fontSize: '14px',
                          fontWeight: '600',
                        }}
                      >
                        <Eye size={16} />
                        View Details
                      </Link>

                      {booking.status === 'Report Ready' && (
                        <button
                          className="flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-80"
                          style={{
                            height: '40px',
                            borderRadius: '8px',
                            backgroundColor: 'var(--success-green)',
                            color: 'white',
                            fontSize: '14px',
                            fontWeight: '600',
                          }}
                        >
                          <Download size={16} />
                          Download Report
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes statusPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.4);
          }
        }
      `}</style>
    </div>
  );
}
