import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomepageGuest from './components/HomepageGuest';
import { style } from './Main.css';


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