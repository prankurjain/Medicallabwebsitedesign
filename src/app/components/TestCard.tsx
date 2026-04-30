import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface TestCardProps {
  name: string;
  category: string;
  sampleType: string;
  reportTime: string;
  price: number;
  originalPrice?: number;
  imageUrl?: string;
}

export function TestCard({
  name,
  category,
  sampleType,
  reportTime,
  price,
  originalPrice,
  imageUrl,
}: TestCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const savings = originalPrice ? originalPrice - price : 0;

  return (
    <div
      className="bg-white overflow-hidden transition-all duration-200 cursor-pointer"
      style={{
        height: '340px',
        borderRadius: '12px',
        border: `1px solid ${isHovered ? 'var(--teal-accent)' : 'var(--border-color)'}`,
        boxShadow: isHovered
          ? '0 12px 32px rgba(13,43,78,0.12)'
          : '0 2px 12px rgba(13,43,78,0.06)',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Area */}
      <div className="relative" style={{ height: '160px' }}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                'linear-gradient(135deg, var(--badge-bg) 0%, var(--soft-background) 100%)',
            }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 16C20 13.7909 21.7909 12 24 12H40C42.2091 12 44 13.7909 44 16V52H20V16Z"
                stroke="var(--soft-blue-white)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle
                cx="32"
                cy="32"
                r="6"
                stroke="var(--soft-blue-white)"
                strokeWidth="3"
              />
            </svg>
          </div>
        )}

        {/* Category Badge */}
        <div
          className="absolute bottom-0 left-3 px-3 py-1"
          style={{
            backgroundColor: 'rgba(26, 111, 191, 0.9)',
            borderRadius: '99px',
            transform: 'translateY(50%)',
          }}
        >
          <span
            style={{
              fontSize: '11px',
              color: 'white',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col justify-between" style={{ height: 'calc(340px - 160px)' }}>
        <div>
          {/* Test Name */}
          <h3
            className="mb-2 line-clamp-2"
            style={{
              fontSize: '17px',
              fontWeight: '600',
              color: 'var(--dark-navy)',
              lineHeight: '1.3',
            }}
          >
            {name}
          </h3>

          {/* Badges Row */}
          <div className="flex gap-2 mb-3 flex-wrap">
            <span
              className="px-2 py-1"
              style={{
                fontSize: '10px',
                backgroundColor: 'var(--badge-bg)',
                color: 'var(--primary-blue)',
                borderRadius: '99px',
                fontWeight: '500',
              }}
            >
              {sampleType}
            </span>
            <span
              className="px-2 py-1"
              style={{
                fontSize: '10px',
                backgroundColor: 'var(--badge-bg)',
                color: 'var(--primary-blue)',
                borderRadius: '99px',
                fontWeight: '500',
              }}
            >
              {reportTime}
            </span>
          </div>

          {/* Price Block */}
          <div className="flex items-baseline gap-2 mb-2">
            {originalPrice && (
              <span
                style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'line-through',
                }}
              >
                ₹{originalPrice}
              </span>
            )}
            <span
              style={{
                fontSize: '22px',
                fontWeight: '700',
                color: 'var(--primary-blue)',
              }}
            >
              ₹{price}
            </span>
            {savings > 0 && (
              <span
                className="px-2 py-0.5"
                style={{
                  fontSize: '11px',
                  backgroundColor: 'var(--savings-bg)',
                  color: 'var(--success-green)',
                  borderRadius: '99px',
                  fontWeight: '600',
                }}
              >
                Save ₹{savings}
              </span>
            )}
          </div>
        </div>

        {/* WhatsApp Button */}
        <button
          className="w-full flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
          style={{
            height: '40px',
            backgroundColor: 'var(--whatsapp-green)',
            color: 'white',
            borderRadius: '0 0 12px 12px',
            fontSize: '14px',
            fontWeight: '600',
            marginLeft: '-24px',
            marginRight: '-24px',
            marginBottom: '-24px',
          }}
        >
          <MessageCircle size={16} />
          Book on WhatsApp
        </button>
      </div>
    </div>
  );
}
