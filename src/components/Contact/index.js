import React, { Component } from 'react';

export default class Contact extends Component {

    render(){
        return (
            <div>
                <div className="contact">
                    <div className="contact-text">
                        <div className="contact-items">
                            <h2>Sign Up</h2>
                            <input type="text" placeholder="Username ..." />
                            <input type="text" placeholder="Email ..." />
                            <input type="text" placeholder="Password ..." />  
                            <input type="text" placeholder="Confirm Password ..." />                                                                                  
                            <a href="#">Sign Up!</a>
                        </div>
                    </div>
                </div>   
                <div className="contact">
                <div className="contact-text">
                    <div className="contact-items">
                    <h2>Login</h2>
                    <input type="text" placeholder="Username ..." />
                    <input type="text" placeholder="Email ..." />                                                                               
                    <a href="#">Login!</a>
                    </div>
                </div>
            </div>  
        </div> 
        )
    }
}