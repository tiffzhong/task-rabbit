import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./component/LandingPage/LandingPage";
import NavBar_HowItWorks from "./component/NavBar/NavBar_HowItWorks";
import BecomeATasker from "./component/BecomeATasker/BecomeATasker";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/how-it-works" component={NavBar_HowItWorks} />
    <Route path="/create-tasker-profile" component={BecomeATasker} />
  </Switch>
);
