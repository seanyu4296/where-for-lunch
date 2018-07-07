import CONDITION_ACTIONS from './conditionActionTypes';
import { REQUEST, SUCCESS } from './constants';

export const fetchLatLngRequest = () => ({
  type: CONDITION_ACTIONS.FETCH_LAT_LNG[REQUEST],
});

export const fetchLatLngSuccess = payload => ({
  type: CONDITION_ACTIONS.FETCH_LAT_LNG[SUCCESS],
  payload,
});

export const setRadius = radius => ({
  type: CONDITION_ACTIONS.SET_RADIUS,
  radius,
});
