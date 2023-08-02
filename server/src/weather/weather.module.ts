import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import WeatherService from './weather.service';

@Module({
  providers: [WeatherService],
  exports: [WeatherService],
  imports: [HttpModule],
})
export default class WeatherModule {}
