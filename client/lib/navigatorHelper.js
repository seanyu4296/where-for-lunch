import {
  fetchLatLngRequest,
  fetchLatLngSuccess,
  fetchLatLngError,
} from '../actions/conditionActions';

export function fetchLatLng(store) {
  store.dispatch(fetchLatLngRequest());
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { longitude, latitude } = position.coords;
      store.dispatch(fetchLatLngSuccess({ longitude, latitude }));
    },
    (err) => {
      store.dispatch(fetchLatLngError(err));
      console.log('give it to me! ', err);
    },
  );
}
