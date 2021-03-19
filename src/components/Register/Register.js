import { Component } from 'react';
import { style } from './Register.css';


class Register extends Component{
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
                        <input type="email" name="email" placeholder="E-mail" />
                    </article>
                    <article className="form-input">
                        <input type="text" name="username" placeholder="Username" />
                    </article>
                    <article className="form-input">
                        <input type="password" name="password" placeholder="Password" />
                    </article>
                    <article className="form-input">
                        <input type="password" name="repeat-password" placeholder="Repeat password" />
                    </article>
                    <button className="site-button">Sign up</button>
                </form>
            </article>
            </>
        )
    }
}

export default Register;