import {useState} from "react";
import "../styles/BookingForm.css";
import {useNavigate} from "react-router-dom";
import Success from '../images/success.svg';
import SuccessMessage from "./SuccessMessage";
import PersonalInfoForm from "./PersonalInfoForm";
import ReservationForm from "./ReservationForm";

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
        props.dispatch({type: 'REMOVE_TIME', payload: time});
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
                fullName && validateEmail(email)
            ) {
                return true;
            }
        }
        return false;
    };

    if (formState === "reservation") {
        return (
            <ReservationForm handleReservation={handleReservation}
                             dateChange={dateChange}
                             date={date}
                             timeChange={timeChange}
                             availableTimes={props.availableTimes}
                             guestsChange={guestsChange}
                             occasionChange={occasionChange}
                             occasionOptions={occasionOptions}
                             occasion={occasion}
                             getIsFormValid={getIsFormValid}/>
        )
    } else if (formState === "personal") {
        return (
            <PersonalInfoForm handlePersonal={handlePersonal}
                              date={date}
                              time={time}
                              guests={guests}
                              occasion={occasion}
                              fullnameChange={fullnameChange}
                              emailChange={emailChange}
                              getIsFormValid={getIsFormValid}
                              fullName={fullName} email={email}/>
        )
    } else if (formState === "success") {
        return (
            <SuccessMessage handleHome={handleHome}/>
        )
    }


}

export default BookingForm;