import { genActions } from './constants';

export default genActions('condition', [
  'SET_RADIUS',
  { name: 'FETCH_LAT_LNG', type: 'async' },
]);
