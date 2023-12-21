import { Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import {useReducer} from "react";
import { fetchAPI } from "../bookingAPI";


function Main () {
    function updateTimes(date) {
        return fetchAPI(date);
    }
    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
            </Routes>
        </main>
    )
}

export default Main;