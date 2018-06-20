import { CheckLotteryRoutes } from './CheckLottery.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckLotteryComponent } from './CheckLottery.component';

@NgModule({
  imports: [
    CommonModule,
    CheckLotteryRoutes
  ],
  declarations: [CheckLotteryComponent]
})
export class CheckLotteryModule { }
