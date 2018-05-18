import { TestBed, inject } from '@angular/core/testing';

import { WeatherCardService } from './weather-card.service';

describe('WeatherCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherCardService]
    });
  });

  it('should be created', inject([WeatherCardService], (service: WeatherCardService) => {
    expect(service).toBeTruthy();
  }));


  it('should return the city weather information', () => {
    const city = 'Urubici, br';
  });
});
