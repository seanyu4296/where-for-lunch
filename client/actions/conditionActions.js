import CONDITION_ACTIONS from './conditionActionTypes';
import { REQUEST, SUCCESS, ERROR } from './constants';

export const fetchLatLngRequest = () => ({
  type: CONDITION_ACTIONS.FETCH_LAT_LNG[REQUEST],
});

export const fetchLatLngSuccess = payload => ({
  type: CONDITION_ACTIONS.FETCH_LAT_LNG[SUCCESS],
  payload,
});
export const fetchLatLngError = error => ({
  type: CONDITION_ACTIONS.FETCH_LAT_LNG[ERROR],
  error,
});

export const setProperty = (property, value) => ({
  type: CONDITION_ACTIONS.SET_PROPERTY,
  property,
  value,
});
