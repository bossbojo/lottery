import { CheckLotteryComponent } from './CheckLottery.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:CheckLotteryComponent },
];

export const CheckLotteryRoutes = RouterModule.forChild(routes);
