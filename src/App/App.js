import React, { Component } from 'react';
import './App.scss';
import List from './List'
import Group from './Group'


class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <List/>
        <Group/>
      </div>
    );
  }
}

export default App;
