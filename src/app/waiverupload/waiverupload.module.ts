import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';


import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { WaiveruploadComponent } from './waiverupload.component';
import { WaiveruploadRoutes } from './waiverupload.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(WaiveruploadRoutes), DragulaModule, Ng2SmartTableModule],
  declarations: [WaiveruploadComponent]
})

export class WaiveruploadModule {}
