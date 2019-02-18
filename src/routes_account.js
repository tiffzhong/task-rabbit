import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile_Form from "./component/Account/Profile_Form";
import Password_Form from "./component/Account/Password_Form";
import Notifications_Form from "./component/Account/Password_Form";
import Billing_info from "./component/Account/Password_Form";
import GiftCards_Form from "./component/Account/Password_Form";
import CancelTask_Form from "./component/Account/CancelTask_Form";
import AccountBalance_Form from "./component/Account/AccountBalance_Form";
import Transactions_Form from "./component/Account/Transactions_Form";
import Deactivate_Form from "./component/Account/Deactivate_Form";

export default (
    <Switch>
        <Route path='/account/profile' component={Profile_Form} />
        <Route path='/account/password' component={Password_Form} />
        <Route path='/account/notifications' component={Notifications_Form} />
        <Route path='/account/billing' component={Billing_info} />
        <Route path='/account/gift-cards' component={GiftCards_Form} />
        <Route path='/account/cancel' component={CancelTask_Form} />
        <Route path='/account/balance' component={AccountBalance_Form} />
        <Route path='/account/transactions' component={Transactions_Form} />
        <Route path='/account/deactivate' component={Deactivate_Form} />
    </Switch>
);