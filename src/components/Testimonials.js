import Star from "../images/star.png";

export default function Testimonials({ photo, name, rating, text }) {
    return (
        <div className="testimonial">
            <div className="person">
                <img className="person-photo" src={photo} />
                <div>
                    <p className="person-name">{name}</p>
                    <div  className="rating">
                        <img src={Star} />
                        <p>{rating}</p>
                    </div>
                </div>
            </div>
            <p className="review-text">{text}</p>
        </div>
    )
}