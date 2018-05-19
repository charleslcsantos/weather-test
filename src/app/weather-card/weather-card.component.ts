import { Component, OnInit, Output, Input, ViewEncapsulation } from '@angular/core';
import { WeatherModel } from '../models/WeatherModels';
import { WeatherService } from '../services/Weather/weather.service';
import { Observable } from 'rxjs';

enum WEATHER_TEMP_STATES {
  COLD = 'cold',
  HOT = 'hot',
  REGULAR = 'regular'
}

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherCardComponent implements OnInit {
  @Input() isFeatured: boolean;
  @Input() city;
  weatherTempState: string;
  cityWeather: WeatherModel;

  constructor(
    private weatherService: WeatherService,
  ) {
    this.isFeatured = false;
  }

  ngOnInit() {
    if (this.city) {
      this.getWeather(this.city);
    }
  }

  getWeather(param) {
    this.weatherService.getWeatherByCity(param.name).subscribe(
      (weather: WeatherModel) => {
        this.cityWeather = weather;
        this.weatherTempState = this.getTempStyle(this.cityWeather);
      }
    );
  }

  getTempStyle(w: WeatherModel) {
    if (w && w.main) {
      const temp = w.main.temp;
      if (temp <= 5) {
        return 'weather_cold';
      } else if (temp >= 26) {
        return 'weather_hot';
      } else {
        return 'weather_regular';
      }
    }
  }
}
