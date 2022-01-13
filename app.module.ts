import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeatherDataComponent } from './weather-data/weather-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { ChildComponent } from './child/child.component';
import { FormatPipe} from './format.pipe';
import { ListPipe} from './list.pipe';
import { WindPipe} from './wind.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WeatherDataComponent,
    PageNotFoundComponent,
    HomePageComponent,
    SelectComponent,
    ChildComponent,
    FormatPipe,
    ListPipe,
    WindPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule
  ],
  providers:  [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
