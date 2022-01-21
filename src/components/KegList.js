import React from "react";
import Keg from "./Keg";

const mainKegList = [
  {
    brand: "Ecliptic",
    name: "Starburst IPA",
    price: "5",
    abv: "7.8"
  },
  {
    brand: "Ninkasi",
    name: "Tricerahops Double IPA",
    price: "5.50",
    abv: "8"
  }
];

function KegList(){
  return (
    <React.Fragment>
      <hr/>
        {mainKegList.map((keg, index) =>
          <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            key={index}/>
        )}
    </React.Fragment>
  );
}

export default KegList;