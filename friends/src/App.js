import React, { Component } from 'react';
import './App.css';
import FriendsListView from './views/FriendsListView';
import FormView from './views/FormView';

class App extends Component {
  state = {
    isAdding: false
  }

  toggleAdding = () => {
    this.setState({isAdding: !this.state.isAdding});
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <FriendsListView
            isAdding={this.state.isAdding}
            toggleAdding={this.toggleAdding} />
          {this.state.isAdding && (
            <FormView
              isAdding={this.state.isAdding} />
          )}
        </div>
      </div>
    );
  }
}

export default App;