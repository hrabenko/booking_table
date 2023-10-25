import {useState} from "react";
import "../styles/BookingForm.css";
import {useNavigate} from "react-router-dom";

function BookingForm(props) {
    const navigate = useNavigate();

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("");
    const [formState, setFormState] = useState("reservation")

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

    const fullnameChange = (e) => {
        setFullName(e.target.value);
    }

    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleReservation = (e) => {
        e.preventDefault();
        props.dispatch({ type: 'REMOVE_TIME', payload: time });
        setFormState("personal");
    }

    const handlePersonal = () => {
        setFormState("success");
    }

    const handleHome = () => {
        navigate('/');
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const getIsFormValid = () => {
        if (formState === 'reservation') {
            let currentDate = new Date();
            let comparisonDate = new Date(date);
            if (
                (currentDate <= comparisonDate) &&
                time &&
                guests &&
                occasion
            ) {
                return true;
            }
        } else {
            if (
                fullName &&validateEmail(email)
            ) {
                return true;
            }
        }
        return false;
    };

    if (formState === "reservation") {
        return (
            <form onSubmit={handleReservation}>
                <label htmlFor="res-date" >Choose date</label>
                <input type="date" id="res-date" aria-label="On Change" title="Reqired and the selected date must be in the future" onChange={dateChange} value={date}  />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" aria-label="On Change" onChange={timeChange} title="Required">
                    {props.availableTimes.map((elem) => <option key={elem}>{elem}</option>)}
                </select>
                <label htmlFor="guests" >Number of guests</label>
                <input type="number" aria-label="On Change" title="Required" value={guests} onChange={guestsChange} placeholder="1" min="1" max="10" id="guests"  />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" aria-label="On Change" title="Required" onChange={occasionChange}  >
                    {occasionOptions.map((elem) => {
                        if (elem === occasion) {
                            return <option key={elem} selected>{elem}</option>
                        }
                        return <option key={elem}>{elem}</option>
                    })}
                </select>
                <input id="form-button" aria-label="On Click" disabled={!getIsFormValid()} className="btn" type="submit" value="Make Your reservation"/>
            </form>
        )
    } else if (formState === "personal") {
        return (
            <form onSubmit={handlePersonal}>
                <div className="booking-container">
                    <h4>Date and time:</h4>
                    <p>{date} {time}</p>
                    <h4>Number of guests:</h4>
                    <p>{guests}</p>
                    <h4>Occasion:</h4>
                    <p>{occasion}</p>
                </div>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" aria-label="On Change" id="fullname"  title="Required" value={fullName} onChange={fullnameChange}  />
                <label htmlFor="email">Email</label>
                <input type="email" aria-label="On Change" id="email"  title="Required" value={email} onChange={emailChange}  />
                <input id="personal-button" aria-label="On Click"  disabled={!getIsFormValid()} className="btn" type="submit" value="Submit"/>
            </form>
        )
    } else if (formState === "success") {
        return (
            <div className="success-container">
                <div className="image-container">
                    <img src="images/success.svg" className="success-image" alt="success" />
                    <h2 id="success-title">The table has been successfully booked</h2>
                    <input id="home-button" aria-label="On Click" onClick={handleHome} className="btn" type="submit" value="Home"/>
                </div>
            </div>
        )
    }



}

export default BookingForm;