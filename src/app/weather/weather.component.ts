import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  area = 'rockville';
  city = '';
  data: any = '';
  weatherData: any = [];
  constructor(private WeatherService: WeatherService){
    this.findArea();
  }

  findArea(){
    this.city = this.area;
    if (this.city) {
      this.WeatherService.findWeather(this.city).subscribe(
        response => {
          this.data = response;
          console.log(this.data); // Handle the response data
        },
        error => {
          this.data = "Couldnt find the City: " + this.city;
          console.error('There was an error!', error);
          return;
        }
      );
      this.getWeather();
    }else{
      this.data = "Enter a city";
      return
    }
  }

  getWeather(){
    this.weatherData.push(this.data.list[0]);
    for(let i = 1; i < this.data.list.length; i++){

      let timeStamp = this.data.list[i].dt_txt.split(' ');

      if(timeStamp[1][0] === '0' && timeStamp[1][1] === '0'){

        this.weatherData.push(this.data.list[i]);

      }
    }
    
  }
}
