import { genActions } from './constants';

export default genActions('condition', [
  'SET_PROPERTY',
  { name: 'FETCH_LAT_LNG', type: 'async' },
]);
