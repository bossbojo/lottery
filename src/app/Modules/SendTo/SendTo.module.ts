import { SendToRoutes } from './SendTo.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendToComponent } from './SendTo.component';

@NgModule({
  imports: [
    CommonModule,
    SendToRoutes
  ],
  declarations: [SendToComponent]
})
export class SendToModule { }
