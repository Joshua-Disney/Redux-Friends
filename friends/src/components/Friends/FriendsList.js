import React from 'react';

function FriendsList(props) {

  return (
    <div className='friendsListContainer'>
      {props.friends.map(friend => (
        <div 
          className='friendCard'
          key={friend.id}
        >
          <p>{friend.name}</p>
        </div>
      ))}
    </div>
  )
}

export default FriendsList;