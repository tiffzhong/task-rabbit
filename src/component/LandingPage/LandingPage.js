import React, { Component } from "react";
import Header from "./Header";
import "./LandingPage.css";
import LandingPage_TaskCards from "./LandingPage_TaskCards";

class LandingPage extends Component {
  render() {
    return (
    <div className='LandingPage-component' >
        <Header />
        <LandingPage_TaskCards />
    </div>
      
    );
  }
}

export default LandingPage;
