import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {City} from '../models/City'
import {WeatherHttpService} from '../weather-http.service'
import {WeatherAppService} from '../weather-app.service'

@Component({
  selector: 'app-weather-atm',
  templateUrl: './weather-atm.component.html',
  styleUrls: ['./weather-atm.component.css']
})
export class WeatherAtmComponent implements OnInit {

  myCity: City;
  mytUnit : string ;
  weatherDescription: string;
  tempertura:string;
  iconId:string;
  fullImagePath:string='https://openweathermap.org/img/w/';
  constructor(private router: Router ,private WeatherHttpService: WeatherHttpService, private WeatherAppService:WeatherAppService ) { }

 
  ngOnInit(): void {
    debugger;
    
    this.myCity = this.WeatherAppService.myCurrentCityAtm;
    this.mytUnit =this.WeatherAppService.myCurrentUnit;
      this.getAllProperties();
   
   

  }
 
  getAllProperties() {
     debugger;
     this.WeatherHttpService.getAllProperties( this.myCity.cityId,this.mytUnit).subscribe(
       (data: any) => {
   debugger ;
        this.weatherDescription = data["weather"][0]["description"];
        this.tempertura =data ["main"]["temp"] ;
         this.iconId=data["weather"][0]["icon"] ; 
         this.fullImagePath = this.fullImagePath + this.iconId + '.png';


       },
       fail => alert("image  not found"));

  }



}
