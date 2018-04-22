import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { InventoryComponent } from './inventory.component';
import { InventoryRoutes } from './inventory.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(InventoryRoutes), DragulaModule],
  declarations: [InventoryComponent]
})

export class InventoryModule {}
