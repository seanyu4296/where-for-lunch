import placeReducer, {
  initialState,
} from '../../../client/reducers/placeReducer';
import {
  fetchPlaceSuccess,
  fetchPlaceError,
  fetchPlaceRequest,
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
    test('should return state with empty data and fetching', () => {
      const state = placeReducer(initialState, fetchPlaceRequest());
      expect(state.data).toBeNull();
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
});
