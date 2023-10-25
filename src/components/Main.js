import { Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import {useState, useReducer} from "react";
import { fetchAPI } from "../bookingAPI";


const reducer = (state, action) => {
    if (action.type === 'REMOVE_TIME') {
        return state.filter(time => time !== action.payload);
    }
    return state;
}

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