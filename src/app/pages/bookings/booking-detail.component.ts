import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({selector:'app-booking-detail',standalone:true,imports:[CommonModule,MatCardModule],template:`<div class="page"><mat-card><mat-card-title>Booking Details</mat-card-title><mat-card-content>Viewing booking: {{bookingId}}</mat-card-content></mat-card></div>`,styles:[`.page{max-width:1100px;margin:96px auto 40px;padding:0 16px}`]})
export class BookingDetailComponent{bookingId=this.route.snapshot.paramMap.get('bookingId');constructor(private route:ActivatedRoute){}}
