import React, { Component } from 'react';
import '../styles/App.css';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="title">PETFUL ADOPTION</h1>
        <p className="description">
          Adopt a pet by clicking the adopt button. 
          Once the adopt button is clicked you will be able to see the next pet.
          Thanks for giving these adorable muffins a home</p> 
        <Dashboard></Dashboard>
      </div>
    );
  }
}

export default App; 
