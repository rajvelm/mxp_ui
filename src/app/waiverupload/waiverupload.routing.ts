import { Routes } from '@angular/router';

import { WaiveruploadComponent } from './waiverupload.component';

export const WaiveruploadRoutes: Routes = [{
  path: '',
  component: WaiveruploadComponent,
  data: {
    heading: 'Waiver Upload',
    removeFooter: true
  }
}];
