import BookingForm from "./BookingForm";
import "./BookingPage.css";
function BookingPage () {
    return (
        <div id="booking">
            <h1>Book a table</h1>
            <div id="booking-container">
                <img src="images/restaurant.jpg" />
                <BookingForm />
            </div>
        </div>
    )
}

export default BookingPage;