import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TemperatureCalculator from './components/TemperatureCalculator.js';

class App extends Component {
  render() {
    return (
      <main>
        <TemperatureCalculator />
      </main>
    );
  }
}

export default App;
