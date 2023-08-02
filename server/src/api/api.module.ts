import { Module } from '@nestjs/common';

import PrismaModule from 'src/prisma/prisma.module';
import StationModule from 'src/station/station.module';
import WeatherModule from 'src/weather/weather.module';
import ApiController from './api.controller';
import ApiService from './api.service';

@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports: [PrismaModule, StationModule, WeatherModule],
})
export default class ApiModule {}
