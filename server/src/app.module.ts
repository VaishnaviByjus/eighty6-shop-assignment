import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import AppController from './app.controller';
import AppService from './app.service';

import PrismaModule from './prisma/prisma.module';
import ApiModule from './api/api.module';
import WeatherService from './weather/weather.service';
import StationService from './station/station.service';
import StationModule from './station/station.module';
import WeatherModule from './weather/weather.module';

@Module({
  imports: [
    PrismaModule,
    HttpModule,
    ApiModule,
    StationModule,
    WeatherModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, WeatherService, StationService],
})
export default class AppModule {}
