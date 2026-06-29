// import React from "react";
import "../css/rubic-pos.css";

const RubicPOS = () => {
  return (
    <div className="rubic-pos">
      <div className="rubic-pos-left">
        <div className="rubic-pos-header">
          <div className="logo">
            <img
              src="https://intercom.help/scoutmotors/assets/favicon"
              alt="SaleSync Logo"
              className="logo"
            />
            <h2>aleSync</h2>
          </div>
          {/* // By Product Search Form */}
          <form action="">
            <div className="form-top-fields">
              <div className="form-field">
                <label htmlFor="by-product">By Product : </label>
                <input
                  type="text"
                  name="by-product"
                  id="by-product"
                  placeholder="Enter product name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="by-barcode">By Barcode : </label>
                <input
                  type="number"
                  name="by-barcode"
                  id="by-barcode"
                  placeholder="Enter barcode"
                />
              </div>

              <div className="form-field">
                <label htmlFor="qnty">Quantity : </label>
                <input
                  type="number"
                  name="qnty"
                  id="qnty"
                  placeholder="Enter quantity"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="rubic-pos-right">
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </div>
    </div>
  );
};

export default RubicPOS;
