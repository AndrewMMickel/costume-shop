import React from "react";
import PropTypes from "prop-types";

function Costume(props) {
    return (
        <React.Fragment>
            <div onClick={() => props.whenCostumeClicked(props.id)} className="costume-comp">
                <img src={props.imageurl ? props.imageurl : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"} alt={props.name} />
                <h3>{props.names}</h3>
                <p>Brand: {props.brand}</p>
                <p>Price: {props.price}</p>
                <p>Size: {props.size}</p>
                <p>Description: {props.description}</p>
                <p>{props.quantity}</p>
                <hr />
            </div>
        </React.Fragment>
    );
}

Costume.propTypes = {
    names: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.string,
    size: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    quantity: PropTypes.number,
    whenCostumeClicked: PropTypes.func
};

export default Costume;