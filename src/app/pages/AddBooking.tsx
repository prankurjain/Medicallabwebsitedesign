import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { ChevronLeft, Search, Calendar, Clock } from 'lucide-react';

const availableTests = [
  { id: 1, name: 'Complete Blood Count (CBC)', price: 299, category: 'Blood Test' },
  { id: 2, name: 'Thyroid Profile (T3, T4, TSH)', price: 449, category: 'Hormone Test' },
  { id: 3, name: 'Lipid Profile', price: 399, category: 'Heart Health' },
  { id: 4, name: 'Blood Sugar (Fasting)', price: 99, category: 'Diabetes' },
  { id: 5, name: 'Liver Function Test (LFT)', price: 499, category: 'Organ Health' },
];

const timeSlots = [
  '7:00 AM - 8:00 AM',
  '8:00 AM - 9:00 AM',
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
  '4:00 PM - 5:00 PM',
  '5:00 PM - 6:00 PM',
];

export function AddBooking() {
  const navigate = useNavigate();
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientGender, setPatientGender] = useState('');
  const [selectedTest, setSelectedTest] = useState('');
  const [collectionType, setCollectionType] = useState<'home' | 'lab'>('home');
  const [collectionDate, setCollectionDate] = useState('');
  const [collectionTime, setCollectionTime] = useState('');
  const [address, setAddress] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTests = availableTests.filter((test) =>
    test.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedTestData = availableTests.find((t) => t.id.toString() === selectedTest);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking data:', {
      patientName,
      patientPhone,
      patientEmail,
      patientAge,
      patientGender,
      selectedTest: selectedTestData,
      collectionType,
      collectionDate,
      collectionTime,
      address,
    });
    navigate('/admin');
  };

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
              to="/admin"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-white/80"
              style={{
                color: 'white',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              <ChevronLeft size={20} />
              Back to Dashboard
            </Link>
          </div>
          <h1
            style={{
              fontSize: '22px',
              color: 'white',
              fontWeight: '600',
            }}
          >
            Create New Booking
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[900px] mx-auto px-6 md:px-12 lg:px-20 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
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
                  Full Name *
                </label>
                <input
                  id="patientName"
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Enter patient name"
                  className="w-full px-4 outline-none transition-all duration-200"
                  style={{
                    height: '48px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: 'var(--dark-navy)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '2px solid var(--primary-blue)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid var(--border-color)';
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
                    Phone Number *
                  </label>
                  <input
                    id="patientPhone"
                    type="tel"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '2px solid var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid var(--border-color)';
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
                    Email Address
                  </label>
                  <input
                    id="patientEmail"
                    type="email"
                    value={patientEmail}
                    onChange={(e) => setPatientEmail(e.target.value)}
                    placeholder="patient@example.com"
                    className="w-full px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '2px solid var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid var(--border-color)';
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="patientAge"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    Age *
                  </label>
                  <input
                    id="patientAge"
                    type="number"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    placeholder="e.g., 35"
                    className="w-full px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '2px solid var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid var(--border-color)';
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="patientGender"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    Gender *
                  </label>
                  <select
                    id="patientGender"
                    value={patientGender}
                    onChange={(e) => setPatientGender(e.target.value)}
                    className="w-full px-4 outline-none transition-all duration-200"
                    style={{
                      height: '48px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '2px solid var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid var(--border-color)';
                    }}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Test Selection Card */}
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
              Select Test
            </h2>

            <div className="space-y-4">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  size={18}
                  style={{ color: 'var(--text-secondary)' }}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tests..."
                  className="w-full pl-12 pr-4 outline-none transition-all duration-200"
                  style={{
                    height: '48px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: 'var(--dark-navy)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '2px solid var(--primary-blue)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '1px solid var(--border-color)';
                  }}
                />
              </div>

              <div className="space-y-2 max-h-64 overflow-y-auto">
                {filteredTests.map((test) => (
                  <label
                    key={test.id}
                    className="flex items-center justify-between p-4 cursor-pointer transition-all duration-200 hover:bg-soft-background"
                    style={{
                      border: selectedTest === test.id.toString() ? '2px solid var(--primary-blue)' : '1px solid var(--border-color)',
                      borderRadius: '8px',
                      backgroundColor: selectedTest === test.id.toString() ? 'var(--badge-bg)' : 'white',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="test"
                        value={test.id}
                        checked={selectedTest === test.id.toString()}
                        onChange={(e) => setSelectedTest(e.target.value)}
                        className="w-5 h-5"
                        style={{
                          accentColor: 'var(--primary-blue)',
                        }}
                      />
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
                          {test.category}
                        </p>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: 'var(--primary-blue)',
                      }}
                    >
                      ₹{test.price}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Collection Details Card */}
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
              Collection Details
            </h2>

            <div className="space-y-5">
              <div>
                <label
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '500',
                    color: 'var(--dark-navy)',
                    display: 'block',
                    marginBottom: '12px',
                  }}
                >
                  Collection Type *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label
                    className="flex items-center justify-center p-4 cursor-pointer transition-all duration-200"
                    style={{
                      border: collectionType === 'home' ? '2px solid var(--primary-blue)' : '1px solid var(--border-color)',
                      borderRadius: '8px',
                      backgroundColor: collectionType === 'home' ? 'var(--badge-bg)' : 'white',
                    }}
                  >
                    <input
                      type="radio"
                      name="collectionType"
                      value="home"
                      checked={collectionType === 'home'}
                      onChange={() => setCollectionType('home')}
                      className="sr-only"
                    />
                    <span
                      style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: collectionType === 'home' ? 'var(--primary-blue)' : 'var(--text-primary)',
                      }}
                    >
                      Home Collection
                    </span>
                  </label>

                  <label
                    className="flex items-center justify-center p-4 cursor-pointer transition-all duration-200"
                    style={{
                      border: collectionType === 'lab' ? '2px solid var(--primary-blue)' : '1px solid var(--border-color)',
                      borderRadius: '8px',
                      backgroundColor: collectionType === 'lab' ? 'var(--badge-bg)' : 'white',
                    }}
                  >
                    <input
                      type="radio"
                      name="collectionType"
                      value="lab"
                      checked={collectionType === 'lab'}
                      onChange={() => setCollectionType('lab')}
                      className="sr-only"
                    />
                    <span
                      style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: collectionType === 'lab' ? 'var(--primary-blue)' : 'var(--text-primary)',
                      }}
                    >
                      Lab Visit
                    </span>
                  </label>
                </div>
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
                    Collection Date *
                  </label>
                  <div className="relative">
                    <Calendar
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      size={18}
                      style={{ color: 'var(--text-secondary)' }}
                    />
                    <input
                      id="collectionDate"
                      type="date"
                      value={collectionDate}
                      onChange={(e) => setCollectionDate(e.target.value)}
                      className="w-full pl-12 pr-4 outline-none transition-all duration-200"
                      style={{
                        height: '48px',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        fontSize: '15px',
                        color: 'var(--dark-navy)',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.border = '2px solid var(--primary-blue)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.border = '1px solid var(--border-color)';
                      }}
                      required
                    />
                  </div>
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
                    Time Slot *
                  </label>
                  <div className="relative">
                    <Clock
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      size={18}
                      style={{ color: 'var(--text-secondary)' }}
                    />
                    <select
                      id="collectionTime"
                      value={collectionTime}
                      onChange={(e) => setCollectionTime(e.target.value)}
                      className="w-full pl-12 pr-4 outline-none transition-all duration-200"
                      style={{
                        height: '48px',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        fontSize: '15px',
                        color: 'var(--dark-navy)',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.border = '2px solid var(--primary-blue)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.border = '1px solid var(--border-color)';
                      }}
                      required
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {collectionType === 'home' && (
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
                    Collection Address *
                  </label>
                  <textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter complete address with landmarks"
                    rows={3}
                    className="w-full px-4 py-3 outline-none transition-all duration-200 resize-none"
                    style={{
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.border = '2px solid var(--primary-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.border = '1px solid var(--border-color)';
                    }}
                    required={collectionType === 'home'}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Summary Card */}
          {selectedTestData && (
            <div
              className="bg-white rounded-xl p-8"
              style={{
                boxShadow: '0 2px 12px rgba(13,43,78,0.06)',
                border: '2px solid var(--teal-accent)',
              }}
            >
              <h2
                className="mb-4"
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'var(--dark-navy)',
                }}
              >
                Booking Summary
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>Test:</span>
                  <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--dark-navy)' }}>
                    {selectedTestData.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>Collection Type:</span>
                  <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--dark-navy)' }}>
                    {collectionType === 'home' ? 'Home Collection' : 'Lab Visit'}
                  </span>
                </div>
                <div
                  style={{
                    height: '1px',
                    backgroundColor: 'var(--border-color)',
                    margin: '16px 0',
                  }}
                />
                <div className="flex justify-between items-center">
                  <span style={{ fontSize: '18px', fontWeight: '600', color: 'var(--dark-navy)' }}>
                    Total Amount:
                  </span>
                  <span style={{ fontSize: '28px', fontWeight: '700', color: 'var(--primary-blue)' }}>
                    ₹{selectedTestData.price}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate('/admin')}
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
              disabled={!selectedTest}
            >
              Create Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
