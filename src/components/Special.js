import DeliveryImage from "../images/delivery.svg";

export default function Special({ name, price, description, src}) {
    return (
        <div className='special'>
            <img className="dish" src={src} alt={name} />
            <div className="dish-text">
                <h2 className="dish-name">{name}</h2>
                <h3 className="dish-price">{"$" + price}</h3>
                <p className="dish-description">{description}</p>
                <div className="dish-delivery">
                    <h4>Order a delivery</h4>
                    <img src={DeliveryImage} alt="Image"/>
                </div>
            </div>
        </div>
    )
}