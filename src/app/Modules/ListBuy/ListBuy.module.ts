import { ListBuyRoutes } from './ListBuy.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBuyComponent } from './ListBuy.component';

@NgModule({
  imports: [
    CommonModule,
    ListBuyRoutes
  ],
  declarations: [ListBuyComponent]
})
export class ListBuyModule { }
