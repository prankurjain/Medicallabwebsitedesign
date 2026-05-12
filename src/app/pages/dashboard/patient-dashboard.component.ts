import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({selector:'app-patient-dashboard',standalone:true,imports:[CommonModule,MatCardModule],template:`<div class="page grid"><mat-card><mat-card-title>Reports</mat-card-title></mat-card><mat-card><mat-card-title>Bookings</mat-card-title></mat-card></div>`,styles:[`.page{max-width:1100px;margin:96px auto 40px;padding:0 16px}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}`]})
export class PatientDashboardComponent{}
