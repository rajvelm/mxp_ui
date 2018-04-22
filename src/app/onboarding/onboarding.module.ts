import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { OnboardingComponent } from './onboarding.component';
import { OnboardingRoutes } from './onboarding.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(OnboardingRoutes), DragulaModule],
  declarations: [OnboardingComponent]
})

export class OnboardingModule {}
