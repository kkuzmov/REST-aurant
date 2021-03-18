import { Component } from 'react';
import { style } from './Login.css';


class Login extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
            <h1 className="login-register-heading">Login</h1>
            <article className="authentication-container">
                <form action="#" className="authentication-form">
                    <article className="form-input">
                        <input type="email" name="email" placeholder="E-mail"/>
                    </article>
                    <article className="form-input">
                        <input type="password" name="password" placeholder="Password"/>
                    </article>
                    <button className="site-button">Login</button>
                </form>
            </article>
            </>
        )
    }
}

export default Login;