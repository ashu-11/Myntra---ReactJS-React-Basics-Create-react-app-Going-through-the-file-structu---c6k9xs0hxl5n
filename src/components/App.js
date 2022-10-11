import React from "react";
import "../styles/App.css";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import Sorting from "../components/Sorting";
import Appcontext from "../context/myntraContext"
import data from  "../../data";
import { useState } from "react/cjs/react.production.min";

const App = () => {
  const [allProducts,setAllProducts]= useState(data);
  const [filetredProducts,setfilteredProducts]= useState(data);
  
  return (
    <Appcontext.Provider value={{
      allProducts:allProducts,
      filetredProducts:filetredProducts,
      setfilteredProducts:setfilteredProducts
    }}> 
    <div id="main">
      <Navbar />
      <div style={{ display: "flex" }}>
        <Filter />

        <Sorting />
      </div>
    </div>
    </Appcontext.Provider>
  );
};

export default App;
