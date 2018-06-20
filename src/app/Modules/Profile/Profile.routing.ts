import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './Profile.component';

const routes: Routes = [
  { path:'',component:ProfileComponent },
];

export const ProfileRoutes = RouterModule.forChild(routes);
