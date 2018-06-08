import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule}  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { InventoryComponent } from './inventory.component';


import { InventoryRoutes } from './inventory.routing';

@NgModule({
imports: [
CommonModule, 
RouterModule.forChild(InventoryRoutes), 
DragulaModule, 
FormsModule, 
HttpModule,
Ng2SmartTableModule],
  declarations: [InventoryComponent],
 // bootstrap: [InventoryComponent]
})

export class InventoryModule {}
