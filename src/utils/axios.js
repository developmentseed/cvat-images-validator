import axios from 'axios';

export const retriveTokenHeader = (token) => {
  if (token && token.access) {
    axios.defaults.headers.common.Authorization = `token ${token.access}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const api = (endpoint) => `/api/v1${endpoint}`.replace('//', '/');
