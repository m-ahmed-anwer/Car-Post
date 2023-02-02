import React from "react";

import Footer from "../Footer/Foot";
import Second from "./Second";

function Home() {
  return (
    <>
      <div className="container" style={{ paddingTop: "5%" }}>
        <div className="row">
          <div className="col-sm text-justify p-5">
            <h1 className="text-uppercase">The Smartest Way of Buying a car</h1>
            <p style={{ paddingTop: "10%", fontSize: "18px" }}>
              Don't deny yourself the pleasure of driving the premium cars from
              around the world here and now
            </p>
          </div>
          <div className="col-sm">
            <img
              src="https://di-uploads-pod5.dealerinspire.com/garberautomotiverochesterredesign/uploads/2018/11/Rochester-NY-Porsche-911-For-Sale-600x279.png"
              height={"auto"}
              width={"auto"}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ paddingBottom: "3rem" }}>
        <div className="row m-3">
          <div className="col-sm">
            <img
              src="https://www.carlogos.org/logo/Bugatti-logo-1024x768.png"
              height={"100px"}
              alt=""
            />
          </div>
          <div className="col-sm">
            <img
              src="https://www.carlogos.org/car-logos/ferrari-logo-750x1100.png"
              height={"100px"}
              alt=""
            />
          </div>

          <div className="col-sm">
            <img
              src="https://www.carlogos.org/logo/Rolls-Royce-logo-2048x2048.png"
              height={"100px"}
              alt=""
            />
          </div>
          <div className="col-sm">
            <img
              src="https://www.carlogos.org/car-logos/porsche-logo-2100x1100.png"
              height={"100px"}
              alt=""
            />
          </div>
          <div className="col-sm">
            <img
              src="https://www.carlogos.org/car-logos/lamborghini-logo-1000x1100.png"
              height={"100px"}
              alt=""
            />
          </div>
          <div className="col-sm">
            <img
              src="https://www.carlogos.org/car-logos/maserati-logo-2020.png"
              height={"100px"}
              alt=""
            />
          </div>
          <div className="col-sm">
            <img
              src="https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png"
              height={"100px"}
              alt=""
            />
          </div>
          <div className="col-sm">
            <img
              src="https://www.carlogos.org/car-logos/bentley-logo-1400x800.png"
              height={"100px"}
              alt=""
            />
          </div>
        </div>
      </div>
      <Second />
      <Footer />
    </>
  );
}
export default Home;
