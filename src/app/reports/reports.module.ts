import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { ReportsComponent } from './reports.component';
import { ReportsRoutes } from './reports.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ReportsRoutes), DragulaModule],
  declarations: [ReportsComponent]
})

export class ReportsModule {}
