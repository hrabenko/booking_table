import {useState} from "react";
import "./BookingForm.css";

function BookingForm() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const occasionOptions = ["Birthday", "Engagement", "Anniversary"];

    const dateChange = (e) => {
        setDate(e.target.value);
    }

    const timeChange = (e) => {
        setTime(e.target.value);
    }

    const guestsChange = (e) => {
        setGuests(e.target.value);
    }

    const occasionChange = (e) => {
        setOccasion(e.target.value);
    }


    return (
        <form>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={dateChange} value={date}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={timeChange}>
                {availableTimes.map((elem) => {
                    if (elem === time) {
                        return <option selected>{elem}</option>
                    }
                    return <option>{elem}</option>
                })}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" value={guests} onChange={guestsChange} placeholder="1" min="1" max="10" id="guests"/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={occasionChange}>
                {occasionOptions.map((elem) => {
                    if (elem === occasion) {
                        return <option selected>{elem}</option>
                    }
                    return <option>{elem}</option>
                })}
            </select>
            <input id="form-button" type="submit" value="Make Your reservation"/>
        </form>
    )
}

export default BookingForm;