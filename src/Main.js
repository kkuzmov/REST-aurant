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
import RestaurantsWrapper from './components/RestaurantsWrapper/RestaurantsWrapper';
import Profile from './components/Profile/Profile';
import ErrorPage from './components/ErrorPage/ErrorPage';



import { style } from './Main.css';

//TESTING WITH ONE LOOK PER TIME - LEAVE ONLY HEADER AND FOOTER AS CONSTANTS!


class Main extends Component{
    render(){
        return(
           <>
            <Header />
            <Switch>
            <Route path="/" exact component={HomepageGuest}/>
            <Route path="/create" component={CreateRestaurant}/>
            <Route path="/all-restaurants" component={RestaurantsWrapper}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/login" component={Login}/>
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