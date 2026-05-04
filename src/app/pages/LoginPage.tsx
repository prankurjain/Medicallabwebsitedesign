import { useState } from 'react';
import { useNavigate } from 'react-router';

export function LoginPage() {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length === 10) {
      setStep('otp');
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.every((digit) => digit !== '')) {
      // Simulate login
      navigate('/dashboard');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-20 px-6"
      style={{ backgroundColor: 'var(--soft-background)' }}
    >
      <div
        className="w-full max-w-md bg-white rounded-2xl p-12 shadow-2xl"
        style={{
          boxShadow: '0 20px 60px rgba(13,43,78,0.15)',
        }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: 'var(--primary-blue)',
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L4 7V17L12 22L20 17V7L12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22V12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '700',
              color: 'var(--dark-navy)',
            }}
          >
            PATHKIND LAB
          </h1>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
            }}
          >
            {step === 'phone'
              ? 'Login to access your test reports'
              : 'Enter the OTP sent to your mobile'}
          </p>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: i === 1 || (step === 'otp' && i === 2) ? '32px' : '8px',
                height: '8px',
                borderRadius: '99px',
                backgroundColor:
                  i === 1 || (step === 'otp' && i === 2)
                    ? 'var(--teal-accent)'
                    : 'var(--border-color)',
                transition: 'all 300ms',
              }}
            />
          ))}
        </div>

        {/* Phone Input */}
        {step === 'phone' && (
          <form onSubmit={handlePhoneSubmit}>
            <div className="mb-6">
              <label
                className="block mb-3"
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--dark-navy)',
                }}
              >
                Mobile Number
              </label>
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center justify-center px-3"
                  style={{
                    height: '56px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--soft-background)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '18px',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-secondary)',
                      fontWeight: '500',
                    }}
                  >
                    +91
                  </span>
                </div>
                <input
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="98765 43210"
                  className="flex-1 px-4 focus:outline-none"
                  style={{
                    height: '56px',
                    borderRadius: '12px',
                    border: '2px solid var(--border-color)',
                    fontSize: '18px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--dark-navy)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-blue)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={phone.length !== 10}
              className="w-full transition-all duration-200 disabled:opacity-50"
              style={{
                height: '52px',
                borderRadius: '12px',
                backgroundColor: 'var(--primary-blue)',
                color: 'white',
                fontSize: '16px',
                fontWeight: '700',
              }}
            >
              Send OTP
            </button>
          </form>
        )}

        {/* OTP Input */}
        {step === 'otp' && (
          <form onSubmit={handleOtpSubmit}>
            <div className="mb-6">
              <label
                className="block mb-3 text-center"
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--dark-navy)',
                }}
              >
                Enter 6-Digit OTP
              </label>
              <div className="flex gap-2 justify-center mb-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Backspace' && !digit && index > 0) {
                        const prevInput = document.getElementById(
                          `otp-${index - 1}`
                        );
                        prevInput?.focus();
                      }
                    }}
                    className="text-center focus:outline-none"
                    style={{
                      width: '52px',
                      height: '60px',
                      borderRadius: '12px',
                      border: digit
                        ? '2px solid var(--primary-blue)'
                        : '2px solid var(--border-color)',
                      fontSize: '24px',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: '700',
                      color: 'var(--dark-navy)',
                      boxShadow: digit
                        ? '0 2px 8px rgba(26,111,191,0.15)'
                        : 'none',
                    }}
                  />
                ))}
              </div>
              <p className="text-center">
                <button
                  type="button"
                  onClick={() => setStep('phone')}
                  style={{
                    fontSize: '13px',
                    color: 'var(--primary-blue)',
                    fontWeight: '600',
                  }}
                >
                  Change number
                </button>
                <span
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    margin: '0 8px',
                  }}
                >
                  •
                </span>
                <button
                  type="button"
                  style={{
                    fontSize: '13px',
                    color: 'var(--primary-blue)',
                    fontWeight: '600',
                  }}
                >
                  Resend OTP
                </button>
              </p>
            </div>

            <button
              type="submit"
              disabled={otp.some((digit) => digit === '')}
              className="w-full transition-all duration-200 disabled:opacity-50"
              style={{
                height: '52px',
                borderRadius: '12px',
                backgroundColor: 'var(--primary-blue)',
                color: 'white',
                fontSize: '16px',
                fontWeight: '700',
              }}
            >
              Verify & Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
