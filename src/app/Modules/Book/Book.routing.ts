import { BookComponent } from './Book.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:BookComponent },
];

export const BookRoutes = RouterModule.forChild(routes);
