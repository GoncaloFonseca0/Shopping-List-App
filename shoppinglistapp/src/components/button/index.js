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
    <div className="product-button">
      <button className="primary-button " onClick={() => remove()}>
        -
      </button>
      <h3 className="product-quantity">{count}</h3>

      <button className="secundary-button" onClick={() => add()}>
        +
      </button>
    </div>
  );
};

export default Button;
