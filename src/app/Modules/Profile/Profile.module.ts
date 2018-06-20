import { SharedModule } from './../shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileRoutes } from './Profile.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './Profile.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CommonModule,
    ProfileRoutes
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
