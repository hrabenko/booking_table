import BookingForm from "./BookingForm";
import "../styles/BookingPage.css";
import {useState} from "react";

function BookingPage (props) {

    return (
        <div id="booking">
            <h1>Book a table</h1>
            <div id="booking-container">
                <img className='restaurant-img' src="images/restaurant.jpg" />
                <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} />
            </div>
        </div>
    )
}

export default BookingPage;