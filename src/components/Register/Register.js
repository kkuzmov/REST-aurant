import { Component } from 'react';
import { style } from './Register.css';
import testRegisterUser from '../../services/Helpers/registerUser';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useState } from 'react';


function Register(){
    const [ errMessage, setErrMessage ] = useState('');
    
    function onRegisterSubmitHandler(event){
        event.preventDefault();
        let userInputToRegister = {
            'email': event.target.email.value,
            'username': event.target.username.value,
            'password': event.target.password.value,
            'repeatPassword': event.target.repeatPassword.value,
        }
        if(testRegisterUser(userInputToRegister)){
            let message = testRegisterUser(userInputToRegister);
            setErrMessage(message);
        }else{
            console.log('Registered user!')
        }
    }
    
        return (
            <>
            <h1 className="page-heading">Register</h1>
            <ErrorMessage>{errMessage}</ErrorMessage>
            <article className="authentication-container">
                <form className="authentication-form" onSubmit={onRegisterSubmitHandler}>
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
                        <input type="password" name="repeatPassword" placeholder="Repeat password" />
                    </article>
                    <button className="site-button">Sign up</button>
                </form>
            </article>
            </>
        )
}

export default Register;