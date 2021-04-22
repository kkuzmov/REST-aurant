import { style } from './Footer.css';
import { Link } from 'react-router-dom';


function Footer(){
    return(
        <footer className="main-footer">&copy; 2021, created by <Link to="https://www.linkedin.com/in/krumkuzmov/" className="footer-link" ><a>Krum Kuzmov</a></Link></footer>
    )
}

export default Footer;