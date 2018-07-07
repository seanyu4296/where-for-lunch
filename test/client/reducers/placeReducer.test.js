import placeReducer, {
  initialState,
} from '../../../client/reducers/placeReducer';
import {
  fetchPlaceSuccess,
  fetchPlaceError,
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
  describe('After Fetch Place Error', () => {
    test('should return state with error and fetching as false', () => {
      const state = placeReducer(initialState, fetchPlaceError('fake error'));
      expect(state.fetching).toEqual(false);
      expect(state.error).toBeTruthy();
    });
  });
});
