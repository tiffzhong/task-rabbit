import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import NavBar_HowItWorks from "./component/NavBar/NavBar_HowItWorks";
import TaskerDashboard from "./component/TaskerDashboard/TaskerDashboard";
import TaskerProfile from "./component/TaskerProfile/TaskerProfile";
import ClientDashboard from "./component/ClientDashboard/ClientDashboard";
import EditTaskerProfile from "./component/TaskerProfile/EditTaskerProfile";
import Confirmation from "./component/Confirmation/Confirmation";
import ClientPickTasker from "./component/ClientPickTasker/ClientPickTasker";
import ClientEdit from "./component/ClientEdit/ClientEdit";
import ClientForm from "./component/Client_Form/ClientForm";

import Reviews from "./component/Reviews/Reviews";
import MessagesForm from "./component/Messages/MessagesForm";
import PersonalMessages from "./component/Messages/PersonalMessages";
import TaskerMessages from "./component/Messages/TaskerMessages";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/how-it-works" component={NavBar_HowItWorks} />
    <Route path="/clientEdit" component={ClientEdit} />
    <Route path="/clientForm" component={ClientForm} />
    <Route path="/client-dashboard" component={ClientDashboard} />
    <Route path="/pick-a-tasker" component={ClientPickTasker} />

    <Route path="/confirmation/:confirmation_id" component={Confirmation} />
    <Route path="/confirmation" component={Confirmation} />

    <Route path="/tasker-profile" component={TaskerProfile} />
    <Route path="/tasker-dashboard/:tasker_id" component={TaskerDashboard} />
    <Route
      path="/edit-tasker-profile/:tasker_id"
      component={EditTaskerProfile}
    />
    <Route path="/edit-client-form/:confirmation_id" component={ClientForm} />
    <Route path="/review" component={Reviews} />
    <Route path="/messages/:client_id" component={MessagesForm} />
    <Route path="/messages" component={MessagesForm} />
    <Route
      path="/messages-personal/:confirmation_id"
      component={PersonalMessages}
    />
    <Route path='/confirmedTasks' component={MessagesForm} />
    <Route path="/messages-personal/:confirmation_id" component={PersonalMessages} />
    <Route path='/tasker-message' component={TaskerMessages} />
  </Switch>
);
