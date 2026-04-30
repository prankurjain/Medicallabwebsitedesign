import { MessageCircle } from 'lucide-react';

export function WhatsAppFAB() {
  return (
    <>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 flex items-center justify-center transition-all duration-200 hover:scale-110"
        style={{
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'var(--whatsapp-green)',
          boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
        }}
      >
        <MessageCircle size={28} color="white" />

        {/* Pulse Ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: 'var(--whatsapp-green)',
            animation: 'pulseRing 2.5s ease-out infinite',
          }}
        />
      </a>

      <style>{`
        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .fixed {
            width: 56px !important;
            height: 56px !important;
            bottom: 16px !important;
            right: 16px !important;
          }
        }
      `}</style>
    </>
  );
}
