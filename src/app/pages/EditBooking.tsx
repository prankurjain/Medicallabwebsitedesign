import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router';
import { ChevronLeft, Calendar, User, Phone, Mail, TestTube, MapPin, Clock } from 'lucide-react';

const statusOptions = [
  'Booked',
  'Sample Collected',
  'Processing',
  'Report Ready',
  'Completed',
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

export function EditBooking() {
  const navigate = useNavigate();
  const { bookingId } = useParams();
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [testName, setTestName] = useState('');
  const [collectionDate, setCollectionDate] = useState('');
  const [collectionTime, setCollectionTime] = useState('');
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    // Fetch booking data from API using bookingId
    // For now, using mock data
    const mockBookingData = {
      patientName: 'Priya Sharma',
      patientPhone: '+91 98765 43210',
      patientEmail: 'priya.sharma@example.com',
      testName: 'Complete Blood Count (CBC)',
      collectionDate: '2026-05-02',
      collectionTime: '9:00 AM - 10:00 AM',
      address: '123, MG Road, Bangalore, Karnataka 560001',
      amount: '299',
      status: 'Booked',
      notes: 'Patient prefers morning slot',
    };

    setPatientName(mockBookingData.patientName);
    setPatientPhone(mockBookingData.patientPhone);
    setPatientEmail(mockBookingData.patientEmail);
    setTestName(mockBookingData.testName);
    setCollectionDate(mockBookingData.collectionDate);
    setCollectionTime(mockBookingData.collectionTime);
    setAddress(mockBookingData.address);
    setAmount(mockBookingData.amount);
    setStatus(mockBookingData.status);
    setNotes(mockBookingData.notes);
  }, [bookingId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission with API call
    console.log('Updated booking data:', {
      bookingId,
      patientName,
      patientPhone,
      patientEmail,
      testName,
      collectionDate,
      collectionTime,
      address,
      amount,
      status,
      notes,
    });
    // Navigate back to admin bookings
    navigate('/admin/bookings');
  };

  const currentStatusStyle = getStatusColor(status);

  return (
    <div style={{ backgroundColor: 'var(--soft-background)', minHeight: '100vh' }}>
      {/* Header */}
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
          <div className="flex items-center gap-4">
            <Link
              to="/admin/bookings"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-white/80"
              style={{
                color: 'white',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              <ChevronLeft size={20} />
              Back to Bookings
            </Link>
          </div>
          <h1
            style={{
              fontSize: '22px',
              color: 'white',
              fontWeight: '600',
            }}
          >
            Edit Booking - {bookingId}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[900px] mx-auto px-6 md:px-12 lg:px-20 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Status Management Card */}
          <div
            className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 2px 12px rgba(13,43,78,0.06)',
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'var(--dark-navy)',
                }}
              >
                Booking Status
              </h2>
              <span
                className="px-4 py-2 rounded-full"
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: currentStatusStyle.color,
                  backgroundColor: currentStatusStyle.bg,
                }}
              >
                {status}
              </span>
            </div>

            <div>
              <label
                htmlFor="status"
                style={{
                  fontSize: '13px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '500',
                  color: 'var(--dark-navy)',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                Update Status
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {statusOptions.map((option) => {
                  const optionStyle = getStatusColor(option);
                  const isSelected = status === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setStatus(option)}
                      className="px-4 py-3 rounded-lg transition-all duration-200"
                      style={{
                        backgroundColor: isSelected
                          ? optionStyle.bg
                          : 'var(--soft-background)',
                        color: isSelected ? optionStyle.color : 'var(--text-secondary)',
                        border: isSelected
                          ? `2px solid ${optionStyle.color}`
                          : '1px solid var(--border-color)',
                        fontSize: '13px',
                        fontWeight: isSelected ? '600' : '500',
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Patient Information Card */}
          <div
            className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 2px 12px rgba(13,43,78,0.06)',
            }}
          >
            <h2
              className="mb-6"
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--dark-navy)',
              }}
            >
              Patient Information
            </h2>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="patientName"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '500',
                    color: 'var(--dark-navy)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    Patient Name *
                  </div>
                </label>
                <input
                  id="patientName"
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-4 outline-none transition-all duration-200"
                  style={{
                    height: '48px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: 'var(--dark-navy)',
                  }}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="patientPhone"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      Phone Number *
                    </div>
                  </label>
                  <input
                    id="patientPhone"
                    type="tel"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="patientEmail"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      Email Address *
                    </div>
                  </label>
                  <input
                    id="patientEmail"
                    type="email"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    className="w-full px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Test & Collection Details Card */}
          <div
            className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 2px 12px rgba(13,43,78,0.06)',
            }}
          >
            <h2
              className="mb-6"
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--dark-navy)',
              }}
            >
              Test & Collection Details
            </h2>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="testName"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '500',
                    color: 'var(--dark-navy)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <TestTube size={16} />
                    Test Name *
                  </div>
                </label>
                <input
                  id="testName"
                  type="text"
                  value={testName}
                  onChange={(e) => setTestName(e.target.value)}
                  className="w-full px-4 outline-none transition-all duration-200"
                  style={{
                    height: '48px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: 'var(--dark-navy)',
                  }}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="collectionDate"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      Collection Date *
                    </div>
                  </label>
                  <input
                    id="collectionDate"
                    type="date"
                    value={collectionDate}
                    onChange={(e) => setCollectionDate(e.target.value)}
                    className="w-full px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="collectionTime"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      Collection Time *
                    </div>
                  </label>
                  <input
                    id="collectionTime"
                    type="text"
                    value={collectionTime}
                    onChange={(e) => setCollectionTime(e.target.value)}
                    placeholder="e.g., 9:00 AM - 10:00 AM"
                    className="w-full px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="address"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '500',
                    color: 'var(--dark-navy)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    Collection Address *
                  </div>
                </label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 outline-none transition-all duration-200 resize-none"
                  style={{
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: 'var(--dark-navy)',
                  }}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="amount"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '500',
                    color: 'var(--dark-navy)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Amount (₹) *
                </label>
                <input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 outline-none transition-all duration-200"
                  style={{
                    height: '48px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: 'var(--dark-navy)',
                  }}
                  required
                />
              </div>
            </div>
          </div>

          {/* Notes Card */}
          <div
            className="bg-white rounded-xl p-8"
            style={{
              boxShadow: '0 2px 12px rgba(13,43,78,0.06)',
            }}
          >
            <h2
              className="mb-6"
              style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--dark-navy)',
              }}
            >
              Additional Notes
            </h2>

            <div>
              <label
                htmlFor="notes"
                style={{
                  fontSize: '13px',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '500',
                  color: 'var(--dark-navy)',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Internal Notes
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add any special instructions or notes..."
                rows={4}
                className="w-full px-4 py-3 outline-none transition-all duration-200 resize-none"
                style={{
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  fontSize: '15px',
                  color: 'var(--dark-navy)',
                }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate('/admin/bookings')}
              className="flex-1 transition-all duration-200 hover:bg-gray-100"
              style={{
                height: '52px',
                backgroundColor: 'white',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 transition-all duration-200 hover:opacity-90"
              style={{
                height: '52px',
                backgroundColor: 'var(--primary-blue)',
                color: 'white',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '700',
              }}
            >
              Update Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
