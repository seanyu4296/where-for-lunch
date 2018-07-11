import PLACE_ACTIONS from '../actions/placeActionTypes';
import { REQUEST, SUCCESS, ERROR } from './constants';

export const fetchPlaceRequest = condition => ({
  type: PLACE_ACTIONS.FETCH_PLACE[REQUEST],
  condition,
});

export const fetchPlaceSuccess = place => ({
  type: PLACE_ACTIONS.FETCH_PLACE[SUCCESS],
  place,
});

export const fetchPlaceError = error => ({
  type: PLACE_ACTIONS.FETCH_PLACE[ERROR],
  error,
});

export const fetchPlaceDetailsRequest = id => ({
  type: PLACE_ACTIONS.FETCH_PLACE_DETAILS[REQUEST],
  id,
});
export const fetchPlaceDetailsSuccess = place => ({
  type: PLACE_ACTIONS.FETCH_PLACE_DETAILS[SUCCESS],
  place,
});
export const fetchPlaceDetailsError = error => ({
  type: PLACE_ACTIONS.FETCH_PLACE_DETAILS[ERROR],
  error,
});
