import Success from "../images/success.svg";

export default function SuccessMessage ({handleHome}) {
    return (
        <div className="success-container">
            <div className="image-container">
                <img src={Success} className="success-image" alt="success" />
                <h2 id="success-title">The table has been successfully booked</h2>
                <input id="home-button" aria-label="On Click" onClick={handleHome} className="btn" type="submit" value="Home"/>
            </div>
        </div>
    )
}