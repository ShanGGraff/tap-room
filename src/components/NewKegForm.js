import PropTypes from "prop-types";
import React from "react";
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid'

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: parseInt(event.target.price.value), abv: parseInt(event.target.abv.value), quantity: 124, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Order Keg!" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;