import {
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  UPDATE_FRIEND_START,
  UPDATE_FRIEND_SUCCESS,
  UPDATE_FRIEND_FAILURE,
} from '../actions';

const initialState = {
  isAdding: false,
  isUpdating: false,
  error: null
}

export const formReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FRIEND_START:
      return {
        ...state,
        isAdding: true,
        error: null
      }
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        isAdding: true,
        error: null
      }
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        isAdding: false,
        error: action.payload
      }
    case UPDATE_FRIEND_START:
      return {
        ...state,
        isUpdating: true,
        error: null
      }
    case UPDATE_FRIEND_SUCCESS:
      return {
        ...state,
        isUpdating: true,
        error: null
      }
    case UPDATE_FRIEND_FAILURE:
      return {
        ...state,
        isUpdating: false,
        error: action.payload
      }
    default:
      return state;
  }
}