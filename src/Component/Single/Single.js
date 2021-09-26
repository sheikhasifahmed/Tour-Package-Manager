import React from "react";
import "./Single.css";

const Single = (props) => {
  const pkg = props.singlePack;
  const { name, type, image, Timing, expense, transport, rating } = pkg;
  const addPackage = props.addPackage;
  const icon = <i className="fas fa-plane-departure"></i>;
  const star = <i className="fas fa-star"></i>;
  return (
    <div className="single-card">
      <div>
        <img src={image} className="pic" alt="" />
      </div>
      <div className="card-text">
        <h1>{name}</h1>
        <h3>{type}</h3>
        <h3>Visiting Hours: {Timing}</h3>
        <h3>Transport: {transport}</h3>

        <h3 className="exp">Expense: ${expense}</h3>
      </div>
      <div className="flex-foot">
        <h3 className="rating">
          {rating} {star}
        </h3>
        <button
          className="btn"
          onClick={() => {
            addPackage(pkg);
          }}
        >
          {icon} Add Package
        </button>
      </div>
    </div>
  );
};

export default Single;
