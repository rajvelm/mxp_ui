import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { single, multi } from '../shared/chartData';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.scss']
})
export class FeesComponent {
  rows = [];

  temp = [];

  closeResult: string;

  single: any[];
multi: any[];

// options
showXAxis = true;
showYAxis = true;
gradient = false;
showLegend = false;
showXAxisLabel = true;
tooltipDisabled = false;
xAxisLabel = 'Period';
showYAxisLabel = true;
yAxisLabel = 'USD';
showGridLines = true;
innerPadding = 0;
barPadding = 8;
groupPadding = 16;
roundDomains = false;
maxRadius = 10;
minRadius = 3;

colorScheme = {
  domain: [
    '#0099cc', '#2ECC71', '#4cc3d9'
  ]
};
schemeType = 'ordinal';

  // columns = [
  //   { prop: 'exchangeProduct' },
  //   { prop: 'currency' },
	// { prop: 'documents' },
  //   { prop: 'waiver' }
  // ];
  public fullFeesData:any;
  constructor(private modalService: NgbModal) {
    this.fetch((data) => {
      // cache our list
      this.temp = [...data];
      // push our inital complete list
      this.fullFeesData = data;
      this.filterExchange();
    });

    Object.assign(this, {
      single,
      multi
    });

  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/fees.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateFilter(event) {
    const val = event.target.value;
    // filter our data
    const temp = this.temp.filter(function(d) {


      var filteredResult =( d.exchangeProduct.toLowerCase().indexOf(val) !== -1 || !val) ||(d.currency.toLowerCase().indexOf(val) !== -1 || !val) ;
      return filteredResult;
    });
    // update the rows
    this.rows = temp;
  }

  public filterTextVal:string;
  updateFeeFilter(event) {
    // const val = event.target.value;
    // // filter our data
    // const temp = this.temp.filter(function(d) {
    //   return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    // });
    // // update the rows
    // this.rows = temp;
    console.log(this.filterTextVal);
    let fTextVal  = this.filterTextVal;
    let obj = this.fullFeesData.filter(m => (m.fees).includes(fTextVal));
    this.rows = obj;
    return this.rows;
  }

  //public exchangeFeeDetails: any [];

  //filter product details on name and return productDetails object.
  public subExchangeVal:string = "CBOT";
  filterExchange() {
    console.log(this.subExchangeVal);
    let exchange = this.subExchangeVal;
    let obj = this.fullFeesData.filter(m => m.exchange == exchange);
    this.rows = obj;
    return this.rows;
  }






  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  select(data) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

}
