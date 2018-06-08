import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
//import { ClientConfigService } from './client.config.service';
import { ClientConfigModel } from './client.config.model';
import { InventoryModel } from './client.inventory.model';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
	
	settings = {
    mode: 'inline',
    actions: {
        columnTitle: 'Actions',
        add: true,
        edit: true,
        delete: true,
        custom: [],
      },
   /*    add: {
          addButtonContent: '<i class="ion-ios-plus-outline"></i>',
          createButtonContent: '<i class="ion-checkmark"></i>',
          cancelButtonContent: '<i class="ion-close"></i>',
          confirmCreate: true
      },
edit: {
          editButtonContent: '<i class="ion-edit"></i>',
          saveButtonContent: '<i class="ion-checkmark"></i>',
          cancelButtonContent: '<i class="ion-close"></i>',
          confirmSave: true
      },
      delete: {
          deleteButtonContent: '<i class="ion-trash-a"></i>',
          confirmDelete: true
      }, */
    columns: {
    	fieldId: {
        title: 'Id',
        type: 'number',
        show :false
      },
      fieldName: {
        title: 'Field Name',
        type: 'string',
      }, 
      fieldType: {
          title: 'Field Type',
          type: 'html',
           //valuePrepareFunction: (cell, row) => { return row.paymentStatus == 0 ? "String" : "Number" },
          editor: {
            type: 'list',
            config: {
              list: [{ value: 'String', title: 'String' }, { value: 'Number', title: 'Number' }]
            }
          } 
        },
      fieldSize: {
        title: 'Field Size',
        type: 'number',
      },
     
    },
  };

	settingsSummary = {
		    mode: 'inline',
		    actions: {
		        columnTitle: 'Actions',
		        add: false,
		        edit: false,
		        delete: false,
		        custom: [],
		      },
		      add: {
		          addButtonContent: '<i class="ion-ios-plus-outline"></i>',
		          createButtonContent: '<i class="ion-checkmark"></i>',
		          cancelButtonContent: '<i class="ion-close"></i>',
		          confirmCreate: true
		      },
		      edit: {
		          editButtonContent: '<i class="ion-edit"></i>',
		          saveButtonContent: '<i class="ion-checkmark"></i>',
		          cancelButtonContent: '<i class="ion-close"></i>',
		          confirmSave: true
		      },
		      delete: {
		          deleteButtonContent: '<i class="ion-trash-a"></i>',
		          confirmDelete: true
		      },
		    columns: {
		      configName: {
		        title: 'Config Name'
		       // type: 'string',
		      },
		    },
		  };
  source: LocalDataSource = new LocalDataSource();
  sourceSummary: LocalDataSource = new LocalDataSource();
  sourceEdit: LocalDataSource = new LocalDataSource();
  
  constructor() { }

  ngOnInit() {
		
  }
	
  
}



