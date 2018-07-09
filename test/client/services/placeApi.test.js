import { createPlaceParams } from '../../../client/services/placeApi';

describe('createPlaceParams', () => {
  test('should not have price property if price is not an object', () => {
    expect(createPlaceParams({}).price).toBeUndefined();
  });
  test('should return string for price that contain items delimited by ","', () => {
    const condition = {
      price: {
        1: true,
        2: true,
        3: true,
      },
    };
    const p = createPlaceParams(condition).price;
    expect(typeof p === 'string').toEqual(true);
    expect(p.split(',').length).toEqual(
      Object.keys(condition.price).filter(k => condition.price[k]).length,
    );
  });
  test('should not contain error or fetching property', () => {
    const condition = {
      fetching: true,
      error: 'Test error',
    };
    const params = createPlaceParams(condition);
    expect(params.error).toBeUndefined();
    expect(params.fetching).toBeUndefined();
  });
});
