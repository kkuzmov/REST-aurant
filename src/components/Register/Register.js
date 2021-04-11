import { Component, useContext } from 'react';
import { style } from './Register.css';
import testRegisterUser from '../../services/Helpers/registerUser';
import { registerUser } from '../../services/services';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useState } from 'react';
import { AuthContext } from '../Auth/Auth';

import { Redirect, useHistory } from 'react-router-dom';
import { firebaseApp, storageRef } from '../../firebase/firebase.config';



function Register(){
    let history = useHistory();
    const { currentUser } = useContext(AuthContext);
    const [ errMessage, setErrMessage ] = useState('');
    if(currentUser){
        return <Redirect to="/" />
    }
    
    function onRegisterSubmitHandler(event){
        event.preventDefault();
        // TESTING PHOTO UPLOAD

        // let photoRef = storageRef.child(event.target.imageUrl.value);
        // console.log(photoRef);
        // let file = new File([], event.target.imageUrl.value)
        // photoRef.put(file).then((snapshot)=>{
        //     console.log(snapshot)
        // })

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
            setErrMessage('');
            let username = event.target.username.value;
            let photoURL = event.target.imageUrl.value;
            registerUser(event.target.email.value, event.target.password.value)
                .then(res => {
                    setTimeout(firebaseApp.auth().currentUser.updateProfile({ displayName: username, photoURL,})
                    .then(res => {
                        history.push('/')
                    }), 3000)
                })
                .catch(err => setErrMessage(err.message))
        }
    }
    
            return (
            <>
            <h1 className="page-heading">Register</h1>
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
                    <article className="form-input">
                        <input type="url" name="imageUrl" placeholder="Place image link here" />
                    </article>
                    <button className="site-button">Sign up</button>
                </form>
            <ErrorMessage>{errMessage}</ErrorMessage>
            </article>
            </>
        )
}

export default Register;