import { style } from './Footer.css';
import { Link } from 'react-router-dom';


function Footer(){
    return(
        <footer className="main-footer">&copy; 2021, created by <a href="https://www.linkedin.com/in/krumkuzmov/" className="footer-link" >Krum Kuzmov</a></footer>
    )
}

export default Footer;