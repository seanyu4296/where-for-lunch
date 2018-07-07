import conditionReducer, {
  initialState,
} from '../../../client/reducers/conditionReducer';
import {
  setRadius,
  fetchLatLngSuccess,
} from '../../../client/actions/conditionActions';

describe('Condition Reducer', () => {
  test('Should return the initial state when no action passed', () => {
    expect(conditionReducer(undefined, {})).toEqual(initialState);
  });
  describe('After Set Radius action', () => {
    test('should return state with Radius', () => {
      const radius = 5;
      const state = conditionReducer(initialState, setRadius(radius));
      expect(state.radius).toEqual(radius);
    });
  });
  describe('After FetchLatLng Success', () => {
    test('should return state with latitude and longitude', () => {
      const coords = {
        latitude: 1,
        longitude: 1,
      };
      const state = conditionReducer(initialState, fetchLatLngSuccess(coords));
      expect(state.latitude).toEqual(coords.latitude);
      expect(state.longitude).toEqual(coords.longitude);
    });
  });
});
