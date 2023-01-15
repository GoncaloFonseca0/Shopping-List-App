import { useState } from "react";
import "./index.scss";

const Button = ({ currCalories, updateCalories, calories }) => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
    updateCalories(currCalories + calories);
  };

  const remove = () => {
    setCount(count - 1);
    updateCalories(currCalories - calories);
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
