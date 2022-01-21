import React from "react";
import PropTypes from "prop-types";

function Keg(props){  
  return (
    <React.Fragment>
      <ul>
        <li>Brand: {props.brand}</li>
        <li>Name: {props.name}</li>
        <li>Price: ${props.price} per pint</li>
        <li>ABV: {props.abv}</li>
      </ul>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired
}

export default Keg;