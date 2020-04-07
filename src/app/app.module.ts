import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
//import { MatSelectModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { SetWeatherComponent } from './set-weather/set-weather.component';
import { WeatherAtmComponent } from './weather-atm/weather-atm.component';
import {WeatherAppService} from '../app/weather-app.service';
import {WeatherHttpService}from '../app/weather-http.service';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    SetWeatherComponent,
    WeatherAtmComponent
  ],
  imports: [
    BrowserModule,
       AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
       BrowserAnimationsModule
   
  ],
  providers: [
    WeatherAppService,
    WeatherHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
