import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import Footer from "./component/Footer/Footer";
import NavBar from "./component/NavBar/NavBar";





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
