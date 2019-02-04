import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './component/LandingPage/LandingPage.css';
import LandingPage_TaskCards from './component/LandingPage/LandingPage_TaskCards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage_TaskCards />
      </div>
    );
  }
}

export default App;
