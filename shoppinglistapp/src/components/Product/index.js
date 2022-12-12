import useAPI from "../../hook/useAPI";
import Button from "../Button";
import { useState } from "react";

const Product = ({ imgSrc, name, description, calories, id }) => {
  const { apiData } = useAPI();

  return (
    <div>
      {apiData.map((product) => (
        <div className="Products">
          <img alt="product img" src={product.imgSrc}></img>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.calories}</p>
          <Button></Button>
        </div>
      ))}
    </div>
  );
};

export default Product;
