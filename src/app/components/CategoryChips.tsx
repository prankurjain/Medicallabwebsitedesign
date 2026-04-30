import { Heart, Activity, Droplet, TestTube, Stethoscope, Users } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { id: 1, name: 'All Tests', icon: TestTube },
  { id: 2, name: 'Heart Health', icon: Heart },
  { id: 3, name: 'Blood Tests', icon: Droplet },
  { id: 4, name: 'Fitness', icon: Activity },
  { id: 5, name: 'General Health', icon: Stethoscope },
  { id: 6, name: 'Women\'s Health', icon: Users },
];

export function CategoryChips() {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <section
      className="py-12"
      style={{ backgroundColor: 'var(--soft-background)' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <h3
          className="mb-6"
          style={{
            fontSize: '16px',
            color: 'var(--text-primary)',
            fontWeight: '600',
          }}
        >
          Browse by Category
        </h3>

        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2 px-4 py-2 whitespace-nowrap transition-all duration-150 flex-shrink-0"
                style={{
                  height: '40px',
                  borderRadius: '99px',
                  backgroundColor: isActive
                    ? 'var(--primary-blue)'
                    : 'white',
                  border: isActive
                    ? 'none'
                    : '1px solid var(--border-color)',
                  color: isActive ? 'white' : 'var(--dark-navy)',
                  fontSize: '13px',
                  fontWeight: '500',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor =
                      'var(--badge-bg)';
                    e.currentTarget.style.borderColor = 'var(--primary-blue)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }
                }}
              >
                <Icon
                  size={16}
                  style={{
                    color: isActive ? 'white' : 'var(--primary-blue)',
                  }}
                />
                {category.name}
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
