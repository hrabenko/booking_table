import "../styles/HomePage.css"
import { useNavigate } from 'react-router-dom';
import RestaurantFood from '../images/restauranfood.jpg';
import Special from "../components/Special";
import Testimonials from '../components/Testimonials';
import GreekSalad from '../images/greek_salad.jpg';
import Bruchetta from '../images/bruchetta.svg';
import LemonDessert from '../images/lemon_dessert.jpg';
import Jane from '../images/jane.png';
import Robert from '../images/robert.png';
import Yakob from '../images/yakob.png';
import Kayle from '../images/kayle.png';

function HomePage () {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/booking');
    };

    return (
        <>
            <section className="call-to-action">
                <div>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button aria-label="On Click" onClick={handleButtonClick}>Reserve a table</button>
                </div>
                <img src={RestaurantFood} alt='Image of food'/>
            </section>
            <section className="specials">
                <Special
                    name={"Greek salad"}
                    price={"12.99"}
                    description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."}
                    src={GreekSalad}
                />
                <Special
                    name={"Bruchetta"}
                    price={"5.99"}
                    description={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."}
                    src={Bruchetta}
                />
                <Special
                    name={"Lemon Dessert"}
                    price={"5.00"}
                    description={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
                    src={LemonDessert}
                />
            </section>
            <section className="testimonials">
                <h1>Testimonials</h1>
                <div className="reviews">
                    <Testimonials
                        photo={Jane}
                        name={"Jane"}
                        rating={"9.5"}
                        text={"The restaurant has a great location with a city view, and the menu is diverse. Our best experience in this city!"}
                    />
                    <Testimonials
                        photo={Robert}
                        name={"Robert"}
                        rating={"9.8"}
                        text={"Top-notch service, quick and attentive. Tasty food and pleasant music."}
                    />
                    <Testimonials
                        photo={Yakob}
                        name={"Yakob"}
                        rating={"9.7"}
                        text={"Unexpectedly delicious dishes and great attention to detail in the decor. An excellent place for special occasions."}
                    />
                    <Testimonials
                        photo={Kayle}
                        name={"Kayle"}
                        rating={"10.0"}
                        text={"Fantastic ambiance and delicious cuisine! We will definitely return."}
                    />
                </div>
            </section>
        </>
    )
}

export default HomePage;