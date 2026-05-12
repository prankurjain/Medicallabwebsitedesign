import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({selector:'app-admin-tests',standalone:true,imports:[CommonModule,MatCardModule],template:`<mat-card><mat-card-title>Manage Tests</mat-card-title></mat-card>`})
export class AdminTestsComponent{}
@Component({selector:'app-admin-packages',standalone:true,imports:[CommonModule,MatCardModule],template:`<mat-card><mat-card-title>Manage Packages</mat-card-title></mat-card>`})
export class AdminPackagesComponent{}
@Component({selector:'app-admin-bookings',standalone:true,imports:[CommonModule,MatCardModule],template:`<mat-card><mat-card-title>Manage Bookings</mat-card-title></mat-card>`})
export class AdminBookingsComponent{}
@Component({selector:'app-add-test',standalone:true,imports:[CommonModule,MatCardModule],template:`<mat-card><mat-card-title>Add Test</mat-card-title></mat-card>`})
export class AddTestComponent{}
@Component({selector:'app-add-package',standalone:true,imports:[CommonModule,MatCardModule],template:`<mat-card><mat-card-title>Add Package</mat-card-title></mat-card>`})
export class AddPackageComponent{}
@Component({selector:'app-add-booking',standalone:true,imports:[CommonModule,MatCardModule],template:`<mat-card><mat-card-title>Add Booking</mat-card-title></mat-card>`})
export class AddBookingComponent{}
@Component({selector:'app-edit-test',standalone:true,imports:[CommonModule,MatCardModule],template:`<mat-card><mat-card-title>Edit Test</mat-card-title></mat-card>`})
export class EditTestComponent{}
@Component({selector:'app-edit-package',standalone:true,imports:[CommonModule,MatCardModule],template:`<mat-card><mat-card-title>Edit Package</mat-card-title></mat-card>`})
export class EditPackageComponent{}
@Component({selector:'app-edit-booking',standalone:true,imports:[CommonModule,MatCardModule],template:`<mat-card><mat-card-title>Edit Booking</mat-card-title></mat-card>`})
export class EditBookingComponent{}
@Component({selector:'app-not-found',standalone:true,imports:[CommonModule,MatCardModule],template:`<div style='max-width:720px;margin:120px auto'><mat-card><mat-card-title>Page not found</mat-card-title></mat-card></div>`})
export class NotFoundComponent{}
