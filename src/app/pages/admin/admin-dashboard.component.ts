import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({selector:'app-admin-dashboard',standalone:true,imports:[CommonModule,MatCardModule],template:`<div class="grid"><mat-card><mat-card-title>Tests</mat-card-title></mat-card><mat-card><mat-card-title>Packages</mat-card-title></mat-card><mat-card><mat-card-title>Bookings</mat-card-title></mat-card></div>`,styles:[`.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}`]})
export class AdminDashboardComponent{}
