import React, {Component} from 'react';
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomepageGuest from './components/HomepageGuest/HomepageGuest';
import HomepageUser from './components/HomepageUser/HomepageUser';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CreateRestaurant from './components/CreateRestaurant/CreateRestaurant';
import Details from './components/Details/Details';
import DetailsWithClass_old from './components/Details/DetailsWithClass_old';
import RestaurantsWrapper from './components/RestaurantsWrapper/RestaurantsWrapper';
import Profile from './components/Profile/Profile';
import ErrorPage from './components/ErrorPage/ErrorPage';
import test from './components/TEST/test';



import { style } from './Main.css';



class Main extends Component{
    render(){
        return(
           <>
            <Header />
            <Switch>
            <Route path="/" exact component={HomepageUser}/>
            <Route path="/create" component={CreateRestaurant}/>
            <Route path="/all-restaurants" component={RestaurantsWrapper}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/login" component={Login}/>
            <Route path="/test/:id" component={DetailsWithClass_old}/>
            <Route path="/register" component={Register}/>
            <Route path="/details/:id" component={Details}/>
            <Route component={ErrorPage}/>
            </Switch>
            <Footer />
           </>
        )
    }
}


export default Main;