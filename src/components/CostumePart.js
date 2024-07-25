import React from "react";
import PropTypes from "prop-types";

function CostumePart(props) {
    return (
        <React.Fragment>
            <div onClick={() => props.whenCostumePartClicked(props.id)} className="costumePart-comp">
                <img src={props.imageurl ? props.imageurl : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"} alt={props.name} />
                <h3>{props.partNames}</h3>
                <p><em>{props.partSize}</em></p>
                <p><em>{props.partDescription}</em></p>
                <p>{props.partQuantity}</p>
                <hr />
            </div>
        </React.Fragment>
    );
}

CostumePart.propTypes = {
    partNames: PropTypes.string,
    partSize: PropTypes.string,
    partDescription: PropTypes.string,
    id: PropTypes.string,
    partQuantity: PropTypes.number,
    whenCostumePartClicked: PropTypes.func
};

export default CostumePart;