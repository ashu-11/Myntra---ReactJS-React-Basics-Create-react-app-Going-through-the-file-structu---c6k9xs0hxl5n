import React, { useContext } from "react";
import AppContext from "../context/myntraContext";

function Product() {
  const { filetredProducts } = useContext(AppContext);
  return (
    <div style={{display:"flex", flexWrap:"wrap", marginTop:20,marginLeft:20}}>
      {filetredProducts.map((product) => {
        return (
          <div style={{marginRight:20}}>
            <img src={product.otherImages[0]} width="200" height="200"></img>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
