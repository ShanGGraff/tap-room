import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='number'
          name='price'
          placeholder='Price' />
        <input
          type='number'
          name='abv'
          placeholder='Alcohol Content'
        />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  onSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;