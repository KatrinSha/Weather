import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  city = [];
  weatherData = {
    temperatureCelsius: 0,
    atmosphericPressurehPa: 0,
    humidity: 0,
    windSpeed: 0,
    windDirection: 0,
    weatherIcon: 0,
    forCity: '',
  }
  subject = new Subject<any>();

  weatherFor(event: any) {
    const domain = 'https://api.airvisual.com';
    const endPoint = '/v2/city';
    const APIKey = '5e72b8e3-974b-4a07-a251-7fd73bbd3e90';
    const citySelected=event.target.textContent;
    const APIParams = {
      city: citySelected,
      state: 'California',
      country: 'USA',
      key: APIKey,
    };
  
    const url = `${domain}${endPoint}`;

    this.http.get(url, { params: APIParams }).subscribe((response: any) => {
        const { data: { current: { weather: { tp, pr, hu, ws, wd, ic } }, city } } = response;
        this.weatherData = {
          temperatureCelsius: tp,
          atmosphericPressurehPa: pr,
          humidity: hu,
          windSpeed: ws,
          windDirection: wd,
          weatherIcon: ic,
          forCity: city,
        }
        this.subject.next(this.weatherData);
      })
  }


}
