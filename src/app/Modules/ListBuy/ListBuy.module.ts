import { SharedModule } from './../shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListBuyRoutes } from './ListBuy.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBuyComponent } from './ListBuy.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CommonModule,
    ListBuyRoutes
  ],
  declarations: [ListBuyComponent]
})
export class ListBuyModule { }
