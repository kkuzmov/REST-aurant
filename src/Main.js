import React, {Component} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomepageGuest from './components/HomepageGuest/HomepageGuest';
import HomepageUser from './components/HomepageUser/HomepageUser';
import Login from './components/Login/Login';

import { style } from './Main.css';

//TESTING WITH ONE LOOK PER TIME - LEAVE ONLY HEADER AND FOOTER AS CONSTANTS!


class Main extends Component{
    render(){
        return(
            <>
           <Header />
           <Login />
           <Footer />
           </>
        )
    }
}


export default Main;