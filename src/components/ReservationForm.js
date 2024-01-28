export default function ReservationForm({
                                            handleReservation,
                                            dateChange,
                                            date,
                                            guests,
                                            timeChange,
                                            availableTimes,
                                            guestsChange,
                                            occasionChange,
                                            occasionOptions,
                                            occasion,
                                            getIsFormValid
                                        }) {
    return (
        <form onSubmit={handleReservation}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" aria-label="On Change"
                   title="Reqired and the selected date must be in the future" onChange={dateChange} value={date}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" aria-label="On Change" onChange={timeChange} title="Required">
                {availableTimes.map((elem) => <option key={elem}>{elem}</option>)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" aria-label="On Change" title="Required" value={guests} onChange={guestsChange}
                   placeholder="1" min="1" max="10" id="guests"/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" aria-label="On Change" title="Required" onChange={occasionChange}>
                {occasionOptions.map((elem) => {
                    if (elem === occasion) {
                        return <option key={elem} selected>{elem}</option>
                    }
                    return <option key={elem}>{elem}</option>
                })}
            </select>
            <input id="form-button" aria-label="On Click" disabled={!getIsFormValid()} className="btn" type="submit"
                   value="Make Your reservation"/>
        </form>
    )
}