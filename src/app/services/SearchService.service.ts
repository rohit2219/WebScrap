import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export interface IHash { [details: string] : string }

@Injectable()
export class SearchService {

  constructor( public http:Http ) { }
  /* Search Test Function*/
  SearchTest()
  {
     console.log("Hit searchservice")
     return("FAKETICKER")
  }
  
  getUsers()
  {
	return this.http.get('https://jsonplaceholder.typicode.com/users')
	.map(res => res.json());
  }
  
  addUser(user){
        return this.http.post('http://jsonplaceholder.typicode.com/users', user)
            .map(res => res.json());
    }
 
  SubmitTicker(TickerSymbol)
  {
    console.log("Ticker Passed:",TickerSymbol);
    let MyHash: IHash = {};
    MyHash["IBM"] = "Intl Business Mach|100";
    MyHash["TSLA"] = "Tesla Motors|102";
    MyHash["GENM"] = "General Motors|102";
    MyHash["FAST"] = "Ferrari|102";     
    var RetDesc = "Did not find ticker";
    console.log(MyHash);
    RetDesc = MyHash[TickerSymbol];
   	     if ( RetDesc == "" )
     	     {
	     console.log("Invalid ticker value:",TickerSymbol);
	     console.log(TickerSymbol);
     	     }
     return  RetDesc;
    }

  
}
