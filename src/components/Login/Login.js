import React, { useContext, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { loginUser } from "../../services/services";
import { AuthContext } from "../Auth/Auth";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import testLoginUser from "../../services/Helpers/loginUser";

import "./Login.css";

function Login() {
  let history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const [errMessage, setErrMessage] = useState("");

  if (currentUser) {
    return <Redirect to="/" />;
  }

  function onLoginSubmitHandler(event) {
    event.preventDefault();
    let userInput = event.target;
    let userInputToLogin = {
      email: userInput.email.value,
      password: userInput.password.value,
    };
    if (testLoginUser(userInputToLogin)) {
      let message = testLoginUser(userInputToLogin);
      setErrMessage(message);
    } else {
      setErrMessage("");
      loginUser(userInput.email.value, userInput.password.value)
        .then((res) => {
          history.push("/");
        })
        .catch((err) => setErrMessage(err.message));
    }
  }

  return (
    <>
      <h1 className="page-heading">Login</h1>
      <article className="authentication-container">
        <form className="authentication-form" onSubmit={onLoginSubmitHandler}>
          <article className="form-input">
            <input type="email" name="email" placeholder="E-mail" />
          </article>
          <article className="form-input">
            <input type="password" name="password" placeholder="Password" />
          </article>
          <button className="site-button">Login</button>
        </form>
        <ErrorMessage>{errMessage}</ErrorMessage>
      </article>
    </>
  );
}

export default Login;
