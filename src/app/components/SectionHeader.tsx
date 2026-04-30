interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  viewAllLink?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
  viewAllLink = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-8 md:mb-12 ${align === 'center' ? 'text-center' : ''} ${
        viewAllLink ? 'flex items-start justify-between' : ''
      }`}
    >
      <div className={align === 'center' ? 'mx-auto max-w-[560px]' : ''}>
        <div
          className={`flex items-center gap-3 mb-2 ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <div
            style={{
              width: '32px',
              height: '2px',
              backgroundColor: 'var(--teal-accent)',
            }}
          />
          <span
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--primary-blue)',
              fontWeight: '500',
            }}
          >
            {label}
          </span>
        </div>

        <h2
          style={{
            fontSize: 'clamp(28px, 4vw, 32px)',
            fontFamily: 'var(--font-sans)',
            fontWeight: '700',
            color: 'var(--dark-navy)',
            marginBottom: subtitle ? '8px' : '0',
          }}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            style={{
              fontSize: '16px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {viewAllLink && (
        <a
          href="#all-tests"
          className="transition-colors duration-200 hover:underline whitespace-nowrap"
          style={{
            fontSize: '14px',
            color: 'var(--primary-blue)',
            fontWeight: '500',
          }}
        >
          View All Tests →
        </a>
      )}
    </div>
  );
}
