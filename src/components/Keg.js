import React from "react";
import PropTypes from "prop-types";

function Keg(props){  
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h1>Beer Name: {props.name}, Brand: {props.brand}</h1>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  quantity: PropTypes.number,
  whenKegClicked: PropTypes.func
}

export default Keg;