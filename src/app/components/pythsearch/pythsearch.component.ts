import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PythSrchService } from '../../services/PythSrchService.service';

// @NgModule({
//  declarations: [
//    PythsearchComponent
//    ],
//  imports: [BrowserModule, FormsModule],
//  providers: [ PythsearchComponent ],
//  bootstrap: [ PythsearchComponent ],
// })

@Component({
  selector: 'app-pythsearch',
  templateUrl: './pythsearch.component.html',
  styleUrls: ['./pythsearch.component.css']
})

export class PythsearchComponent implements OnInit {
  pythTicker: any;
  companyRet = {
  bond : '',
  compname : '',
  convexity : '',
  price : '',
  };
  retPythService: any;

  // constructor( public PythSrchInst: PythSrchService ) { }
  constructor(  ) { }
  ngOnInit() {
   this.retPythService = '';
  }

  onPythSubmit() {
    console.log ('hit onsubmit', this.pythTicker);
    return 'Some value';
 // 	console.log( 'this.pythTicker:', this.pythTicker);
 // 	this.PythSrchInst.getTickerDetails(this.pythTicker).subscribe(companyRet => { this.companyRet = companyRet ; });
 // 	this.retPythService = this.companyRet.compname;
   }
}
