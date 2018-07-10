import conditionReducer, {
  initialState,
  hasCompleteConditions,
} from '../../../client/reducers/conditionReducer';
import {
  setProperty,
  fetchLatLngSuccess,
} from '../../../client/actions/conditionActions';

describe('Condition Reducer', () => {
  test('Should return the initial state when no action passed', () => {
    expect(conditionReducer(undefined, {})).toEqual(initialState);
  });
  describe('After Set Property Radius', () => {
    test('should return state with Radius', () => {
      const radius = 5;
      const state = conditionReducer(
        initialState,
        setProperty('radius', radius),
      );
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
  describe('Selectors', () => {
    describe('hasCompleteConditions', () => {
      test('should return false if conditions are not complete', () => {
        const noConditions = {};
        const radiusCondition = { radius: 5 };
        const latLongCondition = { latitude: 5, longitude: 5 };
        expect(hasCompleteConditions(noConditions)).toEqual(false);
        expect(hasCompleteConditions(radiusCondition)).toEqual(false);
        expect(hasCompleteConditions(latLongCondition)).toEqual(false);
      });
    });
    test('should return true if conditions are complete', () => {
      const conditions = { radius: 5, latitude: 5, longitude: 5 };
      expect(hasCompleteConditions(conditions)).toEqual(true);
    });
  });
});
