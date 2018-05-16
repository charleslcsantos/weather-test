import { Component, OnInit, Output, Input, ViewEncapsulation } from '@angular/core';

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
  weatherTempState: string;

  constructor() {
    this.isFeatured = false;
  }

  ngOnInit() {
    this.weatherTempState = `weather_hot`;
  }

}
