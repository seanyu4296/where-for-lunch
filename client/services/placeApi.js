import axios from 'axios';
import { PLACES_API_PATH } from 'constants/apiPaths';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common = {
  Accept: 'application/json, application/xml, text/play, text/html, *.*',
  'Content-Type': 'application/json',
};

const parseParams = (params) => {
  const newObj = {};
  Object.keys(params).forEach((v) => {
    if (v !== 'error' && params[v]) {
      if (typeof params[v] === 'object') {
        const values = Object.keys(params[v])
          .filter(k => params[v][k])
          .join(',');
        if (values.length > 1) {
          newObj[v] = values;
        }
      } else {
        newObj[v] = params[v];
      }
    }
  });
  return newObj;
};

export const getPlaceIds = (params) => {
  return axios
    .get(`${PLACES_API_PATH}/`, { params: parseParams(params) })
    .then(({ data }) => data);
};

export const getPlaceDetails = (id) => {
  return axios.get(`${PLACES_API_PATH}/${id}`).then(({ data }) => data);
};
