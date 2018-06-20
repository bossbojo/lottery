import { ProLongRoutes } from './ProLong.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProLongComponent } from './ProLong.component';

@NgModule({
  imports: [
    CommonModule,
    ProLongRoutes
  ],
  declarations: [ProLongComponent]
})
export class ProLongModule { }
