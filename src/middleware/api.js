import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
export const CALL_API = Symbol('Call API');
const API_ROOT = "https://api.fixer.io";

function jsonSuccessResponse(json, schema, id) {

  if (!schema) {
    console.log("No schema selected");
    return {};
  }
  const camelizedJson = camelizeKeys(json);
  camelizedJson.id = id;
  return Object.assign({},
    normalize(camelizedJson, schema));

}
function callApi(endpoint, schema, ext_req, id) {

  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
    var fetch_detail = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };

    if (ext_req) {
      if (ext_req.method) {
        fetch_detail.method = ext_req.method;
      }
      if (ext_req.body){
        fetch_detail.body = JSON.stringify(ext_req.body);
      }
    }
    return fetch(fullUrl, fetch_detail)
      .then(response =>
        response.json().then(json => ({ json, response }))
      ).then(({ json, response }) => {
        if (!response.ok) {
          return Promise.reject(json);
        }

        return jsonSuccessResponse(json, schema, id);
      });
}

export default store => next => action => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint, ext_req, id } = callAPI;

  const { schema, types, schemaless } = callAPI;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }
  if (!schema && !schemaless) {
    throw new Error('Specify one of the exported Schemas.');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [ requestType, successType, failureType ] = types;
  next(actionWith({ type: requestType}));

  return callApi(endpoint, schema, ext_req, id).then(
    response => next(actionWith({
      response,
      type: successType,
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened',
    }))
  );
};
