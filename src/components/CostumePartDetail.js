import React from "react";
import PropTypes from "prop-types";

function CostumePartDetail(props) {
    const { costumePart, onClickingDelete } = props;

    return (
        <React.Fragment>
            <div className="costume-detail">
                <h1>costume Details</h1>
                <img src={costumePart.imageurl ? props.costumePart.imageurl : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"} alt="" />
                <h3>costume part Name: {costumePart.names}</h3>
                <p>size: <em>{costumePart.size}</em></p>
                <p>Extra notes about the costume part: <em>{costumePart.description}</em></p>
                <button id="buttonStyle" onClick={() => onClickingDelete(costumePart.id)}>Remove costume</button>
                <hr />
            </div>
        </React.Fragment>
    );
}

CostumePartDetail.propTypes = {
    costumePart: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func,
};

export default CostumePartDetail;