import { Outlet, Link, useLocation } from 'react-router';
import { LayoutDashboard, TestTube, Package, Calendar, LogOut } from 'lucide-react';

const navItems = [
  { path: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/admin/tests', icon: TestTube, label: 'Tests' },
  { path: '/admin/packages', icon: Package, label: 'Packages' },
  { path: '/admin/bookings', icon: Calendar, label: 'Bookings' },
];

export function AdminLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className="w-60 flex-shrink-0 hidden md:flex flex-col"
        style={{
          backgroundColor: 'var(--dark-navy)',
        }}
      >
        {/* Logo */}
        <div className="p-6 border-b" style={{ borderColor: '#1A3D63' }}>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
              }}
            >
              <svg
                width="24"
                height="24"
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
            <span
              className="font-bold"
              style={{
                color: 'white',
                fontSize: '20px',
              }}
            >
              PATHKIND
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-4 transition-all duration-200 relative"
                style={{
                  height: '48px',
                  color: isActive ? 'white' : 'var(--soft-blue-white)',
                  fontSize: '14px',
                  fontWeight: '500',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                  borderRadius: '8px',
                }}
              >
                {isActive && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-r"
                    style={{ backgroundColor: 'var(--teal-accent)' }}
                  />
                )}
                <Icon size={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t" style={{ borderColor: '#1A3D63' }}>
          <Link
            to="/admin/login"
            className="flex items-center gap-3 px-4 transition-all duration-200 hover:bg-white/10"
            style={{
              height: '48px',
              color: 'var(--soft-blue-white)',
              fontSize: '14px',
              fontWeight: '500',
              borderRadius: '8px',
            }}
          >
            <LogOut size={20} />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b h-16 flex items-center px-6 flex-shrink-0" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex items-center justify-between w-full">
            <h1
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: 'var(--dark-navy)',
              }}
            >
              Admin Panel
            </h1>

            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--primary-blue)',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '700',
                }}
              >
                AD
              </div>
              <div>
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--dark-navy)',
                  }}
                >
                  Admin User
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto" style={{ backgroundColor: 'var(--soft-background)' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
