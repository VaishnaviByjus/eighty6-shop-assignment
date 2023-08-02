import { Injectable, NotFoundException } from '@nestjs/common';

import PrismaService from 'src/prisma/prisma.service';
import StationService from 'src/station/station.service';
import WeatherService from 'src/weather/weather.service';

import { getStationDtoArray } from './utils';

@Injectable()
export default class ApiService {
  constructor(
    private prisma: PrismaService,
    private stationService: StationService,
    private weatherService: WeatherService,
  ) {}

  async create() {
    const bikeStations = await this.stationService.getBikeStations();
    const stationDtoArray = getStationDtoArray(bikeStations);
    await this.prisma.stations.createMany({
      data: stationDtoArray,
    });
    return 'Successfully Added';
  }

  async findAll(createdAt: string) {
    if (!createdAt) {
      throw new NotFoundException('No Data Found');
    }

    const bikeStations = await this.prisma.stations.findMany({
      where: {
        createdAt: {
          gte: createdAt,
        },
      },
    });

    if (bikeStations.length === 0) {
      throw new NotFoundException('No Data Found');
    }

    const at = bikeStations[0]?.createdAt;

    const weather = await this.weatherService.getWeather('Philadelphia');

    return {
      at,
      stations: bikeStations,
      weather,
    };
  }

  async findOne(kioskId: number, createdAt: string) {
    if (!kioskId || !createdAt) {
      throw new NotFoundException('No Data Found');
    }

    const bikeStation = await this.prisma.stations.findFirst({
      where: {
        createdAt: {
          gte: createdAt,
        },
        kioskId,
      },
    });

    if (!bikeStation) {
      throw new NotFoundException('No Data Found');
    }

    const at = bikeStation?.createdAt;

    const weather = await this.weatherService.getWeather('Philadelphia');

    return {
      at,
      station: bikeStation,
      weather,
    };
  }
}
