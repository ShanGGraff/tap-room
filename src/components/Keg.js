import React from "react";

function Keg(){
  const name = "Starburst IPA";
  const brand = "Ecliptic";
  const price = "5";
  const abv = "7.8";
  
  return (
    <React.Fragment>
      <ul>
        <li>Brand: {brand}</li>
        <li>Name: {name}</li>
        <li>Price: ${price} per pint</li>
        <li>ABV: {abv}</li>
      </ul>
    </React.Fragment>
  );
}

export default Keg;