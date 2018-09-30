import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared.module';
import { SummedUpRoutes } from './SummedUp.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummedUpComponent } from './SummedUp.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CommonModule,
    SummedUpRoutes
  ],
  declarations: [SummedUpComponent]
})
export class SummedUpModule { }
