import { useState } from "react";
import "./index.scss";

const Button = ({ currPrice, updatePrice, price }) => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
    updatePrice(currPrice + price);
  };

  const remove = () => {
    setCount(count - 1);
    updatePrice(currPrice - price);
  };
  return (
    <div>
      <h3>Quantity {count}</h3>
      <button onClick={() => remove()}>-</button>
      <button onClick={() => add()}>+</button>
    </div>
  );
};

export default Button;
