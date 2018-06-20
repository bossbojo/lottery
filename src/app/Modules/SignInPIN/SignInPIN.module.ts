import { SharedModule } from './../shared.module';
import { SignInPINRoutes } from './SignInPIN.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPINComponent } from './SignInPIN.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CommonModule,
    SignInPINRoutes
  ],
  declarations: [SignInPINComponent]
})
export class SignInPINModule { }
