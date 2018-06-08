import { Component, OnInit, ViewChild} from '@angular/core';
//import { Component, ViewChild } from "@angular/core";
import { Http } from "@angular/http";
//import { CustomLoadingOverlay } from "./custom-loading-overlay.component";
//import { CustomNoRowsOverlay } from "./custom-no-rows-overlay.component";


@Component({
  selector: 'app-feesupload',
  templateUrl: './feesupload.component.html',
  styleUrls: ['./feesupload.component.scss']
})

export class FeesuploadComponent
{
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private frameworkComponents;
  private loadingOverlayComponent;
  private noRowsOverlayComponent;

  constructor(private http: Http) 
  {
    this.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150
      },
      {
        headerName: "Age",
        field: "age",
        width: 90
      },
      {
        headerName: "Country",
        field: "country",
        width: 120
      },
      {
        headerName: "Year",
        field: "year",
        width: 90
      },
      {
        headerName: "Date",
        field: "date",
        width: 110
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 110
      },
      {
        headerName: "Gold",
        field: "gold",
        width: 100
      },
      {
        headerName: "Silver",
        field: "silver",
        width: 100
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 100
      },
      {
        headerName: "Total",
        field: "total",
        width: 100
      }
    ];
   /* this.frameworkComponents = {
      customLoadingOverlay: CustomLoadingOverlay,
      customNoRowsOverlay: CustomNoRowsOverlay
    };
    this.loadingOverlayComponent = "customLoadingOverlay";
    this.noRowsOverlayComponent = "customNoRowsOverlay";*/
  }

  onBtShowLoading() {
    this.gridApi.showLoadingOverlay();
  }

  onBtShowNoRows() {
    this.gridApi.showNoRowsOverlay();
  }

  onBtHide() {
    this.gridApi.hideOverlay();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get("https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json")
      .subscribe(data => {
        params.api.setRowData(data);console.log(data);
      });
  }
}
