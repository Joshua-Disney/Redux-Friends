import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCH_SUCCESS = 'FRIENDS_FETCH_SUCCESS';
export const FRIENDS_FETCH_FAILURE = 'FRIENDS_FETCH_FAILURE';
export const DELETE_FRIEND_START = 'DELETE_FRIEND_START';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCES';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';


export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get('http://localhost:5000/api/friends')
    .then(response => 
      dispatch({ type: FRIENDS_FETCH_SUCCESS, payload: response.data })
    )
    .catch(error => 
      dispatch({ type: FRIENDS_FETCH_FAILURE, payload: error})
    );
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND_START});
  axios
    .delete(`http://localhost:5000/api/friends${id}`)
    .then(response => 
      dispatch({ type: DELETE_FRIEND_SUCCESS, payload: response.data })
    )
    .catch(error =>
      dispatch({ type: DELETE_FRIEND_FAILURE, payload: error})
    )
}