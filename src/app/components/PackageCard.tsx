import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface PackageCardProps {
  id: string;
  name: string;
  category: string;
  sampleType: string;
  reportTime: string;
  price: number;
  originalPrice?: number;
  testsCount: number;
  parametersCount: number;
  tag?: 'Best Seller' | 'Most Popular' | 'For Women';
  imageUrl?: string;
}

export function PackageCard({
  id,
  name,
  category,
  sampleType,
  reportTime,
  price,
  originalPrice,
  testsCount,
  parametersCount,
  tag,
  imageUrl,
}: PackageCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const savings = originalPrice ? originalPrice - price : 0;

  const getTagColor = () => {
    switch (tag) {
      case 'Best Seller':
        return 'var(--teal-accent)';
      case 'Most Popular':
        return 'var(--warning-amber)';
      case 'For Women':
        return '#EC4899';
      default:
        return 'var(--teal-accent)';
    }
  };

  return (
    <div
      onClick={() => navigate(`/packages/${id}`)}
      className="bg-white overflow-hidden transition-all duration-200 cursor-pointer relative"
      style={{
        minHeight: '380px',
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
      {/* Tag Ribbon */}
      {tag && (
        <div
          className="absolute top-0 right-0 z-10 overflow-hidden"
          style={{
            width: '80px',
            height: '80px',
          }}
        >
          <div
            className="absolute transform rotate-45"
            style={{
              backgroundColor: getTagColor(),
              width: '120px',
              height: '25px',
              top: '15px',
              right: '-30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: '9px',
                color: 'white',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {tag}
            </span>
          </div>
        </div>
      )}

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
              <rect
                x="12"
                y="16"
                width="40"
                height="36"
                rx="4"
                stroke="var(--soft-blue-white)"
                strokeWidth="3"
              />
              <path
                d="M22 28H42M22 38H32"
                stroke="var(--soft-blue-white)"
                strokeWidth="3"
                strokeLinecap="round"
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
      <div className="p-6 flex flex-col">
        <div className="mb-auto">
          {/* Package Name */}
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

          {/* Test Count */}
          <p
            className="mb-3"
            style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
            }}
          >
            Includes {testsCount} tests • {parametersCount} parameters
          </p>

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
          <div className="flex items-baseline gap-2 mb-3">
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
          </div>

          {/* Savings Bar */}
          {savings > 0 && (
            <div
              className="w-full text-center py-2 mb-4"
              style={{
                backgroundColor: 'var(--savings-bg)',
                borderRadius: '6px',
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  color: 'var(--success-green)',
                  fontWeight: '600',
                }}
              >
                You save ₹{savings}
              </span>
            </div>
          )}
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
