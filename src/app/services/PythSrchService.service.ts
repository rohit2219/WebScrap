import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';


@NgModule({
  declarations: [ PythSrchService ],
  imports: [
    HttpModule,
    HttpClientModule
  ]
})

@Injectable()
export class PythSrchService {
  PythApi="http://127.0.0.1:5002/PythSearch";
  retPythService: any;

  constructor( public http: Http )
  {
 //this.retPythService="";
  }
  /* Python Search Test Function*/
  SearchTest(){
     console.log( "Hit PythSrchService" )
     return( "FAKETICKER" )
  }

  getTickerDetails(PassTicker)
  {

	this.retPythService = `${this.PythApi}\/${PassTicker} `;
	console.log("api call:", this.retPythService);
	return this.http.get(this.retPythService)
	.map(res => res.json());
  }

}
