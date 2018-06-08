import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { DocumentsComponent } from './documents.component';
import { DocumentsRoutes } from './documents.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(DocumentsRoutes), DragulaModule],
  declarations: [DocumentsComponent]
})

export class DocumentsModule {}
