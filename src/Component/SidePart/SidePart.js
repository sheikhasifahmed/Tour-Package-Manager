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
      <h2 className="side-head">Total Cost: ${total}</h2>
      <h3>Total spot: {selected.length}</h3>
      <div className="added-items">
        {selected.map((p) => (
          <Item pcz={p} key={p.id}></Item>
        ))}
      </div>
    </div>
  );
};

function Item(props) {
  const { name, image } = props.pcz;

  return (
    <div className="item">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default SidePart;
