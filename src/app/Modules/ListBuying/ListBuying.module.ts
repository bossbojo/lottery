import { SharedModule } from './../shared.module';
import { ListBuyingRoutes } from './ListBuying.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBuyingComponent } from './ListBuying.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CommonModule,
    ListBuyingRoutes
  ],
  declarations: [ListBuyingComponent]
})
export class ListBuyingModule { }
