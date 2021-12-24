import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SelectComponent } from './select/select.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'ng-select',
    component:  SelectComponent
  }, {
    path: "",
    component:  HomePageComponent
  },
  
  {
    path: 'weather-data/:city',
    component: WeatherDataComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}
)
export class AppRoutingModule { }
