import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { FeesuploadComponent } from './feesupload.component';
import { FeesuploadRoutes } from './feesupload.routing';
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
// HttpClient
import { HttpModule } from "@angular/http";

// ag-grid
import { AgGridModule } from "ag-grid-angular";


@NgModule({
  imports: [CommonModule, 
	RouterModule.forChild(FeesuploadRoutes), 
	DragulaModule, 
	FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    AgGridModule.withComponents([])
],
  declarations: [FeesuploadComponent]
})

export class FeesuploadModule {}
