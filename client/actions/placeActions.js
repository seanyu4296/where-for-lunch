import PLACE_ACTIONS from './placeActionTypes';
import { REQUEST, SUCCESS, ERROR } from './constants';

export const fetchPlaceRequest = () => ({
  type: PLACE_ACTIONS.FETCH_PLACE[REQUEST],
});

export const fetchPlaceSuccess = place => ({
  type: PLACE_ACTIONS.FETCH_PLACE[SUCCESS],
  place,
});

export const fetchPlaceError = error => ({
  type: PLACE_ACTIONS.FETCH_PLACE[ERROR],
  error,
});
