import * as moment from 'moment';

// eslint-disable-next-line import/prefer-default-export
export const getStationDtoArray = (response) => {
  const stationDtoArray = response.map(({ properties }) => {
    const { id, coordinates, ...stationDtoObject } = properties;
    return {
      ...stationDtoObject,
      createdAt: moment.utc().format('YYYY-MM-DDTHH:mm:ss'),
    };
  });
  return stationDtoArray;
};
