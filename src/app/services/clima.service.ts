import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  key = '742f9909a248cb6835d8ec521804c08d';
  url = 'https://api.openweathermap.org/data/2.5/weather?&appid=';

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any>{
    const URL = this.url + this.key + '&q='+ciudad;
    return this.http.get(URL);
  }
}
