import { genActions } from './constants';

export default genActions('place', [
  { name: 'FETCH_PLACE', type: 'async' },
  { name: 'FETCH_PLACE_DETAILS', type: 'async' },
]);
