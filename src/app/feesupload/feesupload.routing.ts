import { Routes } from '@angular/router';

import { FeesuploadComponent } from './feesupload.component';

export const FeesuploadRoutes: Routes = [{
  path: '',
  component: FeesuploadComponent,
  data: {
    heading: 'Fees Upload',
    removeFooter: true
  }
}];
