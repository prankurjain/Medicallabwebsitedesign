import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({selector:'app-login',standalone:true,imports:[CommonModule,FormsModule,MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule],template:`<div class="page"><mat-card><mat-card-title>Patient Login</mat-card-title><mat-card-content><mat-form-field appearance="outline" class="w"><mat-label>Phone</mat-label><input matInput [(ngModel)]="phone"></mat-form-field><button mat-raised-button color="primary">Send OTP</button></mat-card-content></mat-card></div>`,styles:[`.page{max-width:480px;margin:120px auto;padding:0 16px}.w{width:100%}`]})
export class LoginComponent{phone='';}
