import { UI_LOADING_ON, UI_LOADING_OFF } from '../actions/uiActions';

const initialState = {
  loading: false,
  error: ''
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case UI_LOADING_ON:
      return {
        ...state,
        loading: true
      };
    case UI_LOADING_OFF:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
