import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { DeclarationComponent } from './declaration.component';
import { DeclarationRoutes } from './declaration.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(DeclarationRoutes), DragulaModule],
  declarations: [DeclarationComponent]
})

export class DeclarationModule {}
