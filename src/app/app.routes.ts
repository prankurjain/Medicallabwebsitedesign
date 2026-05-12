import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TestDetailComponent } from './pages/tests/test-detail.component';
import { PackageDetailComponent } from './pages/packages/package-detail.component';
import { BookingDetailComponent } from './pages/bookings/booking-detail.component';
import { LoginComponent } from './pages/auth/login.component';
import { PatientDashboardComponent } from './pages/dashboard/patient-dashboard.component';
import { AdminLoginComponent } from './pages/admin/admin-login.component';
import { AdminShellComponent } from './pages/admin/admin-shell.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard.component';
import { AddBookingComponent, AddPackageComponent, AddTestComponent, AdminBookingsComponent, AdminPackagesComponent, AdminTestsComponent, EditBookingComponent, EditPackageComponent, EditTestComponent, NotFoundComponent } from './pages/admin/simple-list-pages';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tests/:testId', component: TestDetailComponent },
  { path: 'packages/:packageId', component: PackageDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: PatientDashboardComponent },
  { path: 'bookings/:bookingId', component: BookingDetailComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  {
    path: 'admin', component: AdminShellComponent, children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'tests', component: AdminTestsComponent },
      { path: 'tests/new', component: AddTestComponent },
      { path: 'tests/edit/:testId', component: EditTestComponent },
      { path: 'packages', component: AdminPackagesComponent },
      { path: 'packages/new', component: AddPackageComponent },
      { path: 'packages/edit/:packageId', component: EditPackageComponent },
      { path: 'bookings', component: AdminBookingsComponent },
      { path: 'bookings/new', component: AddBookingComponent },
      { path: 'bookings/edit/:bookingId', component: EditBookingComponent },
    ]
  },
  { path: '**', component: NotFoundComponent },
];
