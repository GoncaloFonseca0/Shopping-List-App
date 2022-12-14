import { useState } from "react";

const Button = ({ add, remove }) => {
  return (
    <div>
      <button onClick={add}>+</button>
      <button onClick={remove}>-</button>
    </div>
  );
};

export default Button;
