import React from "react";
import CostumePart from "./CostumePart";
import PropTypes from "prop-types";

function CostumePartList(props) {

    return (
        <React.Fragment>
            <hr />
            {props.costumePartList.map((costumePart) =>
                <CostumePart
                    whenCostumePartClicked={props.onCostumePartSelection}
                    imageurl={costumePart.imageurl}
                    names={costumePart.names}
                    size={costumePart.size}
                    description={costumePart.description}
                    id={costumePart.id}
                    key={costumePart.id} />
            )}
        </React.Fragment>
    );
}

CostumePartList.propTypes = {
    costumePartList: PropTypes.array,
    onCostumePartSelection: PropTypes.func
};

export default CostumePartList;