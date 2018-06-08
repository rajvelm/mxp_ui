import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { ApprovalsComponent } from './approvals.component';
import { ApprovalsRoutes } from './approvals.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ApprovalsRoutes), DragulaModule],
  declarations: [ApprovalsComponent]
})

export class ApprovalsModule {}
