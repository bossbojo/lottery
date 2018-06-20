import { Routes, RouterModule } from '@angular/router';
import { SummedUpComponent } from './SummedUp.component';

const routes: Routes = [
  { path:'',component:SummedUpComponent },
];

export const SummedUpRoutes = RouterModule.forChild(routes);
