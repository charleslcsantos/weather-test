export interface Coord {
  lat: number;
  lon: number;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Sys {
  country: string;
}

export interface Clouds {
  all: number;
}

export interface WeatherTypes {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherModel {
  id: number;
  name: string;
  coord: Coord;
  main: Main;
  dt: number;
  wind: Wind;
  sys: Sys;
  rain?: any;
  snow?: any;
  clouds: Clouds;
  weather_types: WeatherTypes[];
}

export interface RootObject {
  message: string;
  cod: string;
  count: number;
  list: WeatherModel[];
}
