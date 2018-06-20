import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './Notification.component';
import { NotificationRoutes } from './Notification.routing';

@NgModule({
  imports: [
    CommonModule,
    NotificationRoutes
  ],
  declarations: [NotificationComponent]
})
export class NotificationModule { }
