import { Component, OnInit } from '@angular/core';
import { CurrentWeatherService } from '../services/current-weather.service';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
  
  
export class CurrentWeatherComponent implements OnInit {
  
  city: string;
  description : string;
  cityName:string;
  icon:string;
  humidity:number;
  sunriseTime:Date;
  sunsetTime:Date;
  state:string;
  pressure:number;
  tempMin:number;
  date:Date;
  tempMax;
  temp:number;
  speed:number;
  capitals = [];
  cardCity;
  show:boolean=false;
  constructor(private wS: CurrentWeatherService,public http: HttpClient) {
   }
   
  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/all').pipe((first())).subscribe((countriesList: Array<any>) => {
      countriesList.forEach((country: any) => {
        if (country.capital.length) {
          this.capitals.push(country.capital);
        }
      });
      this.capitals.sort();
    });
   }
   

  open(city:string) {
    
    if (this.capitals.includes(city)) {
      this.wS.getWeatherByCityName(this.city).subscribe(
        (data:any) => {
           this.description=data.weather[0].description;
           this.cityName=this.city;
           this.icon=data.weather[0].icon;
           this.state=data.weather[0].main
           this.humidity=data.main.humidity;
           this.tempMin=Math.ceil(Number(data.main.temp_min));
           this.tempMax=Math.ceil(Number(data.main.temp_max));
           this.temp=Math.ceil(Number(data.main.temp));
           this.speed=data.wind.speed;
           this.pressure=data.main.pressure;
           this.sunriseTime= new Date(data.sys.sunrise * 1000);
           this.sunsetTime=new Date(data.sys.sunset * 1000);
        }
      )
      this.show=true;
    }
  }
 




}
