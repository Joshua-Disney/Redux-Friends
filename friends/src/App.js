import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsListView from './views/FriendsListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <FriendsListView />
          <p>Code me, Disney</p>
        </header>
      </div>
    );
  }
}

export default App;
