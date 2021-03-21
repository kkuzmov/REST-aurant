import { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <article className="error-container">
            <h1 className="page-heading">Nothing here!</h1>
            <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="error-page" className="error-image"></img>
            <h3>Go <Link to="/">home</Link> now...</h3>
            </article>
        )
    }
}
export default ErrorPage;