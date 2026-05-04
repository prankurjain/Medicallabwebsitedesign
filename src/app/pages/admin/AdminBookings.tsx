import { Eye } from 'lucide-react';
import { useState } from 'react';

const bookings = [
  {
    id: 'BK001240',
    patient: 'Priya Sharma',
    test: 'CBC Test',
    date: '2026-05-02',
    amount: 299,
    status: 'Booked',
  },
  {
    id: 'BK001239',
    patient: 'Amit Patel',
    test: 'Lipid Profile',
    date: '2026-05-02',
    amount: 399,
    status: 'Sample Collected',
  },
  {
    id: 'BK001238',
    patient: 'Sneha Reddy',
    test: 'Thyroid Profile',
    date: '2026-05-01',
    amount: 449,
    status: 'Processing',
  },
  {
    id: 'BK001237',
    patient: 'Rahul Kumar',
    test: 'Full Body Checkup',
    date: '2026-05-01',
    amount: 1299,
    status: 'Report Ready',
  },
  {
    id: 'BK001236',
    patient: 'Meera Singh',
    test: 'Vitamin D Test',
    date: '2026-04-30',
    amount: 899,
    status: 'Completed',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Booked':
      return { bg: 'var(--status-booked-bg)', color: 'var(--status-booked-text)' };
    case 'Sample Collected':
      return { bg: 'var(--status-collected-bg)', color: 'var(--status-collected-text)' };
    case 'Processing':
      return { bg: 'var(--status-processing-bg)', color: 'var(--status-processing-text)' };
    case 'Report Ready':
      return { bg: 'var(--status-ready-bg)', color: 'var(--status-ready-text)' };
    case 'Completed':
      return { bg: 'var(--status-completed-bg)', color: 'var(--status-completed-text)' };
    default:
      return { bg: 'var(--badge-bg)', color: 'var(--primary-blue)' };
  }
};

export function AdminBookings() {
  const [bookingList] = useState(bookings);
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Booked', 'Sample Collected', 'Processing', 'Report Ready', 'Completed'];

  const filteredBookings =
    filter === 'All'
      ? bookingList
      : bookingList.filter((b) => b.status === filter);

  return (
    <div className="p-6 md:p-8 space-y-6">
      {/* Header */}
      <div>
        <h1
          style={{
            fontSize: '28px',
            fontWeight: '700',
            color: 'var(--dark-navy)',
            marginBottom: '4px',
          }}
        >
          Manage Bookings
        </h1>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
          }}
        >
          View and manage all test bookings
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="px-4 py-2 whitespace-nowrap transition-all duration-200 flex-shrink-0"
            style={{
              borderRadius: '99px',
              backgroundColor: filter === f ? 'var(--primary-blue)' : 'white',
              color: filter === f ? 'white' : 'var(--dark-navy)',
              fontSize: '13px',
              fontWeight: '600',
              border: filter === f ? 'none' : '1px solid var(--border-color)',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: 'var(--soft-background)' }}>
                <th
                  className="px-6 py-4 text-left"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                  }}
                >
                  Booking ID
                </th>
                <th
                  className="px-6 py-4 text-left"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                  }}
                >
                  Patient
                </th>
                <th
                  className="px-6 py-4 text-left"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                  }}
                >
                  Test
                </th>
                <th
                  className="px-6 py-4 text-left"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                  }}
                >
                  Date
                </th>
                <th
                  className="px-6 py-4 text-left"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                  }}
                >
                  Amount
                </th>
                <th
                  className="px-6 py-4 text-left"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                  }}
                >
                  Status
                </th>
                <th
                  className="px-6 py-4 text-center"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => {
                const statusStyle = getStatusColor(booking.status);
                return (
                  <tr
                    key={booking.id}
                    className="border-b transition-colors duration-200 hover:bg-gray-50"
                    style={{ borderColor: 'var(--border-color)' }}
                  >
                    <td className="px-6 py-4">
                      <span
                        style={{
                          fontSize: '14px',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--dark-navy)',
                          fontWeight: '600',
                        }}
                      >
                        {booking.id}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        style={{
                          fontSize: '14px',
                          color: 'var(--dark-navy)',
                        }}
                      >
                        {booking.patient}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        style={{
                          fontSize: '14px',
                          color: 'var(--dark-navy)',
                        }}
                      >
                        {booking.test}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        style={{
                          fontSize: '14px',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {new Date(booking.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        style={{
                          fontSize: '15px',
                          color: 'var(--dark-navy)',
                          fontWeight: '700',
                        }}
                      >
                        ₹{booking.amount}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="px-3 py-1.5 rounded-full inline-block"
                        style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          color: statusStyle.color,
                          backgroundColor: statusStyle.bg,
                        }}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center">
                        <button
                          className="p-2 rounded-lg transition-all duration-200 hover:bg-blue-50"
                          style={{
                            color: 'var(--primary-blue)',
                          }}
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
