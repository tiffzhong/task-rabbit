import React, { Component } from "react";
import Header from "./Header";
import "./LandingPage.css";
import LandingPage_TaskCards from "./LandingPage_TaskCards";
import LandingPage_Reviews from "./LandingPage_Reviews";


class LandingPage extends Component {
  render() {
    return (
      <div className='LandingPage-component' >
        <Header />
        <LandingPage_TaskCards />
        <LandingPage_Reviews />

      </div>

    );
  }
}

export default LandingPage;
