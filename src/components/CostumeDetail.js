import React from "react";
import PropTypes from "prop-types";

function CostumeDetail(props) {
    const { costume, onClickingDelete, onAddingStock, onSubtractingStock } = props;

    return (
        <React.Fragment>
            <div className="costume-detail">
                <h1>costume Details</h1>
                <img src={costume.imageurl ? props.costume.imageurl : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"} alt="" />
                <h3>Name: {costume.names}</h3>
                <p>Brand: {costume.brand}</p>
                <p>Price: {costume.price}</p>
                <p>Size: <em>{costume.size}</em></p>
                <p>Extra notes about the costume: <em>{costume.description}</em></p>
                <p>amount in stock: {costume.quantity}</p>
                <h3>Add to Cart?
                    <button id="buttonStyle" onClick={() => onSubtractingStock(costume)}>Yes</button>
                    <button id="buttonStyle" onClick={() => onAddingStock(costume)}>No</button>
                </h3>
                <button id="buttonStyle" onClick={() => onClickingDelete(costume.id)}>Remove costume</button>
                <hr />
            </div>
        </React.Fragment>
    );
}

CostumeDetail.propTypes = {
    costume: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func,
    onAddingStock: PropTypes.func,
    onSubtractingStock: PropTypes.func
};

export default CostumeDetail;