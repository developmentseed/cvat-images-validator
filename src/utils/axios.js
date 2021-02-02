import axios from 'axios';

export const retriveTokenHeader = (key) => {
  if (key) {
    axios.defaults.withCredentials = true;
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.headers.common.Authorization = `Token ${key}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const api = (endpoint) => `/api/v1${endpoint}`.replace('//', '/');
