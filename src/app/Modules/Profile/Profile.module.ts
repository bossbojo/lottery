import { ProfileRoutes } from './Profile.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './Profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutes
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
