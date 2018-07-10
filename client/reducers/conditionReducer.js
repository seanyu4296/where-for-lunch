import CONDITION_ACTIONS from '../actions/conditionActionTypes';
import { REQUEST, SUCCESS, ERROR } from '../actions/constants';

export const initialState = {
  radius: 500,
  latitude: null,
  longitude: null,
};
/* Selectors */
export const hasCompleteConditions = (state) => {
  return !!(state && state.radius && state.latitude && state.longitude);
};

/* Reducer */
const conditionReducer = (state = initialState, action) => {
  switch (action.type) {
  case CONDITION_ACTIONS.SET_PROPERTY: {
    return { ...state, [action.property]: action.value };
  }
  case CONDITION_ACTIONS.FETCH_LAT_LNG[REQUEST]: {
    return { ...state, fetching: true, error: null };
  }
  case CONDITION_ACTIONS.FETCH_LAT_LNG[SUCCESS]: {
    return { ...state, fetching: false, error: null, ...action.payload };
  }
  case CONDITION_ACTIONS.FETCH_LAT_LNG[ERROR]: {
    return { ...state, fetching: false, error: action.error };
  }
  default: {
    return state;
  }
  }
};

export default conditionReducer;
