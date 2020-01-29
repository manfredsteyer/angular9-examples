import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { RoutedComponent } from './routed/routed.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: RoutedComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
