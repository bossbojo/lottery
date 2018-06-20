import { BookRoutes } from './Book.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './Book.component';

@NgModule({
  imports: [
    CommonModule,
    BookRoutes
  ],
  declarations: [BookComponent]
})
export class BookModule { }
