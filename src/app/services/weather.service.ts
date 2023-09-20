import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient) {} 

  getWeatherData(cityName: string): Observable<WeatherData> {
    const url = `${environment.weatherApiBaseUrl}?q=${cityName}&appid=${environment.apiKey}&units=metric`;
    return this.http.get<WeatherData>(url);
  }
  
}
