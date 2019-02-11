import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import NavBar_HowItWorks from "./component/NavBar/NavBar_HowItWorks";
import Mounting_Form from "./component/Client_Form/Mounting_Form";
import Delivery_Form from "./component/Client_Form/Delivery_Form";
import Yardwork_Form from "./component/Client_Form/Yardwork_Form";
import Home_Form from "./component/Client_Form/Home_Form";
import Moving_Form from "./component/Client_Form/Moving_Form";
import Pet_Form from "./component/Client_Form/Pet_Form";
import Furniture_Form from "./component/Client_Form/Furniture_Form";
import Cleaning_Form from "./component/Client_Form/Cleaning_Form";
import Cooking_Form from "./component/Client_Form/Cooking_Form";
import TaskerDashboard from "./component/TaskerDashboard/TaskerDashboard";
import TaskerProfile from "./component/TaskerProfile/TaskerProfile";
import ClientDashboard from "./component/ClientDashboard/ClientDashboard";
import EditTaskerProfile from "./component/TaskerProfile/EditTaskerProfile";
import Confirmation from "./component/Confirmation/Confirmation";
import ClientPickTasker from "./component/ClientPickTasker/ClientPickTasker";
import MountingEdit from "./component/ClientEdit/MountingEdit";

export default (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/how-it-works" component={NavBar_HowItWorks} />
    <Route path="/mounting_form" component={Mounting_Form} />
    <Route path="/delivery_form" component={Delivery_Form} />
    <Route path="/yardwork_form" component={Yardwork_Form} />
    <Route path="/home_form" component={Home_Form} />
    <Route path="/moving_form" component={Moving_Form} />
    <Route path="/pet_form" component={Pet_Form} />
    <Route path="/furniture_form" component={Furniture_Form} />
    <Route path="/cleaning_form" component={Cleaning_Form} />
    <Route path="/cooking_form" component={Cooking_Form} />
    <Route path="/tasker-dashboard/:tasker_id" component={TaskerDashboard} />
    <Route path="/client-dashboard" component={ClientDashboard} />
    <Route path="/tasker-profile" component={TaskerProfile} />
    <Route path="/pick_a_tasker" component={ClientPickTasker} />
    <Route path='mountingEdit' component={MountingEdit} />
    <Route
      path="/edit-tasker-profile/:tasker_id"
      component={EditTaskerProfile}
    />
    <Route path="/confirmation" component={Confirmation} />
  </Switch>
);
