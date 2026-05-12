import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({selector:'app-admin-login',standalone:true,imports:[CommonModule,FormsModule,MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule],template:`<div class="page"><mat-card><mat-card-title>Admin Login</mat-card-title><mat-card-content><mat-form-field class="w"><mat-label>Username</mat-label><input matInput [(ngModel)]="username"></mat-form-field><mat-form-field class="w"><mat-label>Password</mat-label><input matInput type="password" [(ngModel)]="password"></mat-form-field><button mat-raised-button color="primary">Login</button></mat-card-content></mat-card></div>`,styles:[`.page{max-width:480px;margin:120px auto;padding:0 16px}.w{width:100%}`]})
export class AdminLoginComponent{username='';password='';}
