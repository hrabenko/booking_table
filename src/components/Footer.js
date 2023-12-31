import "../styles/Footer.css";
import FooterLogo from '../images/footer_logo.png';

function Footer () {
    return(
        <footer>
            <div>
                <img className="footer_logo" src={FooterLogo} alt="Logo" />
            </div>
            <div className="list-containers">
                <div>
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/booking">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>123 Main Street, Smalltown, USA</li>
                        <li><a href="tel:+11111111111">+1 111 111 11 11</a></li>
                        <li><a href="mailto:littlelemon@gmail.com">littlelemon@gmail.com</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="https://www.instagram.com/">Instagram</a></li>
                        <li><a href="https://www.facebook.com/">Facebook</a></li>
                    </ul>
                </div>
            </div>


        </footer>
    )
}

export default Footer;