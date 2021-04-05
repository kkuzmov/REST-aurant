import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomepageContainer from './components/HomepageContainer/HomepageContainer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CreateRestaurant from './components/CreateRestaurant/CreateRestaurant';
import Details from './components/Details/Details';
import DetailsWithClass_old from './components/Details/DetailsWithClass_old';
import EditRestaurant from './components/EditRestaurant/EditRestaurant';
import RestaurantsWrapper from './components/RestaurantsWrapper/RestaurantsWrapper';
import Profile from './components/Profile/Profile';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { AuthProvider } from './components/Auth/Auth';



import { style } from './Main.css';



class Main extends Component{
    render(){
        return(
            <AuthProvider>
            <div className="container">
            <Header />
            <Switch>
            <Route path="/" exact component={HomepageContainer}/>
            <Route path="/create" component={CreateRestaurant}/>
            <Route path="/all-restaurants" component={RestaurantsWrapper}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/details/:id" component={Details}/>
            <Route path="/edit/:id" component={EditRestaurant}/>
            <Route component={ErrorPage}/>
            </Switch>
            <Footer />
            </div>
            </AuthProvider>
        )
    }
}


export default Main;