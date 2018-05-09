import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, 
  {
    path: 'onboarding',
    loadChildren: './onboarding/onboarding.module#OnboardingModule'
  },
  {
    path: 'inventory',
    loadChildren: './inventory/inventory.module#InventoryModule'
  },
  {
    path: 'client',
    loadChildren: './client/client.module#ClientModule'
  }
  ]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }, {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }]
}, {
  path: '**',
  redirectTo: 'error/404'
}];

