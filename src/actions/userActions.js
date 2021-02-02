import { loadingOff, loadingOn } from './uiActions';
import { api } from '../utils/axios';
import axios from 'axios';

export const FETCH_USER_BEGIN = 'FETCH_USER_BEGIN';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchUserBegin = () => ({
  type: FETCH_USER_BEGIN,
});

export const fetchUserFailure = () => ({
  type: FETCH_USER_FAILURE,
});
export const fetchUserSuccess = (fData) => ({
  type: FETCH_USER_SUCCESS,
  payload: { fData },
});

export function loginUser({ username, password }) {
  return (dispatch) => {
    dispatch(loadingOn());
    dispatch(fetchUserBegin());
    axios
      .post(api('/auth/login'), { username, password })
      .then((response) => {
        dispatch(fetchUserSuccess({ username, ...response.data }));
      })
      .catch((error) => {
        dispatch(fetchUserFailure());
      });
    dispatch(loadingOff());
  };
}
