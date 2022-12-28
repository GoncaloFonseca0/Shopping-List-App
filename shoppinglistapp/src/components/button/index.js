import { useState } from "react";
import "./index.scss";

const Button = ({ add, remove }) => {
  return (
    <div>
      <button className="primary-button" onClick={add}>
        +
      </button>
      <span>0</span>
      <button className="secundary-button" onClick={remove}>
        -
      </button>
    </div>
  );
};

export default Button;
