import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherHttpService {

  constructor(private HttpClient:HttpClient ) { }

   getAllProperties(cityId:string ,needUnit :string ) : Observable<any> {
    
    let url = 'https://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&units=' + needUnit  + '&appId=4d123267c556a96c4b25845875c2199b';
   
    return this.HttpClient.get(url);
 
 }
}
