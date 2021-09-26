import React, { useEffect, useState } from "react";
import "./TourManager.css";
import AllPack from "../AllPack/AllPack";
import SidePart from "../SidePart/SidePart";

const TourManager = () => {
  const [pack, setPack] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setPack(data));
  }, []);

  const [selected, setSelected] = useState([]);
  function addPackage(pkg) {
    let temp = [...selected, pkg];
    setSelected(temp);
  }

  return (
    <div className="grid3">
      <AllPack pack={pack} addPackage={addPackage}></AllPack>
      <SidePart selected={selected}></SidePart>
    </div>
  );
};

export default TourManager;
