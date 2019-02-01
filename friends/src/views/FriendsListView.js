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
      <div>
        <FriendsList
          isAdding={this.props.isAdding}
          isLoading={this.props.isLoading}
          history={this.props.history}
          getFriendById={this.props.getFriendById}
          friends={this.props.friends}
          toggleAdding={this.props.toggleAdding}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    isLoading: state.friendsReducer.isLoading,
    friends: state.friendsReducer.friends
})}

export default connect(
  mapStateToProps,
  { getFriends, deleteFriend }
)(FriendsListView)