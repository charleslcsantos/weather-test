import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherModel } from '../../models/WeatherModels';

const KEY = 'c2fac82d4fbd6e7f51ef418a7706c3ce';
const API_URL = 'http://api.openweathermap.org/data/2.5';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(
    private httpService: HttpClient,
  ) { }

  public getWeatherByCity(location: string): Observable<WeatherModel> {
    const UNIT = 'metric';
    const params = new HttpParams()
    .set('q', location)
    .set('units', UNIT)
    .set('appid', KEY);
    console.log(params);
    return this.httpService.get(`${API_URL}/weather`, { params }) as Observable<WeatherModel>;
  }
}
