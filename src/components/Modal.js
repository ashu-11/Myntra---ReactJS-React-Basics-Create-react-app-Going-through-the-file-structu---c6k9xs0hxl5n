import React from "react";
function Modal(props) {
  return (
    <div
      id="product-modal"
      style={{
        position: "fixed",
        zIndex: 1000,
        top: "45%",
        left: "45%",
        background: "white",
      }}
    >
      {props.productImages.otherImages.map((images) => {
        return <img src={images} width="100" height="100" />;
      })}
    </div>
  );
}

export default Modal;
