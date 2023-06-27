import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { ListaComponent } from 'src/app/components/lista/lista.component';
import { CardInfoComponent } from 'src/app/components/card-info/card-info.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, DashboardRoutes],
  declarations: [
    DashboardComponent,
    ListaComponent,
    CardInfoComponent,
    NavbarComponent,
    SidebarComponent,
  ],
})
export class DashboardModule {}
