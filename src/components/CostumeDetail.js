import React from "react";
import PropTypes from "prop-types";

function CostumeDetail(props) {
    const { costume, onClickingDelete, onSubtractingStock, onAddCostumePart, selectedCostumeList } = props;

    return (
        <React.Fragment>
            <div className="costume-detail">
                <h1>costume Details</h1>
                <img src={costume.imageurl ? costume.imageurl : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"} alt="" />
                <h3>Name: {costume.names}</h3>
                <p>Brand: {costume.brand}</p>
                <p>Price: {costume.price}</p>
                <p>Size: <em>{costume.size}</em></p>
                <p>Extra notes about the costume: <em>{costume.description}</em></p>
                <p>amount in stock: {costume.quantity}</p>
                <h3>Add to Cart?
                    <button id="buttonStyle" onClick={() => onSubtractingStock(costume)}>Yes</button>
                </h3>
                <button id="buttonStyle" onClick={() => onClickingDelete(costume.id)}>Remove costume</button>
                <hr />
                <p>Add a part! </p><select
                    onChange={(e) => onAddCostumePart(e.target.value)}>
                    {props.costumePartList.map((part) => (
                        <option key={part.id} value={part.id}>
                            {part.names}
                        </option>
                    ))}
                </select>
                {(selectedCostumeList != null) &&
                    <div>
                        {props.selectedCostumeList.map((part) =>
                            <>
                                <h1>Selected Part: {part?.names}</h1>
                                <p><img src={part?.imageurl ? part.imageurl : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"} alt="" /></p>
                                <p>Brand: {part?.brand}</p>
                                <p>Size: {part?.size}</p>
                                <p>Description: {part?.description}</p>
                            </>
                        )}
                    </div>
                }
            </div>
        </React.Fragment>
    );
}
//fix buttons. fix stock issues. Why does it go up when you click no?

CostumeDetail.propTypes = {
    costume: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func,
    onAddingStock: PropTypes.func,
    onSubtractingStock: PropTypes.func,
    costumePartList: PropTypes.array,
    selectedCostumeList: PropTypes.array
};

export default CostumeDetail;