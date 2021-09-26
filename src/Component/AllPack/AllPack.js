import React from "react";
import Single from "../Single/Single";
import "./AllPack.css";
const AllPack = (props) => {
  const { pack, addPackage } = props;

  return (
    <div className="grid">
      {pack.map((p) => (
        <Single key={p.id} singlePack={p} addPackage={addPackage}></Single>
      ))}
    </div>
  );
};

export default AllPack;
