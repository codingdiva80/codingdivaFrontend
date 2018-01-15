import React, { Component } from 'react';
import Login from './login';
import Signup from './signup';

export default class LoginSignup extends Component {

    render(){
        return (
            <div className='container'>
                <Login />
                <Signup />
            </div>
        )
    }
}