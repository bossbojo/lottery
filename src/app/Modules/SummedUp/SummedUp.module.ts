import { SummedUpRoutes } from './SummedUp.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummedUpComponent } from './SummedUp.component';

@NgModule({
  imports: [
    CommonModule,
    SummedUpRoutes
  ],
  declarations: [SummedUpComponent]
})
export class SummedUpModule { }
