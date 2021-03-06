import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
//import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
//import { ReportsComponent } from './reports/reports.component';
//import { FeesuploadComponent } from './feesupload/feesupload.component';
//import { WaiveruploadComponent } from './waiverupload/waiverupload.component';
//import { DeclarationComponent } from './declaration/declaration.component';
//import { ChargebacksComponent } from './chargebacks/chargebacks.component';
//import { ApprovalsComponent } from './approvals/approvals.component';
//import { DocumentsComponent } from './documents/documents.component';
//import { FeesuploadModule } from './feesupload/feesupload.module';


export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
   // ReportsComponent,
   // FeesuploadComponent,
    //WaiveruploadComponent,
    //DeclarationComponent,
   // ChargebacksComponent,
    //ApprovalsComponent,
    //DocumentsComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpModule,
	//Ng2SmartTableModule,
	TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    NgbModule.forRoot(),
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
