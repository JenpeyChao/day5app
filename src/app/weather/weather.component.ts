import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  area = '';
  city = '';
  data: any = '';
  constructor(private WeatherService: WeatherService){}

  findArea(){
    this.city = this.area;
    if (this.area) {
      this.WeatherService.findWeather(this.area).subscribe(
        response => {
          this.data = response;
          console.log(this.data); // Handle the response data
        },
        error => {
          this.data = "Couldnt find the City:" + this.city;
          console.error('There was an error!', error);
        }
      );
    }
  }
}
