import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './SignIn.component';

const routes: Routes = [
  { path:'',component:SignInComponent },
];

export const SignInRoutes = RouterModule.forChild(routes);
