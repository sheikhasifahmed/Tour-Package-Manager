import React from "react";
import "./Sidepart.css";

const SidePart = (props) => {
  let selected = props.selected;
  let total = 0;
  for (let pcg of selected) {
    total = total + pcg.expense;
  }
  return (
    <div className="side">
      <h1>Total cost: ${total}</h1>
      <div>
        {selected.map((p) => (
          <h3>{p.name}</h3>
        ))}
      </div>
    </div>
  );
};

export default SidePart;
