import React from 'react';

import logo from '../../../src/logo.svg';
import './FriendsList.css'

function FriendsList(props) {
  return (
    <div className='friendsListContainer'>
      {props.isLoading ?
        <img src={logo} className="App-logo" alt="logo" /> : 
        <div>
          {props.friends.map(friend => (
            <div 
              className='friendCard'
              key={friend.id}
            >
              <p className='friendName'>{friend.name}</p>
              <p className='smallPTag'>{friend.age} years old</p>
              <p className='smallPTag'>email addres: {friend.email}</p>
            </div>
          ))}
          <button className='addButton' onClick={props.toggleAdding}>{props.isAdding ? 'Cancel' : 'Add Friend'}</button>
        </div>
      }
    </div>
  )
}

export default FriendsList;