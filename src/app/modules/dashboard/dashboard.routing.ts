import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from 'src/app/components/lista/lista.component';
import { CardInfoComponent } from 'src/app/components/card-info/card-info.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

export const DashboardRoutes = RouterModule.forChild(routes);
