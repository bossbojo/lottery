import { CheckLotteryRoutes } from './CheckLottery.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckLotteryComponent } from './CheckLottery.component';
import { SharedModule } from '../shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CommonModule,
    CheckLotteryRoutes
  ],
  declarations: [CheckLotteryComponent]
})
export class CheckLotteryModule { }
