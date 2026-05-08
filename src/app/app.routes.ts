import { Routes } from '@angular/router';
import { RootLayoutComponent } from './layouts/root.component';
import { AdminLayoutComponent } from './layouts/admin-layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: RootLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'tests/:testId',
        loadComponent: () =>
          import('./pages/tests/test-detail.component').then(
            (m) => m.TestDetailComponent
          ),
      },
      {
        path: 'packages/:packageId',
        loadComponent: () =>
          import('./pages/packages/package-detail.component').then(
            (m) => m.PackageDetailComponent
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/auth/patient-login.component').then(
            (m) => m.PatientLoginComponent
          ),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/patient-dashboard.component').then(
            (m) => m.PatientDashboardComponent
          ),
      },
      {
        path: 'bookings/:bookingId',
        loadComponent: () =>
          import('./pages/bookings/booking-detail.component').then(
            (m) => m.BookingDetailComponent
          ),
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pages/not-found/not-found.component').then(
            (m) => m.NotFoundComponent
          ),
      },
    ],
  },
  {
    path: 'admin/login',
    loadComponent: () =>
      import('./pages/auth/admin-login.component').then(
        (m) => m.AdminLoginComponent
      ),
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/admin/admin-dashboard.component').then(
            (m) => m.AdminDashboardComponent
          ),
      },
      {
        path: 'tests',
        loadComponent: () =>
          import('./pages/admin/admin-tests.component').then(
            (m) => m.AdminTestsComponent
          ),
      },
      {
        path: 'tests/new',
        loadComponent: () =>
          import('./pages/admin/add-test.component').then(
            (m) => m.AddTestComponent
          ),
      },
      {
        path: 'tests/edit/:testId',
        loadComponent: () =>
          import('./pages/admin/edit-test.component').then(
            (m) => m.EditTestComponent
          ),
      },
      {
        path: 'packages',
        loadComponent: () =>
          import('./pages/admin/admin-packages.component').then(
            (m) => m.AdminPackagesComponent
          ),
      },
      {
        path: 'packages/new',
        loadComponent: () =>
          import('./pages/admin/add-package.component').then(
            (m) => m.AddPackageComponent
          ),
      },
      {
        path: 'packages/edit/:packageId',
        loadComponent: () =>
          import('./pages/admin/edit-package.component').then(
            (m) => m.EditPackageComponent
          ),
      },
      {
        path: 'bookings',
        loadComponent: () =>
          import('./pages/admin/admin-bookings.component').then(
            (m) => m.AdminBookingsComponent
          ),
      },
      {
        path: 'bookings/new',
        loadComponent: () =>
          import('./pages/admin/add-booking.component').then(
            (m) => m.AddBookingComponent
          ),
      },
      {
        path: 'bookings/edit/:bookingId',
        loadComponent: () =>
          import('./pages/admin/edit-booking.component').then(
            (m) => m.EditBookingComponent
          ),
      },
    ],
  },
];
