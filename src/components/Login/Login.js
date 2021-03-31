import { Component } from 'react';
import { style } from './Login.css';
import testInput from '../../services/Helpers/createNewRestaurant';
import testLoginUser from '../../services/Helpers/loginUser';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useState } from 'react';


function Login (){
    const [ errMessage, setErrMessage ] = useState('');

    function onLoginSubmitHandler(event){
        event.preventDefault();
        let userInputToLogin = {
            'email': event.target.email.value,
            'password': event.target.password.value,
        }
        if(testLoginUser(userInputToLogin)){
            let message = testLoginUser(userInputToLogin);
            setErrMessage(message);
        }else{
            setErrMessage('');
            console.log('logged in user!')
        }
    }

    return (
        <>
        <h1 className="page-heading">Login</h1>
        <ErrorMessage>{errMessage}</ErrorMessage>

        <article className="authentication-container">
            <form className="authentication-form" onSubmit={onLoginSubmitHandler}>
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

export default Login;