import React, { useState } from "react"; 
import ProductsHome from "../Products.jsx/ProductsHome";
import Trade from "./Trade";
import ProductData from "../Data/ProductData";

function Second() {
  const [post] = useState(ProductData);
  const productElement = post.map((item) => {
    return <ProductsHome id={item.id} post={item} />;
  });
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.075)" }}
      >
        <div className="container">
          <div className="row" style={{ lineHeight: 2, padding: "3rem 0" }}>
            <div className="col-md p-4 hover-zoom">
              <div className="bg-image hover-zoom p-4">
                <img
                  src="https://www.cars24.com/js/72ee8594f9a2e0d3f78d675ff84c0333.svg"
                  height={"120px"}
                  className="w-100"
                  alt=""
                />
              </div>
              <h3>12 Month Warranty</h3>
              <p style={{ fontSize: "15px", paddingTop: "2rem" }}>
                Every Whistle car comes with a warranty to gurantee you peaace
                of mind with a smooth dependable ride with our 12 Month Warranty
                that is standard across all cars that we sell.
              </p>
            </div>
            <div className="col-md p-4 hover-zoom">
              <div className="bg-image hover-zoom p-4">
                <img
                  src="https://www.cars24.com/js/6f751a9d48793a9685f4a1313fed19ab.svg"
                  height={"120px"}
                  className="w-100"
                  alt=""
                />
              </div>
              <h3>Easy Financing Options</h3>
              <p style={{ fontSize: "15px", paddingTop: "2rem" }}>
                Become eligible for Zero Down Payment via EMIs of up to 72
                months and instant loans.
              </p>
            </div>

            <div className="col-md p-4 hover-zoom">
              <div className="bg-image hover-zoom p-4">
                <img
                  src="https://www.cars24.com/js/bbbbd42860bbd47dabc26a2c8ead6905.svg"
                  height={"120px"}
                  className="w-100"
                  alt=""
                />
              </div>
              <h3>7 Day Return</h3>
              <p style={{ fontSize: "15px", paddingTop: "2rem" }}>
                Love it, keep it. Changed your mind? Return it within 7 days for
                a full refund.
              </p>
            </div>
            <div className="col-md p-4 hover-zoom">
              <div className="bg-image hover-zoom p-4">
                <img
                  src="https://www.cars24.com/js/7f7b7d5596e5e520b606dd534be627b0.svg"
                  height={"120px"}
                  className="w-100"
                  alt=""
                />
              </div>
              <h3>140-Quality Checks</h3>
              <p style={{ fontSize: "15px", paddingTop: "2rem" }}>
                Inspected across 140 parameters and refurbished by auto-experts,
                our cars are ready for the road.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <h2 className="pb-5">Featured Cars</h2>

          {productElement}
        </div>
      </div>

      <Trade />
    </>
  );
}
export default Second;
