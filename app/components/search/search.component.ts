import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/SearchService.service';

export interface IHash { [details: string] : string }
 
@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [BrowserModule,FormsModule],
  providers: [SearchComponent],
  bootstrap: [SearchComponent],
})

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {
    users:any[];
    user = {
        name:'',
        email:'',
        phone:''
	};
   tempTicker:string;
   servicea:string;
   
   constructor(public SearchInst:SearchService)
   {
   console.log('Constructor for SearchComponent Ran');
   this.SearchInst.getUsers().subscribe(users => { this.users = users }); 
   }
    
   ngOnInit() {
     this.servicea = ""; 
   }

   onSubmit(){
	  var retTicker="";
   	  console.log("tempTicker:",this.tempTicker);
	  this.servicea = this.SearchInst.SubmitTicker(this.tempTicker);
	  
    }

}

