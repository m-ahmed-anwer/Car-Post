import React, { useEffect, useState } from "react";
import Footer from "../Footer/Foot";
import Products from "../Products.jsx/Products";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";

function Cars() {
  const [post, setPost] = useState([""]);

  useEffect(() => {
    const apiUrl =
      "https://whistlepost-a4d19-default-rtdb.firebaseio.com/post.json";

    axios.get(apiUrl).then(
      (response) => {
        if (response.data) {
          setPost(Object.values(response.data));
          console.log(Object.values(response.data));
        }
      },
      [post]
    );
  });

  const productElement = post.map((item) => {
    return <Products id={item.id} post={item} />;
  });

  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-3" style={{ maxWidth: "240px" }}>
            <Accordion className="mt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                  <form action="">
                    <div className="form-group">
                      <input
                        type="number"
                        placeholder="Min Price"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <div className="d-grid gap-2">
                        <button
                          type="submit"
                          className="btn btn-secondary mt-3"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <hr className="mt-4 mb-3" />
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Brand</Accordion.Header>
                <Accordion.Body>
                  <form action="">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Search Brand"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <div className="d-grid gap-2">
                        <button
                          type="submit"
                          className="btn btn-secondary mt-3"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <hr className="mt-4 mb-3" />
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Model</Accordion.Header>
                <Accordion.Body>
                  <form action="">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Search Model"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <div className="d-grid gap-2">
                        <button
                          type="submit"
                          className="btn btn-secondary mt-3"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <hr className="mt-4 mb-3" />
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Year of Manufacture</Accordion.Header>
                <Accordion.Body>
                  <form action="">
                    <div className="form-group">
                      <input
                        type="number"
                        placeholder="Min Year"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <div className="d-grid gap-2">
                        <button
                          type="submit"
                          className="btn btn-secondary mt-3"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <hr className="mt-4 mb-3" />
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Condition</Accordion.Header>
                <Accordion.Body>
                  <form action="">
                    <div className="form-check">
                      <input type="radio" name="condition" />
                      <label className="px-2">New</label>
                    </div>
                    <div className="form-check">
                      <input type="radio" name="condition" />
                      <label className="px-2">Used</label>
                    </div>
                    <div className="form-check">
                      <input type="radio" name="condition" />
                      <label className="px-2">Recondition</label>
                    </div>

                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-secondary mt-3">
                        Apply
                      </button>
                    </div>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <hr className="mt-4 mb-3" />
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Fuel Type</Accordion.Header>
                <Accordion.Body>
                  <form action="">
                    <div className="form-check">
                      <input type="radio" name="fuel" />
                      <label className="px-2">Petrol</label>
                    </div>
                    <div className="form-check">
                      <input type="radio" name="fuel" />
                      <label className="px-2">Diesel</label>
                    </div>
                    <div className="form-check">
                      <input type="radio" name="fuel" />
                      <label className="px-2">Electric</label>
                    </div>

                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-secondary mt-3">
                        Apply
                      </button>
                    </div>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <hr className="mt-4 mb-3" />
            <Accordion className="mb-5">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Mileage</Accordion.Header>
                <Accordion.Body>
                  <form action="">
                    <div className="form-group">
                      <input
                        type="number"
                        placeholder="Min Mileage"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <div className="d-grid gap-2">
                        <button
                          type="submit"
                          className="btn btn-secondary mt-3"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-md-9">
            <div
              className="row justify-content-center"
              style={{ maxWidth: "1300px" }}
            >
              {productElement}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Cars;
