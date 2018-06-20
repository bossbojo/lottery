import { Routes, RouterModule } from '@angular/router';
import { ProLongComponent } from './ProLong.component';

const routes: Routes = [
  { path:'',component:ProLongComponent },
];

export const ProLongRoutes = RouterModule.forChild(routes);
