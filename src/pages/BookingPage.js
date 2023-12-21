import BookingForm from "../components/BookingForm";
import "../styles/BookingPage.css";
import Restaurant from '../images/restaurant.jpg';

function BookingPage (props) {

    return (
        <div id="booking">
            <h1>Book a table</h1>
            <div id="booking-container">
                <img className='restaurant-img' src={Restaurant} />
                <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} />
            </div>
        </div>
    )
}

export default BookingPage;