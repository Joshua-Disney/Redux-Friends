import { combineReducers } from 'redux';
import { friendsReducer } from './friendsReducer';
import { formReducer } from './formReducer';

export default combineReducers({
  friendsReducer, formReducer
});