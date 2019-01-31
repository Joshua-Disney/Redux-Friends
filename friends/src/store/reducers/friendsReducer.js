import {
  FETCHING_FRIENDS,
  FRIENDS_FETCH_SUCCESS,
  FRIENDS_FETCH_FAILURE,
} from '../actions';

const initialState = {
  isLoading: false,
  friends: [],
  error: null
}

export const friends = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case FRIENDS_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        friends: action.payload,
        error: null
      }
    case FRIENDS_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
}