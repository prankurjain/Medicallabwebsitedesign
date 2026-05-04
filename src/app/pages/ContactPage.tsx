import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section
        className="py-16"
        style={{ backgroundColor: 'var(--dark-navy)' }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: '700',
              color: 'white',
              marginBottom: '16px',
            }}
          >
            Get in Touch
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'var(--soft-blue-white)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Have questions? We're here to help. Reach out to us through any of
            the channels below.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2
                className="mb-6"
                style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: 'var(--dark-navy)',
                }}
              >
                Send us a Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontSize: '13px',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 transition-all duration-200"
                    style={{
                      height: '48px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-color)',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontSize: '13px',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 transition-all duration-200"
                    style={{
                      height: '48px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-color)',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontSize: '13px',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 transition-all duration-200"
                    style={{
                      height: '48px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-color)',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                  />
                </div>

                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontSize: '13px',
                      fontWeight: '500',
                      color: 'var(--dark-navy)',
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full px-4 py-3 transition-all duration-200 resize-none"
                    style={{
                      borderRadius: '8px',
                      border: '1px solid var(--border-color)',
                      fontSize: '15px',
                      color: 'var(--dark-navy)',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full transition-all duration-200 hover:opacity-90"
                  style={{
                    height: '52px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--primary-blue)',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '600',
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--badge-bg)' }}
                  >
                    <Phone size={20} style={{ color: 'var(--primary-blue)' }} />
                  </div>
                  <div>
                    <h3
                      className="mb-2"
                      style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: 'var(--dark-navy)',
                      }}
                    >
                      Phone
                    </h3>
                    <p
                      style={{
                        fontSize: '15px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      +91 98765 43210
                    </p>
                    <p
                      style={{
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Mon - Sat: 7:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)' }}
                  >
                    <MessageCircle
                      size={20}
                      style={{ color: 'var(--whatsapp-green)' }}
                    />
                  </div>
                  <div>
                    <h3
                      className="mb-2"
                      style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: 'var(--dark-navy)',
                      }}
                    >
                      WhatsApp
                    </h3>
                    <p
                      style={{
                        fontSize: '15px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      +91 98765 43210
                    </p>
                    <p
                      style={{
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Quick booking & support
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--badge-bg)' }}
                  >
                    <Mail size={20} style={{ color: 'var(--primary-blue)' }} />
                  </div>
                  <div>
                    <h3
                      className="mb-2"
                      style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: 'var(--dark-navy)',
                      }}
                    >
                      Email
                    </h3>
                    <p
                      style={{
                        fontSize: '15px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      support@pathkindlab.com
                    </p>
                    <p
                      style={{
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--badge-bg)' }}
                  >
                    <MapPin
                      size={20}
                      style={{ color: 'var(--primary-blue)' }}
                    />
                  </div>
                  <div>
                    <h3
                      className="mb-2"
                      style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: 'var(--dark-navy)',
                      }}
                    >
                      Address
                    </h3>
                    <p
                      style={{
                        fontSize: '15px',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6',
                      }}
                    >
                      123 Medical Plaza, Healthcare District
                      <br />
                      Mumbai - 400001, Maharashtra
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--badge-bg)' }}
                  >
                    <Clock
                      size={20}
                      style={{ color: 'var(--primary-blue)' }}
                    />
                  </div>
                  <div>
                    <h3
                      className="mb-2"
                      style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: 'var(--dark-navy)',
                      }}
                    >
                      Operating Hours
                    </h3>
                    <p
                      style={{
                        fontSize: '15px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Monday - Saturday: 7:00 AM - 8:00 PM
                    </p>
                    <p
                      style={{
                        fontSize: '15px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Sunday: 8:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
