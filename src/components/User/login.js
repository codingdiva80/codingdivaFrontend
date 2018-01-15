import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="col-1">
                <div>
                    <div>Login</div>
                    <div>
                        <label>Email:</label>
                        <input type='text' name='email' />

                        <label>Password:</label>
                        <input type='text' name='password' />

                        <button>Login</button>

                        <div>Forgot password?</div>
                    </div>
                </div>
			</div>
        )
    }
}