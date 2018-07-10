import { call, takeEvery, put } from 'redux-saga/effects';
import { getPlaceIds } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import PLACE_ACTIONS from 'actions/placeActionTypes';
import { REQUEST } from 'actions/constants';
import { fetchPlaceSuccess } from 'actions/placeActions';
import { fetchPlaceError } from '../actions/placeActions';

export function* fetchPlaces(action) {
  try {
    const places = yield call(getPlaceIds, action.condition);
    const randomPlace = getRandom(places);
    yield put(fetchPlaceSuccess(randomPlace));
  } catch (e) {
    yield put(fetchPlaceError(e));
  }
}

function* placeSagas() {
  yield takeEvery(PLACE_ACTIONS.FETCH_PLACE[REQUEST], fetchPlaces);
}

export default placeSagas;
