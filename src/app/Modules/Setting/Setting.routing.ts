import { SettingComponent } from './Setting.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:SettingComponent },
];

export const SettingRoutes = RouterModule.forChild(routes);
