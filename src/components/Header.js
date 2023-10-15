import Nav from "./Nav";
import './Header.css';


function Header () {
    return(
        <header>
            <img className="header-logo" src="images/header_logo.png" alt="Logo" />
            <Nav />
        </header>
    )
}

export default Header;