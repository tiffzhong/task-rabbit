import React, { Component } from 'react';
import './Account.css';
import { NavLink } from 'react-router-dom';
import routes_account from '../../routes_account';

export default class Account extends Component {
    render() {
        return (
            <div className='account-component'>
                <div className='account-component-inner'>
                    <div className='account-title'>
                        <h1>Your Account</h1>
                    </div>
                    <div className='account-container'>
                        <div className='account-links'>
                            <NavLink to='/account/profile' className='account_link' activeClassName='active-link'><span>Profile</span></NavLink>
                            <NavLink to='/account/password' className='account_link' activeClassName='active-link'><span>Password</span></NavLink>
                            <NavLink to='/account/notifications' className='account_link' activeClassName='active-link'><span>Notifications</span></NavLink>
                            <NavLink to='/account/billing' className='account_link' activeClassName='active-link'><span>Billing Info</span></NavLink>
                            <NavLink to='/account/gift-cards' className='account_link' activeClassName='active-link'><span>Gift Cards</span></NavLink>
                            <NavLink to='/account/cancel' className='account_link' activeClassName='active-link'><span>Cancel a Task</span></NavLink>
                            <NavLink to='/account/balance' className='account_link' activeClassName='active-link'><span>Account Balance</span></NavLink>
                            <NavLink to='/account/transactions' className='account_link' activeClassName='active-link'><span>Transactions</span></NavLink>
                            <NavLink to='/account/deactivate' className='account_link' activeClassName='active-link'><span>Deactivate</span></NavLink>
                        </div>
                        <div className='account-form'>
                            <div className='account-form-container'>
                                {routes_account}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}