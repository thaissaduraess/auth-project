import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutes } from './auth.routing';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/components/login/login.component';

@NgModule({
  imports: [CommonModule, AuthRoutes, ReactiveFormsModule, FormsModule],
  declarations: [AuthComponent, RegisterComponent, LoginComponent],
})
export class AuthModule {}
