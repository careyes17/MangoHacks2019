import React, { Component } from 'react';
import TopAppBar from './components/TopAppBar';

import './App.css';


class App extends Component<any, any> {
  render() {
    const {classes} = this.props;

    return (
      <div className="App">
        <TopAppBar></TopAppBar>
      </div>
    );
  }
}

export default App;
