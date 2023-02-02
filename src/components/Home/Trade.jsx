import React from "react";
import { Link } from "react-router-dom";

function Trade() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <img
              src="https://cdn-ds.com/media/dfmodels/9135/AdditionalImage-97568.png"
              width={"600px"}
              style={{ marginLeft: "3%" }}
              alt=""
            />
          </div>
          <div className="col-md-7 p-5">
            <h1>Trade In or Sell Your Car in 1 Day</h1>
            <ol className="p-4">
              <li className="p-3 border-bottom" style={{ fontSize: "20px" }}>
                Schedule an inspection at home or at our nearest hub{" "}
              </li>
              <li className="p-3 border-bottom" style={{ fontSize: "20px" }}>
                Sell your car for the best price in the market
              </li>
              <li className="p-3 border-bottom" style={{ fontSize: "20px" }}>
                Get an instant offer
              </li>
            </ol>

            <Link to="/post">
              <button
                className="btn btn-outline-dark m-2 "
                style={{ fontSize: "20px", padding: "7px 50px " }}
              >
                Sell Your Car Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trade;
