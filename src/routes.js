import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./component/NavBar/Login";
import LandingPage from "./component/LandingPage/LandingPage";
import NavBar_HowItWorks from "./component/NavBar/NavBar_HowItWorks";
import BecomeATasker from "./component/BecomeATasker/BecomeATasker";
import Client_Form from "./component/Client_Form/Client_Form";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/how-it-works" component={NavBar_HowItWorks} />
    <Route path="/create-tasker-profile" component={BecomeATasker} />
    <Route path='/client_form' component={Client_Form} />
  </Switch>
);
