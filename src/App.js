import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import NavBar from "../src/component/NavBar/NavBar";
import Footer from "../src/component/Footer/Footer";
import NavBar_HowItWorks from './component/NavBar/NavBar_HowItWorks';

import './component/LandingPage/LandingPage.css';
import LandingPage from './component/LandingPage/LandingPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar_HowItWorks />

        <NavBar />
        {routes}
        <LandingPage />
        <Footer />
      </div>
    );
  }
}

export default App;
