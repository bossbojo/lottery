import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './Setting.component';
import { SettingRoutes } from './Setting.routing';

@NgModule({
  imports: [
    CommonModule,
    SettingRoutes
  ],
  declarations: [SettingComponent]
})
export class SettingModule { }
