import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export default class WeatherService {
  constructor(private httpService: HttpService) {}

  async getWeather(cityName: string) {
    try {
      const observable = this.httpService.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPEN_WEATHER_API_KEY}`,
      );

      const { data } = await firstValueFrom(observable);
      return data;
    } catch (error) {
      return {};
    }
  }
}
