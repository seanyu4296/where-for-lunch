import { call, takeEvery, put, fork, all } from 'redux-saga/effects';
import { getPlaceIds } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import PLACE_ACTIONS from 'actions/placeActionTypes';
import { REQUEST } from 'actions/constants';
import { fetchPlaceSuccess } from 'actions/placeActions';
import {
  fetchPlaceError,
  fetchPlaceDetailsSuccess,
  fetchPlaceDetailsError,
} from '../actions/placeActions';
import { getPlaceDetails } from '../services/placeApi';

export function* fetchPlaces(action) {
  try {
    const places = yield call(getPlaceIds, action.condition);
    const randomPlace = getRandom(places);
    yield put(fetchPlaceSuccess(randomPlace));
  } catch (e) {
    yield put(fetchPlaceError(e));
  }
}

export function* fetchPlaceDetails(action) {
  try {
    const place = yield call(getPlaceDetails, action.id);
    yield put(fetchPlaceDetailsSuccess(place));
  } catch (e) {
    yield put(fetchPlaceDetailsError(e));
  }
}

function* watchFetchPlaces() {
  yield takeEvery(PLACE_ACTIONS.FETCH_PLACE[REQUEST], fetchPlaces);
}
function* watchFetchPlaceDetails() {
  yield takeEvery(
    PLACE_ACTIONS.FETCH_PLACE_DETAILS[REQUEST],
    fetchPlaceDetails,
  );
}

export default function* placeSagas() {
  yield all([fork(watchFetchPlaceDetails), fork(watchFetchPlaces)]);
}
