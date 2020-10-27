import React, { Component } from 'react';
import './App.scss';
import List from './List'

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <List/>
      </div>
    );
  }
}

export default App;
