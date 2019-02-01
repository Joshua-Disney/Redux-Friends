import React from 'react';

import './FriendForm.css'

function FriendForm(props) {

  const handleClick = event => {
    if (props.isAdding) {
      props.addNewFriend(props.friend)
    } else {
      props.updateFriend();
    }
  }

  console.log(props)
  return (
    <div className='FriendFormContainer'>
      <h2 className='formHeader'>{props.isAdding ? 'Add Friend' : 'Update Friend'}</h2>
      <form className='form'>
        <input
          className='formInput'
          type='text'
          name='name'
          placeholder='name...'
          value={props.friend.name} 
          onChange={props.handleChanges}
        />
        <input
          className='formInput'
          type='number'
          name='age'
          placeholder='age...'
          value={props.friend.age}
          onChange={props.handleChanges}
        />
        <input 
          className='formInput'
          type='text'
          name='email'
          placeholder='email...'
          value={props.friend.email}
          onChange={props.handleChanges}
        />
        <button onClick={handleClick} className='formButton'>
          {props.isAdding ? 'Add Friend' : 'Update Friend'}
        </button>
      </form>
    </div>
  )
}

export default FriendForm;