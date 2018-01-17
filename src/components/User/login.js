import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="col-1">
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