import { call, takeEvery, put, select } from 'redux-saga/effects';
import { getPlaceIds } from 'services/placeApi';
import { getRandom } from 'lib/utils';
import PLACE_ACTIONS from 'actions/placeActionTypes';
import { REQUEST } from 'actions/constants';
import { fetchPlaceSuccess } from 'actions/placeActions';
import { fetchPlaceError } from '../actions/placeActions';

function* fetchPlaces() {
  try {
    const condition = yield select(state => state.condition);
    const places = yield call(getPlaceIds, condition);
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
