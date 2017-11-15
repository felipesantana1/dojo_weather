import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class WeatherService {

  key: String = '97967f1b44345d4ce37e8f4d84882738'

  constructor(private _http: Http) { }
  
  getForecast(city, callBack){
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}`).subscribe(
      (response) => {
        callBack(response.json());
      },
      (error) => {
        callBack(null);
      }
    )
  }
}
