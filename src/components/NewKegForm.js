import React from "react";
import { v4 } from 'uuid'

function NewKegForm(){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.price.value);
    console.log(event.target.abv.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
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
        <button type='submit'>Order Keg!</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;