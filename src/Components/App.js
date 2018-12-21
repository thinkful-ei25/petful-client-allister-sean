import React, { Component } from 'react';
import '../App.css';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <h1>PETFUL ADOPTION</h1>
        <p>Adopt a pet by clicking the adopt button</p>
        <p>Once the adopt button is clicked you will be able to see the next pet</p>
        <p>Thanks for giving these adorable muffins a home</p> 
        <Dashboard></Dashboard>
      </div>
    );
  }
}

export default App; 
