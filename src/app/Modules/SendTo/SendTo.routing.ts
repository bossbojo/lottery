import { SendToComponent } from './SendTo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:SendToComponent },
];

export const SendToRoutes = RouterModule.forChild(routes);
