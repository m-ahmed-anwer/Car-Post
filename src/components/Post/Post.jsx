import React from "react";
import Footer from "../Footer/Foot";
import { useFormik } from "formik";
import axios from "axios";
import { v4 as uuid4 } from "uuid";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Post() {
  const [message, settMessage] = useState(0);

  const initialValues = {
    condition: "",
    brand: "",
    model: "",
    fueltype: "",
    transmission: "",
    year: "",
    mileage: "",
    engine: "",
    description: "",
    img: "",
    price: "",
  };
  const onSubmit = (values, { resetForm }) => {
    const postId = uuid4();
    const apiUrl = `https://whistlepost-a4d19-default-rtdb.firebaseio.com/post/${postId}.json`;
    const post = { ...values, id: postId };
    axios
      .post(apiUrl, post)
      .then((response) => {
        if (response.status === 200) {
          settMessage("A new post created");
          resetForm({ values: "" });
        }
      })
      .catch((error) => {
        settMessage("An error occured");
      });
  };
  const validate = (values) => {
    let errors = {};

    if (!values.brand) {
      errors.brand = "Brand cannot be null";
    }
    if (!values.model) {
      errors.model = "Model cannot be null";
    }
    if (!values.year) {
      errors.year = "Year cannot be null";
    }
    if (!values.mileage) {
      errors.mileage = "Mileage cannot be null";
    }
    if (!values.engine) {
      errors.engine = "Engine type cannot be null";
    }
    if (!values.description) {
      errors.description = "Description cannot be null";
    }
    if (!values.price) {
      errors.price = "Price cannot be null";
    }
    if (!values.transmission) {
      errors.transmission = "Select a Transmission";
    }
    if (!values.fueltype) {
      errors.fueltype = "Select a Fuel Type";
    }
    if (!values.condition) {
      errors.condition = "Select a Condition";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <div
        className="container-fluid p-4"
        style={{ backgroundColor: "#ececec" }}
      >
        <div className="container px-5" style={{ backgroundColor: "#ffffff" }}>
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="row justify-content-md-center">
              <h5 className="pt-5">Fill in the details</h5>
              <hr className="mt-3 mb-4" />
              <div className="col-lg-9">
                <h6 className="px-3 ">Condition</h6>

                <div className="form-check form-check-inline mt-2 mb-2 mx-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="condition"
                    value="new"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="form-check-label">New</label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="condition"
                    value="used"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="form-check-label">Used</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="condition"
                    value="recondition"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="form-check-label">Recondition</label>
                </div>
                {formik.touched.condition && formik.errors.condition ? (
                  <div className="small text-danger mx-3">
                    {formik.errors.condition}
                  </div>
                ) : null}

                <div className="form-group m-3">
                  <label className="mb-2">Brand</label>
                  <input
                    type="text"
                    placeholder="Enter Brand"
                    name="brand"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-control"
                  />
                  {formik.touched.brand && formik.errors.brand ? (
                    <div className="small text-danger">
                      {formik.errors.brand}
                    </div>
                  ) : null}
                </div>
                <div className="form-group m-3">
                  <label className="mb-2 mt-2">Model</label>
                  <input
                    type="text"
                    placeholder="Enter Model"
                    name="model"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-control"
                  />
                  {formik.touched.model && formik.errors.model ? (
                    <div className="small text-danger">
                      {formik.errors.model}
                    </div>
                  ) : null}
                </div>
                <div className="row m-0 ">
                  <div className="col-md-4">
                    <label className="mb-1 mt-1">Fuel Type</label>
                    <select
                      className="form-select mt-2"
                      aria-label="Default select example"
                      name="fueltype"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Fuel Type</option>
                      <option value="petrol">Petrol</option>
                      <option value="diesel">Diesel</option>
                      <option value="electric">Electric</option>
                    </select>
                    {formik.touched.fueltype && formik.errors.fueltype ? (
                      <div className="small text-danger">
                        {formik.errors.fueltype}
                      </div>
                    ) : null}
                  </div>
                  <div className="col-md-4">
                    <label className="mb-1 mt-1">Transmission</label>
                    <select
                      className="form-select mt-2"
                      aria-label="Default select example"
                      name="transmission"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Transmission</option>
                      <option value="automatic">Automatic</option>
                      <option value="manual">Manual</option>
                      <option value="triptronic">Triptronic</option>
                    </select>
                    {formik.touched.transmission &&
                    formik.errors.transmission ? (
                      <div className="small text-danger">
                        {formik.errors.transmission}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group m-3">
                      <label className="mb-2 mt-2">Year Of Manufacture</label>
                      <input
                        type="number"
                        placeholder="Enter Year"
                        name="year"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.year && formik.errors.year ? (
                        <div className="small text-danger">
                          {formik.errors.year}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group m-3">
                      <label className="mb-2 mt-2">Mileage (km)</label>
                      <input
                        type="number"
                        placeholder="Enter Mileage"
                        name="mileage"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.mileage && formik.errors.mileage ? (
                        <div className="small text-danger">
                          {formik.errors.mileage}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="form-group m-3">
                  <label className="mb-2 mt-2">Engine</label>
                  <input
                    type="text"
                    placeholder="Enter Engine Type"
                    name="engine"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-control"
                  />
                  {formik.touched.engine && formik.errors.engine ? (
                    <div className="small text-danger">
                      {formik.errors.engine}
                    </div>
                  ) : null}
                </div>
                <div className="m-3 mt-4">
                  <div className="form-group ">
                    <label className="mb-2 mt-2">Description</label>
                    <textarea
                      name="description"
                      cols="30"
                      rows="5"
                      className="form-control"
                      placeholder="Describe the main features of your vehicle"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></textarea>
                    {formik.touched.description && formik.errors.description ? (
                      <div className="small text-danger">
                        {formik.errors.description}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="row mx-0">
                  <div className="col-sm-6 mb-4">
                    <div className="form-group ">
                      <label className="mb-2 mt-2">Price</label>
                      <input
                        type="number"
                        name="price"
                        placeholder="Enter Price to Sell"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.price && formik.errors.price ? (
                        <div className="small text-danger">
                          {formik.errors.price}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <div className="form-group">
                      <label className="mb-2 mt-2">Add Images</label>
                      <input type="file" name="img" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-4" />
              <div className="col-md-9">
                <h5 className="pt-4 pb-3">Contact Details</h5>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="text-muted pt-2 pb-1">Name : </label>
                      <p>Ahmed</p>
                    </div>
                    <div className="col-sm-6">
                      <label className="text-muted pt-2 pb-1">E-mail : </label>
                      <p>ahmedanwer0094@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="container pb-5">
                  <div className="row align-items-center mt-4">
                    <div className="col-sm-3">
                      <div className="form-group ">
                        <label className="">Phone Number</label>
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="form-group ">
                        <input
                          type="number"
                          name="phone"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="form-control"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-sm-2 my-1">
                      <button type="submit" className="btn btn-secondary px-4">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark mx-2 "
                  style={{
                    padding: "6px 100px",
                    fontSize: "19px",
                    marginBottom: "6rem",
                  }}
                >
                  Post Add
                </button>
              </div>
            </div>
          </form>
          {message ? (
            <div
              className="row justify-content-md-center"
              style={{ paddingBottom: "5rem" }}
            >
              <div className="alert alert-primary col-lg-9">
                {message} - Click here to see <Link to="/cars">Vehicle</Link>
              </div>
            </div>
          ) : (
            <div style={{ marginBottom: "8rem" }}></div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
