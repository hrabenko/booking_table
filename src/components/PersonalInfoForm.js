export default function PersonalInfoForm({
                                             handlePersonal,
                                             date,
                                             time,
                                             guests,
                                             occasion,
                                             fullnameChange,
                                             emailChange,
                                             getIsFormValid,
                                             fullName,
                                             email
                                         }) {
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
            <input
                type="text"
                aria-label="On Change"
                id="fullname"
                title="Required"
                value={fullName}
                onChange={fullnameChange}
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                aria-label="On Change"
                id="email"
                title="Required"
                value={email}
                onChange={emailChange}
            />
            <input
                id="personal-button"
                aria-label="On Click"
                disabled={!getIsFormValid()}
                className="btn"
                type="submit"
                value="Submit"
            />
        </form>
    );
}
