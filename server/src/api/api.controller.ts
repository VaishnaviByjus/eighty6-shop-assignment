import { Controller, Get, Post, Param, Query } from '@nestjs/common';
import ApiService from './api.service';

@Controller('api/v1')
export default class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('indego-data-fetch-and-store-it-db')
  create() {
    return this.apiService.create();
  }

  @Get('stations')
  findAllByCreatedAt(@Query('at') createdAt: string) {
    return this.apiService.findAll(createdAt);
  }

  @Get('stations/:kioskId')
  findByKioskId(
    @Param('kioskId') kioskId: number,
    @Query('at') createdAt: string,
  ) {
    return this.apiService.findOne(+kioskId, createdAt);
  }
}
