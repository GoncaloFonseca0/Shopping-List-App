import useAPI from "../../hook/useAPI";
import Button from "../Button";
import { useState } from "react";
import "./index.scss";

const Product = ({ add, remove }) => {
  const { apiData } = useAPI();

  return (
    <div className="products-title">
      {apiData.map((product) => (
        <div className="Products">
          <img alt="product img" src={product.imgSrc}></img>
          <h1 className="name">{product.name}</h1>
          <p>{product.description}</p>
          <p>Calories: {product.calories}</p>
          <p> </p>
          <Button add={add} remove={remove}></Button>
        </div>
      ))}
    </div>
  );
};

export default Product;
