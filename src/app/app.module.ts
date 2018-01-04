import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { SearchService } from './services/SearchService.service';
import { PythSrchService } from './services/PythSrchService.service';
import { AboutComponent } from './components/about/about.component';
import { PythsearchComponent } from './components/pythsearch/pythsearch.component';
import { NavbartopComponent } from './components/navbartop/navbartop.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const appRoutes: Routes = [ { path : '', component: HomePageComponent },
{ path : 'testsearch', component: SearchComponent },
{ path : 'about', component: AboutComponent },
{ path : 'PythSearch', component: PythsearchComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AboutComponent,
    PythsearchComponent,
    NavbartopComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

