import React, { Component } from 'react';
import './Account.css';

export default class Account extends Component {
    render() {
        return (
            <div className='account-component'>
                <form>
                    <fieldset>
                        <legend>Please select your preferred contact method:</legend>
                        <div>
                        <input type="radio" id="contactChoice1"
                        name="contact" value="email" checked />
                        <label for="contactChoice1">Email</label>

                        <input type="radio" id="contactChoice2"
                        name="contact" value="phone" />
                        <label for="contactChoice2">Phone</label>

                        <input type="radio" id="contactChoice3"
                        name="contact" value="mail" />
                        <label for="contactChoice3">Mail</label>
                        </div>
                        <div>
                        <button type="submit">Submit</button>
                        </div>
                    </fieldset>
                </form>
                      
            </div>
        );
    }
}