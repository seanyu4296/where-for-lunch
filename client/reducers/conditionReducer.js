// import { handleActions } from 'redux-actions';
import CONDITION_ACTIONS from 'actions/conditionActionTypes';
import { REQUEST, SUCCESS, ERROR } from '../actions/constants';

const initialState = {
  radius: 500,
  latitude: null,
  longitude: null,
};
/* Selectors */
export const hasCompleteConditions = (state) => {
  return state && state.radius && state.latitude && state.longitude;
};

/*  */
const conditionReducer = (state = initialState, action) => {
  switch (action.type) {
  case CONDITION_ACTIONS.SET_RADIUS: {
    return { ...state, radius: action.radius };
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

/* const conditionReducer = handleActions(
  {
    [actionTypes.SET_RADIUS](state, action) {
      return { ...state, radius: action.payload };
    },
    [actionTypes.SET_LAT_LNG](state, action) {
      const { latitude, longitude } = action.payload;
      return { ...state, latitude, longitude };
    },
  },
  initialState,
);
 */
export default conditionReducer;
