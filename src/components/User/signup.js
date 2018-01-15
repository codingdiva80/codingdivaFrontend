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
            passwordVerifiedSymbol: ''
        }
    }

    setEmail = (e) => {
        this.setState({
            emailNew : e.currentTarget.value
        });
    }

    setPassword = (e) => {
        this.setState({
            passwordNew: e.currentTarget.value
        })
    }

    verify = () => {
        if(this._verifyEmail() && this._verifyPassword()){
            return true;
        }
        return false;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.verify()){
            let submitURL = apiURL() + "/user/register";
            fetch(submitURL, {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: {
                    email: this.state.emailNew,
                    password: this.state.passwordNew
                }
            }).then((response) => {
                console.log(response);
            });
        }
        else{
            alert("Not ok");
        }
    }

    _verifyEmail = () => {
        let verified;
        let email = this.state.emailNew;
        let reg = /([a-zA-Z]){2,}(@).([a-zA-Z0-9]){2,}?(\.).([a-zA-Z]){2,}/g;
        verified = reg.test(email);
        let symbol = verified ? this.check : this.x;
        this.setState({
            emailVerifiedSymbol: symbol
        });
        return verified;
    }

    _verifyPassword = () => {
        let verified = true;
        let reg = /([a-zA-Z0-9]){5,}/g;
        verified = reg.test(this.state.passwordNew);
        let symbol = verified ? this.check : this.x;
        
        this.setState({
            passwordVerifiedSymbol: symbol
        });
        return verified;
    }


    render() {
        const {
            emailNew, passwordNew, emailVerifiedSymbol, passwordVerifiedSymbol
        } = this.state;
        return(
            <div className='col-2'>
                <div>Don't have an account? Signup here</div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <span>{ emailVerifiedSymbol }</span>
                    <input type='text' name='email-new' 
                        onChange={this.setEmail} value={emailNew}
                        onBlur={this._verifyEmail}
                        />

                    <label>Password:</label>
                    <span>{ passwordVerifiedSymbol }</span>
                    <input type='password' name='password-new' 
                        onChange={this.setPassword} value={passwordNew} 
                        onBlur={this._verifyPassword}
                        />

                    <button type='submit'>Signup!</button>
                </form>
            </div>
        )
    }
}
