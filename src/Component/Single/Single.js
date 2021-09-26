import React from "react";
import "./Single.css";

const Single = (props) => {
  const pkg = props.singlePack;
  const { name, type, image, Timing, expense, transport, rating } = pkg;
  const addPackage = props.addPackage;
  const icon = <i class="fas fa-plane-departure"></i>;
  return (
    <div className="single-card">
      <div>
        <img src={image} className="pic" alt="" />
      </div>
      <div>
        <h3>{name}</h3>
        <h3>Spot type: {type}</h3>
        <h3>Visiting Hours: {Timing}</h3>
        <h3>Transport povided: {transport}</h3>
        <h3>Spot Rating: {rating}</h3>
        <h3>Per Head Cost: ${expense}</h3>
      </div>
      <button
        className="btn"
        onClick={() => {
          addPackage(pkg);
        }}
      >
        {icon} Add Package
      </button>
    </div>
  );
};

export default Single;
