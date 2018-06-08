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
    path: 'feesupload',
    loadChildren: './feesupload/fees.module#FeesModule'
  },
  {
    path: 'waiverupload',
    loadChildren: './waiverupload/waiverupload.module#WaiveruploadModule'
  },
  {
    path: 'inventory',
    loadChildren: './inventory/inventory.module#InventoryModule'
  },
  {
    path: 'declaration',
    loadChildren: './declaration/declaration.module#DeclarationModule'
  },
  {
    path: 'chargebacks',
    loadChildren: './chargebacks/chargebacks.module#ChargebacksModule'
  },  
  {
    path: 'approvals',
    loadChildren: './approvals/approvals.module#ApprovalsModule'
  },  
  {
    path: 'reports',
    loadChildren: './reports/reports.module#ReportsModule'
  },
  {
    path: 'documents',
    loadChildren: './documents/documents.module#DocumentsModule'
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

