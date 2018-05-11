import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule}  from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AgGridModule} from "ag-grid-angular";

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { InventoryComponent } from './inventory.component';
import { DetailPanelComponent } from './detail-panel.component';

import { InventoryRoutes } from './inventory.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(InventoryRoutes), DragulaModule, FormsModule, HttpModule, AgGridModule.withComponents([DetailPanelComponent])],
  declarations: [InventoryComponent,DetailPanelComponent],
  bootstrap: [InventoryComponent]
})

export class InventoryModule {}
