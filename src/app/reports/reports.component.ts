import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
//import { HttpErrorResponse } from '@angular/http';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

 title = 'JSON to Table Example';
  constructor(private httpService: Http) { }
arrBirds: string [];

  ngOnInit() {
	 this.httpService.get('./assets/data/birds.json').subscribe(
      data => {
		  console.log(data);
        //this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
         // console.log(this.arrBirds[1]);
      }/* ,
      (err: HttpErrorResponse) => {
        console.log (err.message);
      } */
    );
	
	
  }

}
