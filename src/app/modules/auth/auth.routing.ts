import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path:'',
    component:AuthComponent,
    children:[
      { path: '', redirectTo: 'login', pathMatch: 'full', },
      { path: 'login', component: LoginComponent}
    ]
  }
];

export const AuthRoutes = RouterModule.forChild(routes);
