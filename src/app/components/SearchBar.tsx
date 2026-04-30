import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-[720px] mx-auto">
          <div className="relative">
            <Search
              className="absolute left-6 top-1/2 -translate-y-1/2"
              size={24}
              style={{ color: 'var(--primary-blue)' }}
            />
            <input
              type="text"
              placeholder="Search for a test or package..."
              className="w-full pl-16 pr-6 transition-all duration-200 focus:outline-none"
              style={{
                height: '64px',
                borderRadius: '32px',
                border: '1px solid var(--border-color)',
                fontSize: '16px',
                color: 'var(--text-primary)',
                boxShadow: '0 4px 24px rgba(26,111,191,0.12)',
              }}
              onFocus={(e) => {
                e.currentTarget.style.border = '2px solid var(--primary-blue)';
                e.currentTarget.style.boxShadow =
                  '0 4px 32px rgba(26,111,191,0.18)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.border = '1px solid var(--border-color)';
                e.currentTarget.style.boxShadow =
                  '0 4px 24px rgba(26,111,191,0.12)';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
