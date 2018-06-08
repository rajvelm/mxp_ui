import { Routes } from '@angular/router';

import { ApprovalsComponent } from './approvals.component';

export const ApprovalsRoutes: Routes = [{
  path: '',
  component: ApprovalsComponent,
  data: {
    heading: 'Approvals',
    removeFooter: true
  }
}];
