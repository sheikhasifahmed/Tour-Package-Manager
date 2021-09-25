import React from "react";
import Single from "../Single/Single";
import "./AllPack.css";
const AllPack = (props) => {
  const pack = props.pack;

  return (
    <div className="grid">
      {pack.map((p) => (
        <Single singlePack={p}></Single>
      ))}
    </div>
  );
};

export default AllPack;
