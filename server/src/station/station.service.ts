import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export default class StationService {
  constructor(private httpService: HttpService) {}

  async getBikeStations() {
    try {
      const observable = this.httpService.get(
        'https://bts-status.bicycletransit.workers.dev/phl',
      );

      const { data } = await firstValueFrom(observable);
      return data?.features;
    } catch (error) {
      return [];
    }
  }
}
