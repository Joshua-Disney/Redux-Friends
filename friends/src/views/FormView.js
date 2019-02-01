import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { addFriend, updateFriend } from '../store/actions';
import FriendForm from '../components/FriendForms/FriendForm'

const blankFriend = {
  name: '',
  age: null,
  email: ''
}

class FormView extends React.Component {
  state  = {
    friend: {
      name: '',
      age: null,
      email: ''
    },
    isUpdating: false
  }

  handleChanges = event => {
    this.setState({
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value
      }
    })
  }

  addNewFriend = () => {
    this.props.addFriend(this.state.friend);
  };

  updateFriend = () => {
    axios 
      .put(`http://localhost:5000/api/friends/${this.state.editingId}`,
      this.state.friend
      )
      .then(response => {
        this.setState({
          friends: response.data,
          editingId: null,
          isUpdating: false,
          friend: blankFriend
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <FriendForm
        addNewFriend={this.addNewFriend}
        updateFriend={this.updateFriend}
        handleChanges={this.handleChanges}
        friend={this.state.friend}
        isUpdating={this.state.isUpdating}
        isAdding={this.props.isAdding}
      />
    )
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { addFriend, updateFriend }
  )(FormView);