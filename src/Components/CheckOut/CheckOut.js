import React from "react";
import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
  const data = useLoaderData();
  const {img,name,id,details} = data[0]
  return (
    <div className="container">
      <div className="card mb-3 mt-5 text-black-50 fs-4" >
        <div className="row g-0">
          <div className="col-12 col-md-4">
            <img src={img} className="img-fluid h-100 rounded-start" alt="" />
          </div>
          <div className="col-12 col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
               {details}
              </p>
              <p className="card-text">
                <small className="text-muted">ID : {id}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
