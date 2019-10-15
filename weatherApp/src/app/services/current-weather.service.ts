import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {
  private readonly weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=`;
  private readonly appKey = `&&appid=431858962ca7367d88af80fc13b16fae`;


  constructor(private http: HttpClient) { }

  getWeatherByCityName(city: string): Observable<any> {
    return (this.http.get(this.weatherAPI + city + "&units=metric" + this.appKey).pipe((first())));

  }

}
