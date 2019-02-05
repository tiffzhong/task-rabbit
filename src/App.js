import React, { Component } from "react";
import routes from "./routes";
import NavBar from "../src/component/NavBar/NavBar";
import Footer from "../src/component/Footer/Footer";
import './reset.css';
import "./component/LandingPage/LandingPage.css";
import "./component/LandingPage/LandingPage.css";
import './component/Client_Form/Client_Form.css';

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
