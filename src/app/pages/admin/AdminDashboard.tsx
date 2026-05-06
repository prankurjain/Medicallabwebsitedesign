import { TestTube, Package, Calendar, CheckCircle, Plus } from 'lucide-react';
import { Link } from 'react-router';

const summaryCards = [
  {
    title: 'Total Tests',
    value: '127',
    icon: TestTube,
    color: 'var(--primary-blue)',
    bgColor: 'rgba(26, 111, 191, 0.1)',
  },
  {
    title: 'Total Packages',
    value: '24',
    icon: Package,
    color: 'var(--teal-accent)',
    bgColor: 'rgba(0, 191, 165, 0.1)',
  },
  {
    title: 'Pending Bookings',
    value: '18',
    icon: Calendar,
    color: 'var(--warning-amber)',
    bgColor: 'rgba(245, 158, 11, 0.1)',
  },
  {
    title: 'Completed Today',
    value: '42',
    icon: CheckCircle,
    color: 'var(--success-green)',
    bgColor: 'rgba(46, 125, 50, 0.1)',
  },
];

const recentBookings = [
  {
    id: 'BK001240',
    patient: 'Priya Sharma',
    test: 'CBC Test',
    date: '2026-05-02',
    status: 'Pending',
  },
  {
    id: 'BK001239',
    patient: 'Amit Patel',
    test: 'Lipid Profile',
    date: '2026-05-02',
    status: 'Collected',
  },
  {
    id: 'BK001238',
    patient: 'Sneha Reddy',
    test: 'Thyroid Profile',
    date: '2026-05-01',
    status: 'Processing',
  },
  {
    id: 'BK001237',
    patient: 'Rahul Kumar',
    test: 'Full Body Checkup',
    date: '2026-05-01',
    status: 'Completed',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Pending':
      return 'var(--warning-amber)';
    case 'Collected':
      return 'var(--status-collected-text)';
    case 'Processing':
      return 'var(--status-processing-text)';
    case 'Completed':
      return 'var(--success-green)';
    default:
      return 'var(--text-secondary)';
  }
};

export function AdminDashboard() {
  return (
    <div className="p-6 md:p-8 space-y-8">
      {/* Page Title & Quick Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1
            style={{
              fontSize: '28px',
              fontWeight: '700',
              color: 'var(--dark-navy)',
              marginBottom: '4px',
            }}
          >
            Dashboard
          </h1>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
            }}
          >
            Overview of your lab operations
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex gap-3">
          <Link
            to="/admin/tests/new"
            className="flex items-center gap-2 px-4 py-2 transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: 'var(--primary-blue)',
              color: 'white',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'none',
            }}
          >
            <Plus size={18} />
            Add Test
          </Link>
          <Link
            to="/admin/packages/new"
            className="flex items-center gap-2 px-4 py-2 transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: 'var(--success-green)',
              color: 'white',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'none',
            }}
          >
            <Plus size={18} />
            Add Package
          </Link>
          <Link
            to="/admin/bookings/new"
            className="flex items-center gap-2 px-4 py-2 transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: 'var(--teal-accent)',
              color: 'white',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'none',
            }}
          >
            <Plus size={18} />
            New Booking
          </Link>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl"
              style={{
                borderLeft: `4px solid ${card.color}`,
                boxShadow: '0 2px 8px rgba(13,43,78,0.06)',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: card.bgColor }}
                >
                  <Icon size={24} style={{ color: card.color }} />
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {card.title}
                </p>
              </div>
              <p
                style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: 'var(--dark-navy)',
                }}
              >
                {card.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="p-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <h2
            style={{
              fontSize: '20px',
              fontWeight: '700',
              color: 'var(--dark-navy)',
            }}
          >
            Recent Bookings
          </h2>
        </div>

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
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking, index) => (
                <tr
                  key={index}
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
                      className="px-3 py-1 rounded-full inline-block"
                      style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        color: getStatusColor(booking.status),
                        backgroundColor: `${getStatusColor(booking.status)}15`,
                      }}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
