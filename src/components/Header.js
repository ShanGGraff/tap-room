import React from "react";
import kegsImage from "./../img/DSC_6920.png";

function Header(){
  return (
    <React.Fragment>
    <h1>Tap Room</h1>
    <img src={kegsImage} alt="Kegs in a truck" />
    </React.Fragment>
  );
}

export default Header;