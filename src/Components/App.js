import React, { Component } from 'react';
import '../App.css';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <h1>PETFUL ADOPTION</h1>
        <Dashboard></Dashboard>
      </div>
    );
  }
}

export default App; 
