import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [ PythSrchService ],
  imports: [
    HttpModule,
    HttpClientModule
  ]
})
@Injectable()

export class PythSrchService {
  PythApi= 'http://127.0.0.1:5002/PythSearch';
  retPythService: any;

  constructor( public http: Http )  {
 // this.retPythService='';
  }

  SearchTest()  {
     console.log( 'Hit PythSrchService' );
     return( 'FAKETICKER' );
  }

   getTickerDetails(PassTicker)  {
     this.retPythService = `${this.PythApi}\/${PassTicker} `;
     console.log('api call:', this.retPythService);
     // console.log( 'service call:' , this.http.get(this.retPythService).map(res => res.json()));
     return this.http.get(this.retPythService).map(res => res.json());
   }

  // getTickerDetails(PassTicker) {
  //   return PassTicker;
  // }

}


