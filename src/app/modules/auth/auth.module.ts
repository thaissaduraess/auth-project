import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing';
import { RegisterComponent } from 'src/app/components/register/register.component';

@NgModule({
  imports: [CommonModule, AuthRoutes],
  declarations: [AuthComponent, RegisterComponent],
})
export class AuthModule {}
