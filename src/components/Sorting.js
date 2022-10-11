import React from "react";

function Sorting() {
  return (
    <div className="sort-holder">
      <select placeholder="sort by">
        <option>What's New</option>
        <option value="finalPrice">Price (low to high)</option>
        <option value="discounts"> Discounts(Better Discounts)</option>
      </select>
    </div>
  );
}

export default Sorting;
