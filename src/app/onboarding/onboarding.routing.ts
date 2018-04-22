import { Routes } from '@angular/router';

import { OnboardingComponent } from './onboarding.component';

export const OnboardingRoutes: Routes = [{
  path: '',
  component: OnboardingComponent,
  data: {
    heading: 'Onboarding',
    removeFooter: true
  }
}];
