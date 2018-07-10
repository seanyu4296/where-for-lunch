export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const CANCEL = 'CANCEL';
export const SUBMIT = 'SUBMIT';

export function createRequestTypes(domain, base) {
  return [SUBMIT, REQUEST, SUCCESS, ERROR, CANCEL].reduce((acc, type) => {
    acc[type] = `${domain}/${base}_${type}`;
    return acc;
  }, {});
}

export const genActions = (domain, actions) =>
  actions.reduce((acc, action) => {
    if (typeof action === 'object' && action.type === 'async') {
      return Object.assign(acc, {
        [action.name]: createRequestTypes(domain, action.name),
      });
    }
    return Object.assign({}, acc, { [action]: `${domain}/${action}` });
  }, {});
