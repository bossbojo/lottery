import { NotificationComponent } from './Notification.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:NotificationComponent },
];

export const NotificationRoutes = RouterModule.forChild(routes);
