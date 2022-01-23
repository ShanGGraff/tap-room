import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingBuy } = props;
  
  return (
    <React.Fragment>
      <h1>Keg Detail: {keg.name}</h1>
      <ul>
          <li>Brand: {keg.brand}</li>
          <li>Price: ${keg.price} per pint</li>
          <li>ABV: {keg.abv}</li>
        </ul>
        <p>
        {keg.quantity > 0 ? (
            <b>Pints left: {keg.quantity}</b> 
          ) : (
            <b>Keg is empty!</b>
          )}
          </p>
        <button onClick={() => onClickingBuy(keg.id)}>Buy A Pint!</button>
        <button onClick={()=> onClickingDelete(keg.id) }>Remove Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingkBuy: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegDetail;