import { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends Component{
    render(){
        return(
            <article className="error-container">
            <h1 className="page-heading">404 - Page not found!</h1>
            <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="error-page" className="error-image"></img>
            </article>
        )
    }
}
export default ErrorPage;