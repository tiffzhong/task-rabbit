import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import NavBar from "../src/component/NavBar/NavBar";
import Footer from "../src/component/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
