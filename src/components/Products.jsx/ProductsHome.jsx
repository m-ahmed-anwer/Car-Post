import React from "react";

function ProductsHome(props) {
  return (
    <>
      <div className="col-lg-3 ">
        <div className="card shadow mb-5 bg-white rounded">
          <img
            src={props.post.img}
            className="card-img-top"
            height={"180px"}
            style={{ maxWidth: "300px", margin: "auto" }}
            alt=""
          />
          <div className="card-body pt-4 px-0">
            <div className="d-flex flex-row justify-content-between mb-0 px-3">
              <small className="text-muted">BRAND</small>
              <h6 className="text-capitalize">{props.post.brand}</h6>
            </div>
            <hr className="mt-0 mx-3" />
            <div className="d-flex flex-row justify-content-between mb-0 px-3">
              <small className="text-muted">MODEL</small>
              <h6 className="text-capitalize">{props.post.model}</h6>
            </div>
            <hr className="mt-0 mx-3" />
            <div className="d-flex flex-row justify-content-between mb-0 px-3">
              <small className="text-muted">STARTING AT</small>
              <h6 className="text-capitalize">{props.post.price} AED</h6>
            </div>
            <hr className="mt-0 mx-3" />
            <div className="d-flex flex-row justify-content-between mb-0 px-3">
              <small className="text-muted">FUEL TYPE</small>
              <h6 className="text-capitalize">{props.post.fueltype}</h6>
            </div>
            <hr className="mt-0 mx-3" />
            <div className="d-flex flex-row justify-content-between px-3 pt-0 pb-1 mid text-center">
              <div className="d-flex flex-column ">
                <small className="text-muted mb-1 pb-2">MILEAGE</small>
                <div className="d-flex flex-column ml-1">
                  <small className="text-capitalize">
                    {" "}
                    {props.post.mileage} KM
                  </small>
                </div>
              </div>
              <div className="d-flex flex-column ">
                <small className="text-muted mb-1 pb-2">
                  YEAR OF MANUFACTURE
                </small>
                <div className="d-flex flex-column ml-1">
                  <small className="text-capitalize"> {props.post.year}</small>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-between px-3 pt-2 pb-2  mid">
              <div className="d-flex flex-column pb-2 pt-0">
                <small className="text-muted mb-1 pb-2">ENGINE</small>
                <div className="d-flex flex-row">
                  <img
                    src="https://imgur.com/iPtsG7I.png"
                    width={"30px"}
                    height={"22px"}
                    alt=""
                    className="mx-1"
                  />
                  <div className="d-flex flex-column ml-1">
                    <small className="text-capitalize">
                      {props.post.engine}
                    </small>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column pb-2 pt-0">
                <small className="text-muted mb-1 pb-2">TRANSMISSION</small>
                <div className="d-flex flex-row">
                  <img
                    src="https://imgur.com/J11mEBq.png"
                    width={"20px"}
                    height={"22px"}
                    alt=""
                    className="mx-1"
                  />
                  <div className="d-flex flex-column ml-1">
                    <small className="text-capitalize">
                      {props.post.transmission}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <small className="text-muted key p-3">Standard key Features</small>

            <div className="mx-3 mt-3 mb-2">
              <button type="button" className="btn btn-dark btn-block">
                <small>Buy Now</small>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductsHome;
