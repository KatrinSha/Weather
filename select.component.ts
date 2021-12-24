import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  selectedCountry!: any;
  selectedState!: any;
  selectedCity!: any;
  country: any[] = [];
  state: any[] = [];
  city: any[] = [];
  countryName = '';
  stateName = '';
  isLoadingCountry= true;
  isLoadingState= true;
  isLoadingCity= true;

  number04 = [0, 1, 2, 3, 4]
  number59 = [5, 6, 7, 8, 9]
  number1014 = [10, 11, 12, 13, 14]

  selectedNumber04!: number;
  selectedNumber59!: number;
  selectedNumber1014!: number;
  num1 = 0;

  chan($event: any) {
    this.num1 = $event;
    console.log(this.num1 + 'iam in parent')
  }




  weatherData = {
    temperatureCelsius: 0,
    atmosphericPressurehPa: 0,
    humidity: 0,
    windSpeed: 0,
    windDirection: 0,
    weatherIcon: 0,
    forCity: '',
  }

  myImage: string = 'assets/images/';
  Data = new Date();
  Day = this.Data.getDate();
  Month = this.Data.getMonth();
  time = `${this.Day}.${this.Month + 1}`

  constructor(private http: HttpClient) { }

  ngOnInit() {

    const domain = 'https://api.airvisual.com';
    const endPoint = '/v2/countries';
    const APIKey = '5e72b8e3-974b-4a07-a251-7fd73bbd3e90';
    const APIParams = {
      key: APIKey,
    };

    const url = `${domain}${endPoint}`;


    this.http.get(url, { params: APIParams }).pipe(map((response: any) => response.data)).subscribe((list: any) => {
      this.country = list.map((el: any) => el.country);this.isLoadingCountry= false;
    });


    const domain1 = 'https://api.airvisual.com';
    const endPoint1 = '/v2/nearest_city';
    const APIKey1 = '5e72b8e3-974b-4a07-a251-7fd73bbd3e90';
    const APIParams1 = {
      lon: '27.572680',
      lat: '53.907364',
      key: APIKey1,
    };

    const url1 = `${domain1}${endPoint1}`;


    this.http.get(url1, { params: APIParams1 })
      .subscribe((response: any) => {
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
      });





  }

  weatherCountry($event: any) {
    const domain = 'https://api.airvisual.com';
    const endPoint = '/v2/states';
    const APIKey = '5e72b8e3-974b-4a07-a251-7fd73bbd3e90';
    this.countryName = $event;
    const APIParams = {
      country: this.countryName,
      key: APIKey,
    };
    console.log(this.countryName)
    const url = `${domain}${endPoint}`;

    this.http.get(url, { params: APIParams }).pipe(map((response: any) => response.data)).subscribe((list: any) => {
      this.state = list.map((el: any) => el.state);this.selectedState=[];this.selectedCity=[]
      ;
    });
  }

  weatherState($event: any) {
    const domain = 'https://api.airvisual.com';
    const endPoint = '/v2/cities';
    const APIKey = '5e72b8e3-974b-4a07-a251-7fd73bbd3e90';
    this.stateName = $event;
    const APIParams = {
      country: this.countryName,
      state: this.stateName,
      key: APIKey,
    };
    const url = `${domain}${endPoint}`;
    console.log(this.stateName)
    //this.isLoadingState= false;
    this.http.get(url, { params: APIParams }).pipe(map((response: any) => response.data)).subscribe((list: any) => {
      this.city = list.map((el: any) => el.city); this.selectedCity=[]
    });
  }



  weatherCity($event: any) {
    const domain = 'https://api.airvisual.com';
    const endPoint = '/v2/city';
    const APIKey = '5e72b8e3-974b-4a07-a251-7fd73bbd3e90';
    const citySelected = $event;
    const APIParams = {
      city: citySelected,
      state:  this.stateName,
      country: this.countryName,
      key: APIKey,
    };

    const url = `${domain}${endPoint}`;
    console.log(citySelected)
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

    })
  }















}
