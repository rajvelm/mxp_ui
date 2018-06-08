import { Routes } from '@angular/router';

import { ChargebacksComponent } from './chargebacks.component';

export const ChargebacksRoutes: Routes = [{
  path: '',
  component: ChargebacksComponent,
  data: {
    heading: 'Charge Backs',
    removeFooter: true
  }
}];
