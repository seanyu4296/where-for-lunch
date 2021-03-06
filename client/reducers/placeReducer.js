import PLACE_ACTIONS from '../actions/placeActionTypes';
import { REQUEST, SUCCESS, ERROR } from '../actions/constants';

export const initialState = {
  fetching: false,
  error: null,
};
const placeReducer = (state = initialState, action) => {
  switch (action.type) {
  case PLACE_ACTIONS.FETCH_PLACE[REQUEST]: {
    return { ...state, fetching: true };
  }
  case PLACE_ACTIONS.FETCH_PLACE[SUCCESS]: {
    return { ...state, error: null, fetching: false, data: action.place };
  }
  case PLACE_ACTIONS.FETCH_PLACE[ERROR]: {
    return { ...state, fetching: false, data: null, error: action.error };
  }
  default:
    return state;
  }
};
export default placeReducer;
