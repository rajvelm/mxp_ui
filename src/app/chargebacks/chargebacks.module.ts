import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { ChargebacksComponent } from './chargebacks.component';
import { ChargebacksRoutes } from './chargebacks.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ChargebacksRoutes), DragulaModule],
  declarations: [ChargebacksComponent]
})

export class ChargebacksModule {}
