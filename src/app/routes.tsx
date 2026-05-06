import { createBrowserRouter } from 'react-router';
import { Root } from './layouts/Root';
import { HomePage } from './pages/HomePage';
import { TestDetailPage } from './pages/TestDetailPage';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { LoginPage } from './pages/LoginPage';
import { PatientDashboard } from './pages/PatientDashboard';
import { BookingDetailPage } from './pages/BookingDetailPage';
import { AdminLayout } from './layouts/AdminLayout';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminTests } from './pages/admin/AdminTests';
import { AdminPackages } from './pages/admin/AdminPackages';
import { AdminBookings } from './pages/admin/AdminBookings';
import { AddTest } from './pages/AddTest';
import { AddPackage } from './pages/AddPackage';
import { AddBooking } from './pages/AddBooking';
import { EditTest } from './pages/EditTest';
import { EditPackage } from './pages/EditPackage';
import { EditBooking } from './pages/EditBooking';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'tests/:testId', Component: TestDetailPage },
      { path: 'packages/:packageId', Component: PackageDetailPage },
      { path: 'contact', Component: ContactPage },
      { path: 'login', Component: LoginPage },
      { path: 'dashboard', Component: PatientDashboard },
      { path: 'bookings/:bookingId', Component: BookingDetailPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
  {
    path: '/admin/login',
    Component: AdminLogin,
  },
  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: 'tests', Component: AdminTests },
      { path: 'tests/new', Component: AddTest },
      { path: 'tests/edit/:testId', Component: EditTest },
      { path: 'packages', Component: AdminPackages },
      { path: 'packages/new', Component: AddPackage },
      { path: 'packages/edit/:packageId', Component: EditPackage },
      { path: 'bookings', Component: AdminBookings },
      { path: 'bookings/new', Component: AddBooking },
      { path: 'bookings/edit/:bookingId', Component: EditBooking },
    ],
  },
]);
