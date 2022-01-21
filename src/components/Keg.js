import React from "react";

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

export default Keg;