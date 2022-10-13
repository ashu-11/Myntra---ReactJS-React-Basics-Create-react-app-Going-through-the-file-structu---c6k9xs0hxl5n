import React, { useContext, useState } from "react";
import AppContext from "../context/myntraContext";
import Modal from "../components/Modal";

function Product() {
  const { filetredProducts } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [phtosGallery, setPhotosGallery] = useState({});
  return (
    <div
      className="product-tile-holder"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        gap: "2rem",
      }}
    >
      {showModal ? (
        <Modal
          productImages={phtosGallery}
          onClose={()=>{
            setShowModal(false);
          }}
        />
      ) : null}
      {filetredProducts.map((product) => {
        return (
          <div className="indiv-tile-holder" style={{ marginRight: 20 }}>
            <img
              src={product.otherImages[0]}
              width="200"
              height="200"
              onClick={() => {
                setShowModal(true);
                setPhotosGallery(product);
              }}
            ></img>
            <div>{product.name}</div>
            <div>
              <i>{product.description}</i>
            </div>
            <div>Rs.{product.finalPrice}</div>
            <div>
              <strike>{product.strickPrice}</strike>
            </div>
            <div style={{ color: "red" }}>{product.discount}% OFF</div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
