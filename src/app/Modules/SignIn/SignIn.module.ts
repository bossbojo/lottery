import { SharedModule } from './../shared.module';
import { SignInRoutes } from './SignIn.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './SignIn.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CommonModule,
    SignInRoutes
  ],
  declarations: [SignInComponent]
})
export class SignInModule { }
