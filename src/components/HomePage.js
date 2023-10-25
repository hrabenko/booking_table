import "../styles/HomePage.css"
import { useNavigate } from 'react-router-dom';

function Special({ name, price, description, src}) {
    return (
        <div className='special'>
            <img className="dish" src={src} alt={name} />
            <div className="dish-text">
                <h2 className="dish-name">{name}</h2>
                <h3 className="dish-price">{"$" + price}</h3>
                <p className="dish-description">{description}</p>
                <div className="dish-delivery">
                    <h4>Order a delivery</h4>
                    <img src="images/delivery.svg"/>
                </div>
            </div>
        </div>
    )
}

function Testimonials({ photo, name, rating, text }) {
    return (
        <div className="testimonial">
            <div className="person">
                <img className="person-photo" src={photo} />
                <div>
                    <p className="person-name">{name}</p>
                    <div  className="rating">
                        <img src="/images/star.png" />
                        <p>{rating}</p>
                    </div>
                </div>
            </div>
            <p className="review-text">{text}</p>
        </div>
    )
}

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
                <img src="images/restauranfood.jpg" alt='Image of food'/>
            </section>
            <section className="specials">
                <Special
                    name={"Greek salad"}
                    price={"12.99"}
                    description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."}
                    src={"images/greek_salad.jpg"}
                />
                <Special
                    name={"Bruchetta"}
                    price={"5.99"}
                    description={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."}
                    src={"images/bruchetta.svg"}
                />
                <Special
                    name={"Lemon Dessert"}
                    price={"5.00"}
                    description={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
                    src={"images/lemon_dessert.jpg"}
                />
            </section>
            <section className="testimonials">
                <h1>Testimonials</h1>
                <div className="reviews">
                    <Testimonials
                        photo={"./images/jane.png"}
                        name={"Jane"}
                        rating={"9.5"}
                        text={"The restaurant has a great location with a city view, and the menu is diverse. Our best experience in this city!"}
                    />
                    <Testimonials
                        photo={"./images/robert.png"}
                        name={"Robert"}
                        rating={"9.8"}
                        text={"Top-notch service, quick and attentive. Tasty food and pleasant music."}
                    />
                    <Testimonials
                        photo={"./images/yakob.png"}
                        name={"Yakob"}
                        rating={"9.7"}
                        text={"Unexpectedly delicious dishes and great attention to detail in the decor. An excellent place for special occasions."}
                    />
                    <Testimonials
                        photo={"./images/kayle.png"}
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