import { Component } from 'react';
import { style } from './Login.css';


class Login extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <article class="authentication-container">
                <form action="#" class="authentication-form">
                    <article class="form-input">
                        <input type="email" name="email" placeholder="E-mail"/>
                    </article>
                    <article class="form-input">
                        <input type="password" name="password" placeholder="Password"/>
                    </article>
                    <button class="site-button">Login</button>
                </form>
            </article>
        )
    }
}

export default Login;