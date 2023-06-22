import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/auth', 
    pathMatch: 'full'
  },
  { 
    path: 'auth', loadChildren: () => AuthModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  }
