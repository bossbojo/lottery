import { ListBuyingComponent } from './ListBuying.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:ListBuyingComponent },
];

export const ListBuyingRoutes = RouterModule.forChild(routes);
