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
import Restaurant from './components/Restaurant/Restaurant';
import RestaurantsWrapper from './components/RestaurantsWrapper/RestaurantsWrapper';
import Profile from './components/Profile/Profile';



import { style } from './Main.css';

//TESTING WITH ONE LOOK PER TIME - LEAVE ONLY HEADER AND FOOTER AS CONSTANTS!


class Main extends Component{
    render(){
        return(
           <>
            <Header />
            
            <Route path="/create" component={CreateRestaurant}/>
            <Route path="/all-restaurants" component={RestaurantsWrapper}/>
            <Route path="/profile" component={Profile}/>

            <Footer />
           </>
        )
    }
}


export default Main;