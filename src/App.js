import React, { Component } from 'react';
import NavBar_HowItWorks from "./component/NavBar/NavBar_HowItWorks";
import LandingPage_Reviews from "./component/LandingPage/LandingPage_Reviews";

import './App.css';
import LandingPage_Reviews from './component/LandingPage/LandingPage_Reviews';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage_Reviews />
        <NavBar_HowItWorks />
      </div>
    );
  }
}

export default App;
