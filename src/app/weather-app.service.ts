import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{City} from '../app/models/City'
@Injectable({
  providedIn: 'root'
})
export class WeatherAppService {

  
  public settingFlag: boolean= true;
   title: string ='weather- atm ';
   myCurrentCityAtm : City = new City('281184','Jerusalem'); ;
   myCurrentUnit : string = 'Celsius';
 
   constructor() {
  
   }


}
