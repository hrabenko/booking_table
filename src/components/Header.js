import Nav from "./Nav";
import '../styles/Header.css';
import HeaderLogo from '../images/header_logo.png';


function Header () {
    return(
        <header>
            <img className="header-logo" src={HeaderLogo} alt="Logo" />
            <Nav />
        </header>
    )
}

export default Header;