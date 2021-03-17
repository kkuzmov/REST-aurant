import React, {Component} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomepageGuest from './components/HomepageGuest/HomepageGuest';
import { style } from './Main.css';

//TESTING WITH ONE LOOK PER TIME - LEAVE ONLY HEADER AND FOOTER AS CONSTANTS!


class Main extends Component{
    render(){
        return(
            <>
           <Header />
           <HomepageGuest />
           <Footer />
           </>
        )
    }
}


export default Main;