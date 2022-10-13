import React, { useState, useContext } from "react";
import AppContext from "../context/myntraContext";

function CartModal(props) {
    const {cart}= useContext(AppContext)
    
    return (
       <h1>Hello1 cart</h1>
    //  <div
    //   id="cart-modal-content"      
    //   style={{
    //     position: "absolute",
    //     zIndex: 1000,
    //     top: "45%",
    //     left: "30%",
    //     background: "white",
    //     padding: 10,
    //   }}
    // >
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //     }}
    //   >
    //     <div
    //       onClick={() => {
    //         props.onClose();
    //       }}
    //       style={{ position: "relative", right: "0" }}
    //     >
    //       X
    //     </div>
    //   </div>
      
    //   <div>
          
    //       {
    //           cart.map((items)=>{
                  
    //               return (
    //                   <div>
    //                       <div>
    //                       <img src={items.products.otherImages[0]}></img>
    //                       </div>
    //                       <div>{items.products.name}</div>
    //                         <div>
    //                         <i>{items.products.description}</i>
    //                         </div>
    //                         <div>Rs.{items.products.finalPrice}</div>
    //                         <div>
    //                         <strike>{items.products.strickPrice}</strike>
    //                         </div>
    //                         <div style={{ color: "red" }}>{items.products.discount}% OFF</div>   
    //                     </div>
                      
    //               )
                  
    //           })
    //       }
          
    //   </div>
      
      )  
     }

export default CartModal;
