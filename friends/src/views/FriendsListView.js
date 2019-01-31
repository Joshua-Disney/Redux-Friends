import React from 'react';
import { connect } from 'react-redux';

import { getFriends, deleteFriend } from '../store/actions';
import FriendsList from '../components/Friends/FriendsList';

class FriendsListView extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <FriendsList
        history={this.props.history}
        getFriendById={this.props.getFriendById}
        friends={this.props.friends}
      />
    )
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends
})

export default connect(
  mapStateToProps,
  { getFriends, deleteFriend }
)(FriendsListView)