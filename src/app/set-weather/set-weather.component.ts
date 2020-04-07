import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ FormsModule } from '@angular/forms'
import {City} from '../models/City';
import {WeatherAppService} from '../weather-app.service'
import {ButtonModule} from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';


@Component({
  selector: 'app-set-weather',
  templateUrl: './set-weather.component.html',
  styleUrls: ['./set-weather.component.css']
})
export class SetWeatherComponent implements OnInit {

    myCities : City[] =[];
    myUnits:string[] = [];
    myCity : City = null ;
    myUnit:string =null;
 
  constructor(private router: Router,private WeatherAppService: WeatherAppService,) { }

  goBack()
  {
    
  this.WeatherAppService.settingFlag=true; 
  this.WeatherAppService.title='weather- atm ';
   this.router.navigate(['../']);
  
  }

  ngOnInit(): void { 
   debugger;
  this.myCities.push(new City('281184','Jerusalem'));
  this.myCities.push( new City('293397','Tel-Aviv'));
  this.myCities.push( new City('293703','Rishon LeZiyyon'));
  this.myUnits=['Celsius','Fahrenhiet'];
  this.myUnit =this.WeatherAppService.myCurrentUnit;
  this.myCity= this.WeatherAppService.myCurrentCityAtm;
  
  

  }
save (){

this.WeatherAppService.myCurrentCityAtm=this.myCity;
this.WeatherAppService.myCurrentUnit=this.myUnit;
this.goBack();

}

onOptionsSelected(value:string){

this.myCity = this.myCities.find(c=>c.cityName == value );
}
}
