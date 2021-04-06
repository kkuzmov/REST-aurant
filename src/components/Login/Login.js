import React, { useContext } from 'react';
import { style } from './Login.css';
import testInput from '../../services/Helpers/createNewRestaurant';
import testLoginUser from '../../services/Helpers/loginUser';
import { loginUser } from '../../services/services';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { AuthContext } from '../Auth/Auth';

import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';


function Login (){
    let history = useHistory();
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);
    const [ errMessage, setErrMessage ] = useState('');

    if(currentUser){
        return <Redirect to="/" />
    }

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
            loginUser(event.target.email.value, event.target.password.value)
                .then(res => {
                    history.push('/');
                })
                .catch(err => setErrMessage(err.message));
        }
    }

    return (
        <>
        <h1 className="page-heading">Login</h1>
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
        <ErrorMessage>{errMessage}</ErrorMessage>
        </article>
        </>
    )
}

export default Login;