import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import NavBar from "../src/component/NavBar/NavBar";
import Footer from "../src/component/Footer/Footer";
import './component/LandingPage/LandingPage.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
