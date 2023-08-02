import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import StationService from './station.service';

@Module({
  providers: [StationService],
  exports: [StationService],
  imports: [HttpModule],
})
export default class StationModule {}
