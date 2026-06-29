import React from "react";

const RubicPOS = () => {
  return (
    <div className="rubic-pos">
      <div className="rubic-pos-header">
        <form action="">
          <label htmlFor="by-product">By Product : </label>
          <input
            type="text"
            name="by-product"
            id="by-product"
            placeholder="Enter product name"
          />
        </form>
      </div>
    </div>
  );
};

export default RubicPOS;
