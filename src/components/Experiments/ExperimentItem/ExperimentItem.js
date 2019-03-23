import React from "react";
import "./ExperimentItem.css";

const ExperimentItem = props => {
  return (
    <div className="card_ card--transform">
      <img class="card__img" src={props.img} alt="card" />
      <img class="card__img" src={props.img} alt="card" />
      <img class="card__img" src={props.img} alt="card" />
      <img class="card__img" src={props.img} alt="card" />
    </div>
  );
};

export default ExperimentItem;
