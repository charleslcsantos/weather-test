import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Scheduler, timer, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherModel } from '../../models/WeatherModels';
import { LoaderService } from '../Loader/loader.service';

const KEY = 'c2fac82d4fbd6e7f51ef418a7706c3ce';
const API_URL = 'http://api.openweathermap.org/data/2.5';
const weather = {};

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(
    private httpService: HttpClient,
    private loaderService: LoaderService
  ) { }

  /**
   * getWeatherByCity
   * @location: string = 'city,country'
   */
  public getWeatherByCity(location: string): Observable<WeatherModel> {
    const UNIT = 'metric';
    const params = new HttpParams()
      .set('q', location)
      .set('units', UNIT)
      .set('appid', KEY);

    return Observable.create(observer => {
      timer(0, 600000).subscribe(
        () => {
          this.httpService.get(`${API_URL}/weather`, { params })
          .subscribe(
            (res: WeatherModel) => {
              if (res) {
                res['updateTime'] = new Date().toLocaleTimeString();
                observer.next(res);
                observer.complete();
                this.cacheWeather(res);
              }
            },
            (error) => {
              observer.error(error);
              observer.complete();
            }
          );
        }
      );
    });
  }

  cacheWeather(w: WeatherModel) {
    weather[w.name] = w;
    localStorage.setItem('weather', JSON.stringify(weather));
  }
}
