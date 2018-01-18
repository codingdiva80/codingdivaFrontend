import React, { Component } from 'react';
import { apiURL } from '../../components/Lib/helpers';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.check = <em>&#10004;</em>;
        this.x = <em>&#x274C;</em>;
        this.state = {
            emailNew: '',
            passwordNew: '',
            emailVerifiedSymbol: '',
            passwordVerifiedSymbol: '',
            username: '',
        };
    }

    setUsername = e => {
        this.setState({ username: e.currentTarget.value });
    }

    setEmail = e => {
        this.setState({
            emailNew: e.currentTarget.value,
        });
    };

    setPassword = e => {
        this.setState({
            passwordNew: e.currentTarget.value,
        });
    };

    verify = () => {
        if (this._verifyEmail() && this._verifyPassword()) {
            return true;
        }
        return false;
    };

    handleSubmit = e => {
        e.preventDefault();
        let username = this.state.username || this.state.emailNew;
        let body = {
            username,
            email: this.state.emailNew,
            password: this.state.passwordNew
        };
        if (this.verify()) {
            let submitURL = apiURL() + '/user/register';
            fetch(submitURL, {
                method: 'post',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' },
                body: JSON.stringify(body),
            }).then(response => {
                console.log(response);
            });
        } else {
            alert('Not ok');
        }
    };

    _verifyEmail = () => {
        let verified;
        let email = this.state.emailNew;
        let reg = /([a-zA-Z]){2,}(@).([a-zA-Z0-9]){2,}?(\.).([a-zA-Z]){2,}/g;
        verified = reg.test(email);
        let symbol = verified ? this.check : this.x;
        this.setState({
            emailVerifiedSymbol: symbol,
        });
        return verified;
    };

    _verifyPassword = () => {
        let verified = true;
        let reg = /([a-zA-Z0-9]){5,}/g;
        verified = reg.test(this.state.passwordNew);
        let symbol = verified ? this.check : this.x;

        this.setState({
            passwordVerifiedSymbol: symbol,
        });
        return verified;
    };

    render() {
        const {
            emailNew,
            passwordNew,
            emailVerifiedSymbol,
            passwordVerifiedSymbol,
        } = this.state;
        return (
            <div className="contact">
                <div className="contact-text">
                    <div className="contact-items">
                        <h2>Sign Up</h2>
                        <span>
                            <input type="text" placeholder="Username ..." onChange={ this.setUsername}/>
                        </span>
                        <span>
                            <input
                                type="text"
                                placeholder="Email ..."
                                onChange={this.setEmail}
                                value={emailNew}
                                onBlur={this._verifyEmail}
                            />
                            <em>{emailVerifiedSymbol}</em>
                        </span>
                        <span>
                            <input type="password" placeholder="Password ..." onBlur={this._verifyPassword} onChange={this.setPassword}/>
                            <em>{passwordVerifiedSymbol}</em>
                        </span>
                        
                        <div>
                            <a href="#" onClick={this.handleSubmit}>Sign Up!</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
