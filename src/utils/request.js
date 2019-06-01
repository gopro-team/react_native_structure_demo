import QueryString from 'query-string';
import config from 'configs';
import Auth from 'utils/auth';
import { isEmptyObject } from 'utils/object';

export function ServerAPIError(json) {
  this.name = 'ServerAPIError';
  this.data = json;
  this.stack = (new Error()).stack;
}
ServerAPIError.prototype = Object.create(Error.prototype);
ServerAPIError.prototype.constructor = ServerAPIError;

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const request = async (_endpoint, method, body, customHeaders = {}, withAuth = true) => {
  const endpoint = config.API_URL + _endpoint;
  const headers = {
    ...defaultHeaders,
    ...customHeaders,
  };
  if (withAuth) {
    const accessToken = Auth.getAccessToken();
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  let data = null;
  if (body) {
    if (headers['Content-Type'] === 'application/json') {
      data = JSON.stringify(body);
    } else {
      delete headers['Content-Type'];
      data = body;
    }
  } else {
    delete headers['Content-Type'];
  }
  const fetchOpts = {
    method,
    headers,
  };
  if (method !== 'HEAD' && method !== 'GET') {
    fetchOpts.body = data;
  }
  const response = await fetch(endpoint, fetchOpts);
  const json = await response.json();

  if (response.status < 200 || response.status >= 300) {
    if (json) {
      throw new ServerAPIError(json);
    } else {
      throw new Error(response.statusText);
    }
  }
  return json;
};

export const get = (endpoint, params) => {
  let url = endpoint;
  if (params && !isEmptyObject(params)) {
    url += `?${QueryString.stringify(params, { encode: true })}`;
  }
  return request(url, 'GET');
};

export const post = (endpoint, body, headers = defaultHeaders) => (
  request(endpoint, 'POST', body, headers)
);

export const put = (endpoint, body) => (
  request(endpoint, 'PUT', body)
);

export const del = (endpoint, body) => (
  request(endpoint, 'DELETE', body)
);

export default {
  get,
  post,
  put,
  del,
};
