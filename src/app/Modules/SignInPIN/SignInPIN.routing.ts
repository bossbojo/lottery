import { Routes, RouterModule } from '@angular/router';
import { SignInPINComponent } from './SignInPIN.component';

const routes: Routes = [
  { path:'',component:SignInPINComponent },
];

export const SignInPINRoutes = RouterModule.forChild(routes);
