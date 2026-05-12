import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({selector:'app-admin-shell',standalone:true,imports:[CommonModule,RouterLink,RouterOutlet,MatToolbarModule,MatButtonModule],template:`<mat-toolbar color="primary"><a mat-button routerLink="/admin">Dashboard</a><a mat-button routerLink="/admin/tests">Tests</a><a mat-button routerLink="/admin/packages">Packages</a><a mat-button routerLink="/admin/bookings">Bookings</a></mat-toolbar><div class="wrap"><router-outlet></router-outlet></div>`,styles:[`.wrap{max-width:1200px;margin:20px auto;padding:0 16px}`]})
export class AdminShellComponent{}
