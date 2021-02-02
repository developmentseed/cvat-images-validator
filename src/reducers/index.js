import { combineReducers } from 'redux';
import data from './fetchDataReducer';
import user from './userReducer';
import ui from './uiReducer';

export default combineReducers({
  data,
  user,
  ui
});
