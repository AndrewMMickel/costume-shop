import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
function NewCostumeForm(props) {
    function handleNewCostumeFormSubmission(costume) {
        costume.preventDefault();
        props.onNewCostumeCreation({
            names: costume.target.names.value,
            imageurl: costume.target.imageurl.value,
            brand: costume.target.brand.value,
            price: costume.target.price.value,
            size: costume.target.size.value,
            description: costume.target.description.value,
            quantity: costume.target.quantity.value,
            id: v4()
        });
    }

    return (
        <React.Fragment>
            <ReusableForm
                formSubmissionHandler={handleNewCostumeFormSubmission}
                buttonText="Add costume!" />
        </React.Fragment>
    );
}

NewCostumeForm.propTypes = {
    onNewCostumeCreation: PropTypes.func
};
export default NewCostumeForm;