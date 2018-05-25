import { Component, OnInit, Output, Input, ViewEncapsulation } from '@angular/core';
import { WeatherModel } from '../models/WeatherModels';
import { WeatherService } from '../services/Weather/weather.service';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/Loader/loader.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  showLoader: boolean;
  error: boolean;


  constructor(
    private weatherService: WeatherService
  ) {
    this.isFeatured = false;
    this.showLoader = true;
  }

  ngOnInit() {
    if (this.city) {
      this.getWeather();
    }
  }

  getWeather() {
    this.showLoader = true;

    this.weatherService.getWeatherByCity(this.city.name).subscribe(
      (weather: WeatherModel) => {
        this.error = false;
        this.cityWeather = weather;
        this.weatherTempState = this.getTempStyle(this.cityWeather);
        setTimeout(() => this.showLoader = false, 1500);
      },
      (err) => {
        const cache = JSON.parse(localStorage.getItem('weather'));
        const cityName = this.city.name.split(',')[0];

        this.cityWeather = cache[cityName];

        this.error = true;
        setTimeout(() => this.showLoader = false, 1500);

      }
    );
  }

  reload() {
    this.getWeather();
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
