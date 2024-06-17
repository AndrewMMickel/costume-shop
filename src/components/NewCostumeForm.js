import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
function NewCostumeForm(props) {
    function handleNewCostumeFormSubmission(costume) {
        console.log(costume.target);
        costume.preventDefault();
        props.onNewCostumeCreation({
            names: costume.target.names.value,
            imageurl: costume.target.imageurl.value,
            size: costume.target.size.value,
            description: costume.target.description.value,
            quantity: 0,
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