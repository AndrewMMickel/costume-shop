import React from "react";
import PropTypes from "prop-types";

function ReusablePartForm(props) {
    return (
        <React.Fragment>
            <form onSubmit={props.partFormSubmissionHandler}>
                <label htmlFor='imageurl'>Image url</label><br />
                <input
                    type='text'
                    name='imageurl'
                    placeholder='URL to image'
                    defaultValue={props ? props.imageurl : ""} /><br />
                <input
                    type='text'
                    name='names'
                    placeholder='Costume Name' />
                <input
                    type='text'
                    name='brand'
                    placeholder='Brand' />
                <input
                    type='number'
                    name='price'
                    placeholder='Price' />
                <input
                    type='text'
                    name='size'
                    placeholder='Size' />
                <textarea
                    name='description'
                    placeholder='Describe the Costume.' />
                <button type='submit'>{props.buttonText}</button>
                <button type='submit'>{props.buttonText2}</button>
            </form>
        </React.Fragment>
    );
}

ReusablePartForm.propTypes = {
    partFormSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusablePartForm;