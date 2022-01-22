import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;
  
  return (
    <React.Fragment>
      <h1>Keg Detail: {keg.name}</h1>
      <ul>
          <li>Brand: {keg.brand}</li>
          <li>Price: ${keg.price} per pint</li>
          <li>ABV: {keg.abv}</li>
        </ul>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;