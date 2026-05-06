import { Plus, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const packages = [
  {
    id: 1,
    name: 'Full Body Checkup - Basic',
    category: 'Health Package',
    price: 1299,
    testsCount: 8,
    active: true,
  },
  {
    id: 2,
    name: "Women's Wellness Package",
    category: 'Health Package',
    price: 1799,
    testsCount: 12,
    active: true,
  },
  {
    id: 3,
    name: 'Cardiac Risk Assessment',
    category: 'Heart Health',
    price: 1499,
    testsCount: 10,
    active: true,
  },
  {
    id: 4,
    name: 'Diabetes Screening Package',
    category: 'Diabetes',
    price: 699,
    testsCount: 6,
    active: false,
  },
];

export function AdminPackages() {
  const navigate = useNavigate();
  const [packageList] = useState(packages);

  return (
    <div className="p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1
            style={{
              fontSize: '28px',
              fontWeight: '700',
              color: 'var(--dark-navy)',
              marginBottom: '4px',
            }}
          >
            Manage Packages
          </h1>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
            }}
          >
            Add, edit, or remove health packages
          </p>
        </div>

        <button
          onClick={() => navigate('/admin/packages/new')}
          className="flex items-center gap-2 px-4 transition-all duration-200 hover:opacity-90"
          style={{
            height: '44px',
            borderRadius: '10px',
            backgroundColor: 'var(--primary-blue)',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
          }}
        >
          <Plus size={20} />
          Add New Package
        </button>
      </div>

      {/* Packages Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: 'var(--soft-background)' }}>
                <th
                  className="px-6 py-4 text-left"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                  }}
                >
                  ID
                </th>
                <th
                  className="px-6 py-4 text-left"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                  }}
                >
                  Package Name
                </th>
                <th
                  className="px-6 py-4 text-left"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                  }}
                >
                  Category
                </th>
                <th
                  className="px-6 py-4 text-left"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                  }}
                >
                  Tests
                </th>
                <th
                  className="px-6 py-4 text-left"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                  }}
                >
                  Price
                </th>
                <th
                  className="px-6 py-4 text-left"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                  }}
                >
                  Status
                </th>
                <th
                  className="px-6 py-4 text-center"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {packageList.map((pkg) => (
                <tr
                  key={pkg.id}
                  className="border-b transition-colors duration-200 hover:bg-gray-50"
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  <td className="px-6 py-4">
                    <span
                      style={{
                        fontSize: '14px',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {pkg.id}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      style={{
                        fontSize: '14px',
                        color: 'var(--dark-navy)',
                        fontWeight: '600',
                      }}
                    >
                      {pkg.name}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      style={{
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {pkg.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      style={{
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {pkg.testsCount} tests
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      style={{
                        fontSize: '15px',
                        color: 'var(--dark-navy)',
                        fontWeight: '700',
                      }}
                    >
                      ₹{pkg.price}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={pkg.active}
                        onChange={() => {}}
                        className="sr-only peer"
                      />
                      <div
                        className="w-11 h-6 rounded-full peer transition-all duration-200"
                        style={{
                          backgroundColor: pkg.active
                            ? 'var(--teal-accent)'
                            : 'var(--border-color)',
                        }}
                      >
                        <div
                          className="absolute top-0.5 left-0.5 bg-white rounded-full h-5 w-5 transition-all duration-200"
                          style={{
                            transform: pkg.active
                              ? 'translateX(20px)'
                              : 'translateX(0)',
                          }}
                        />
                      </div>
                    </label>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => navigate(`/admin/packages/edit/${pkg.id}`)}
                        className="p-2 rounded-lg transition-all duration-200 hover:bg-blue-50"
                        style={{
                          color: 'var(--primary-blue)',
                        }}
                        title="Edit"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        className="p-2 rounded-lg transition-all duration-200 hover:bg-red-50"
                        style={{
                          color: 'var(--error-red)',
                        }}
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
