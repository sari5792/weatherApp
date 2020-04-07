import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import{SetWeatherComponent }from '../app/set-weather/set-weather.component'
 import {WeatherAtmComponent} from '../app/weather-atm/weather-atm.component'
  
  
 



const routes: Routes = [

  {   
    path:'SetWeather',
    component:SetWeatherComponent,

},
{   
  path:'WeatherAtm',
  component:WeatherAtmComponent,

},
{   
  path:'',
  component:WeatherAtmComponent,

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[{provide: APP_BASE_HREF, useValue : '/' }]
  
})
export class AppRoutingModule { }
