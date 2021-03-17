import { Component } from 'react';
import { style } from './Register.css';


class Register extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <article class="authentication-container">
                <form action="#" class="authentication-form">
                    <article class="form-input">
                        <input type="email" name="email" placeholder="E-mail" />
                    </article>
                    <article class="form-input">
                        <input type="text" name="username" placeholder="Username" />
                    </article>
                    <article class="form-input">
                        <input type="password" name="password" placeholder="Password" />
                    </article>
                    <article class="form-input">
                        <input type="password" name="repeat-password" placeholder="Repeat password" />
                    </article>
                    <button class="site-button">Sign up</button>
                </form>
            </article>
        )
    }
}

export default Register;