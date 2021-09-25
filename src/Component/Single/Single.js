import React from "react";
import "./Single.css";

const Single = (props) => {
  const { name, type, image, Timing, expense, transport, rating } =
    props.singlePack;

  return (
    <div>
      <div>
        <img src={image} className="pic" alt="" />
      </div>
      <div>
        <h3>{name}</h3>
        <h3>{type}</h3>
        <h3>{Timing}</h3>
        <h3>{transport}</h3>
        <h3>{rating}</h3>
        <h3>{expense}</h3>
      </div>
    </div>
  );
};

export default Single;
