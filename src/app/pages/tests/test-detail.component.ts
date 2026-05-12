import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({selector:'app-test-detail',standalone:true,imports:[CommonModule,MatCardModule],template:`<div class="page"><mat-card><mat-card-title>Test Details</mat-card-title><mat-card-content>Viewing test: {{testId}}</mat-card-content></mat-card></div>`,styles:[`.page{max-width:1100px;margin:96px auto 40px;padding:0 16px}`]})
export class TestDetailComponent{testId=this.route.snapshot.paramMap.get('testId');constructor(private route:ActivatedRoute){}}
