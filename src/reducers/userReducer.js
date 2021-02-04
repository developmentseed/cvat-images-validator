import { FETCH_USER_BEGIN, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actions/userActions';

const initialState = {
  data: {
    username: '',
    key: ''
  },
  is_login: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_BEGIN:
      return {
        ...state,
        is_login: false
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        is_login: true,
        data: action.payload.fData
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        data: {
          username: '',
          key: ''
        }
      };
    default:
      return state;
  }
}
