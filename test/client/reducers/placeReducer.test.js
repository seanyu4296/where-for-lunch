import placeReducer, {
  initialState,
} from '../../../client/reducers/placeReducer';
import {
  fetchPlaceSuccess,
  fetchPlaceError,
  fetchPlaceRequest,
  fetchPlaceDetailsSuccess,
} from '../../../client/actions/placeActions';

describe('Place Reducer', () => {
  test('Should return the initial state when no action passed', () => {
    expect(placeReducer(undefined, {})).toEqual(initialState);
  });
  describe('After Fetch Place Success', () => {
    test('should return state with fetching as false and error null', () => {
      const state = placeReducer(initialState, fetchPlaceSuccess({}));
      expect(state.fetching).toEqual(false);
      expect(state.error).toBeNull();
    });
  });
  describe('After Fetch Place Request', () => {
    test('should return state with fetching', () => {
      const state = placeReducer(initialState, fetchPlaceRequest());
      expect(state.fetching).toBe(true);
    });
  });
  describe('After Fetch Place Error', () => {
    test('should return state with error , fetching as false and empty data', () => {
      const state = placeReducer(initialState, fetchPlaceError('fake error'));
      expect(state.fetching).toEqual(false);
      expect(state.error).toBeTruthy();
      expect(state.data).toBeNull();
    });
  });
  describe('After Fetch Place Details Success', () => {
    test('should return state with fetching as false and data equal to payload', () => {
      const place = { test: 'place' };
      const state = placeReducer(initialState, fetchPlaceDetailsSuccess(place));
      expect(state.data).toMatchObject(place);
    });
  });
});
