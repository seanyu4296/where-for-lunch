import axios from 'axios';
import { PLACES_API_PATH } from '../constants/apiPaths';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common = {
  Accept: 'application/json, application/xml, text/play, text/html, *.*',
  'Content-Type': 'application/json',
};

export const createPlaceParams = (condition = {}) => {
  const { error, fetching, price, ...restCondition } = condition;
  return {
    ...restCondition,
    ...(condition.price && typeof condition.price === 'object'
      ? {
        price: Object.keys(condition.price)
          .filter((k) => {
            return condition.price[k];
          })
          .join(','),
      }
      : {}),
  };
};

export const getPlaceIds = (params) => {
  return axios
    .get(`${PLACES_API_PATH}/`, { params: createPlaceParams(params) })
    .then(({ data }) => data);
};

export const getPlaceDetails = (id) => {
  return axios.get(`${PLACES_API_PATH}/${id}`).then(({ data }) => data);
};
