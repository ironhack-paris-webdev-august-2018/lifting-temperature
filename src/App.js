import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import TemperatureCalculator from './components/TemperatureCalculator.js';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>Temperature Website</h1>

          <nav>
            {/* <Link> behaves like an <a> EXCEPT it DOESN'T cause a refresh */}
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/temperature">Temperature Calculator</Link>
          </nav>
        </header>

        {/* "Switch" is a part of your app that changes based on the URL */}
        {/* ("Switch" will choose to show one of these "Route" components) */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/temperature" component={TemperatureCalculator} />
          {/* path -> URL | component -> content to show on that URL */}

          {/* 404 Route LAST and no "path" prop */}
          {/* (will always match if none of the above do) */}
          <Route component={NotFound} />
        </Switch>

        <footer>
          <p>Made with 🌡 at Ironhack</p>
        </footer>
      </main>
    );
  }
}

export default App;
