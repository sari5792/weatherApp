import { Component } from '@angular/core';
import { Router } from "@angular/router";
import{ WeatherAppService}from './weather-app.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  settingFlag:boolean=true;
 
  constructor(private router: Router, public WeatherAppService:WeatherAppService){

  }
  
  rout()
   {  
     this.WeatherAppService.settingFlag=false;
     this.WeatherAppService.title='setting';
      this.router.navigate(['/SetWeather']);
   }
   getSettingFlag(){
    return this.WeatherAppService;
   }
}
