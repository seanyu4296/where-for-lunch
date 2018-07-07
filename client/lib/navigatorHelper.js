import {
  fetchLatLngRequest,
  fetchLatLngSuccess,
} from '../actions/conditionActions';

export function fetchLatLng(store) {
  store.dispatch(fetchLatLngRequest());
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { longitude, latitude } = position.coords;
      store.dispatch(fetchLatLngSuccess({ longitude, latitude }));
    },
    (err) => {
      console.log('give it to me! ', err);
    },
  );
}
