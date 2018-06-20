import { ListBuyComponent } from './ListBuy.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:ListBuyComponent },
];

export const ListBuyRoutes = RouterModule.forChild(routes);
