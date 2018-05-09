import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbTabsetModule,NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';


import { ClientComponent } from './client.component';
import { ClientRoutes } from './client.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ClientRoutes), NgbTabsetModule],
  declarations: [ClientComponent]
})

export class ClientModule {}
