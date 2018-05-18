import { TestBed, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('WeatherService', () => {
  let service: WeatherService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService],
      imports: [HttpClientModule]
    });

    service = TestBed.get(WeatherService);
  });

  it('should be created', inject([WeatherService], (s: WeatherService) => {
    expect(s).toBeTruthy();
  }));


  it('should return information about the city weather', () => {
    const city = 'Urubici, br';
    service.getWeatherByCity(city).subscribe(r => {
      console.log(r);
    });
  });
});
