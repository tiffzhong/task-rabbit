import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";
import NavBar_HowItWorks from "./component/NavBar/NavBar_HowItWorks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar_HowItWorks />

        <NavBar />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
