import { useState } from "react";

const Button = () => {
  const saveUserData = () => {
    alert("Click Happened");
  };

  const [addProduct, setAddProduct] = useState(0);
  const handleAddProduct = () => {
    setAddProduct(addProduct + 1);
    console.log(addProduct);
  };
  const [removeProduct, setRemoveProduct] = useState(1);
  const handleRemoveProduct = () => {
    setRemoveProduct(removeProduct - 1);
    console.log(removeProduct);
  };
  return (
    <div>
      <button onClick={saveUserData}>click me</button>
      <button onClick={handleAddProduct}>+</button>
      <button onClick={handleRemoveProduct}>-</button>
    </div>
  );
};

export default Button;
