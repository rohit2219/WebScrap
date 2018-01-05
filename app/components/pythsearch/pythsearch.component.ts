import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PythSrchService } from '../../services/PythSrchService.service';

 @NgModule({
  declarations: [
    PythsearchComponent
    ],
  imports: [BrowserModule, FormsModule],
  providers: [ PythsearchComponent ],
  bootstrap: [ PythsearchComponent ],
 })

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
  errMsg: string;
  constructor( public PythSrchInst: PythSrchService ) {
  //  this.PythSrchInst.getTickerDetails(this.pythTicker).subscribe(
  //    retPythService =>  {this.retPythService = retPythService ; } );

  }
  ngOnInit() {  }

  onPythSubmit() {
    console.log ('hit onsubmit', this.pythTicker);
  // try 1 WORKS !!!!
    this.PythSrchInst.getTickerDetails(this.pythTicker).subscribe(
    retPythService =>  console.log('retpthlog', retPythService) );
    // try 2 works
    this.PythSrchInst.getTickerDetails(this.pythTicker).subscribe(
      retPythService =>  {
        this.retPythService = retPythService ;
        this.companyRet = this.retPythService;
        console.log('thisretpythservice in component :' , this.retPythService);
      });

    console.log('thisretpythservice in component :' , this.retPythService);
    console.log('compantret.compname in component:' , this.companyRet );

      }
}

      // try 2 does not work
  //  this.PythSrchInst.getTickerDetails(this.pythTicker).subscribe(
  //    retPythService =>  this.retPythService = retPythService);
  // try 3 did not work
  //  this.PythSrchInst.getTickerDetails(this.pythTicker).subscribe(
  //    retPythService =>  this.retPythService.push(retPythService) );
  // try 4
   // this.PythSrchInst.getTickerDetails(this.pythTicker).subscribe(
   //   retPythService =>  this.companyRet );
   //   this.PythSrchInst.getTickerDetails(this.pythTicker).subscribe(this.retPythService );
    // this.companyRet = this.retPythService;
      // this.SearchInst.getUsers().subscribe(users => { this.users = users });
    // this.PythSrchInst.getTickerDetails(this.pythTicker).subscribe(companyRet => { this.companyRet = companyRet ; });
