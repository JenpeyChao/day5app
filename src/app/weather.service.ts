import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Root } from './weather.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  private apiUrl = "https://api.openweathermap.org/data/2.5/forecast"
  private apiKey = "26eac10d6f70ed9dada269a5c9ab7788"
  constructor(private http:HttpClient) { }
  findWeather(city: string): Observable<Root>{
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
    return this.http.get<Root>(url);
  }
}
