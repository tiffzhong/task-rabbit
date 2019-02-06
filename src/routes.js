import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import NavBar_HowItWorks from "./component/NavBar/NavBar_HowItWorks";
import BecomeATasker from "./component/BecomeATasker/BecomeATasker";
import Client_Form from "./component/Client_Form/Client_Form";
import TaskerExpertise from "./component/TaskerExpertise/TaskerExpertise";
import TaskerDashboard from "./component/TaskerDashboard/TaskerDashboard";
import ClientDashboard from "./component/ClientDashboard/ClientDashboard";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/how-it-works" component={NavBar_HowItWorks} />
    <Route path="/create-tasker-profile" component={BecomeATasker} />
    <Route path="/client_form" component={Client_Form} />
    <Route path="/expertise" component={TaskerExpertise} />
    <Route path="/tasker-dashboard" component={TaskerDashboard} />
    <Route path="/client-dashboard" component={ClientDashboard} />
  </Switch>
);
