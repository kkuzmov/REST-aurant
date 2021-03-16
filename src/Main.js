import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { style } from './Main.css';


class Main extends Component{
    render(){
        return(
            <div>
           <Header />
           <Footer />
           </div>
        )
    }
}


export default Main;