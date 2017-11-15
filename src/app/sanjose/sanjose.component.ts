import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  humidity;
  temp_avg;
  temp_max;
  temp_min;
  status;

  constructor(private _weather: WeatherService) {
    this._weather.getForecast("San Jose, CA", (forecast)=>{
      this.humidity = forecast.main.humidity;
      this.temp_avg = Math.floor((forecast.main.temp-273.15)*9/5+32);
      this.temp_max = Math.floor((forecast.main.temp_max-273.15)*9/5+32);
      this.temp_min = Math.floor((forecast.main.temp_min-273.15)*9/5+32);
      this.status = forecast.weather;
    })
  }

  ngOnInit() {
  }

}
