import React from "react";
import Costume from "./Costume";
import PropTypes from "prop-types";

function CostumeList(props) {

    return (
        <React.Fragment>
            <hr />
            {props.costumeList.map((costume) =>
                <Costume
                    whenCostumeClicked={props.onCostumeSelection}
                    imageurl={costume.imageurl}
                    names={costume.names}
                    brand={costume.brand}
                    price={costume.price}
                    size={costume.size}
                    description={costume.description}
                    id={costume.id}
                    key={costume.id} />
            )}
        </React.Fragment>
    );
}

CostumeList.propTypes = {
    costumeList: PropTypes.array,
    onCostumeSelection: PropTypes.func
};

export default CostumeList;