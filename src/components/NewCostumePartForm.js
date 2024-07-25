import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
function NewCostumePartForm(props) {
    function handleNewCostumePartFormSubmission(costumePart) {
        console.log(costumePart.target);
        costumePart.preventDefault();
        props.onNewCostumePartCreation({
            names: costumePart.target.names.value,
            imageurl: costumePart.target.imageurl.value,
            size: costumePart.target.size.value,
            description: costumePart.target.description.value,
            quantity: 0,
            id: v4()
        });
    }

    return (
        <React.Fragment>
            <ReusableForm
                partFormSubmissionHandler={handleNewCostumePartFormSubmission}
                buttonText="Add costume Part!" />
        </React.Fragment>
    );
}

NewCostumePartForm.propTypes = {
    onNewCostumeCreation: PropTypes.func
};
export default NewCostumePartForm;