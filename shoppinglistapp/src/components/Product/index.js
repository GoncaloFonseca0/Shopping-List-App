import useAPI from "../../hook/useAPI";
import Button from "../Button";
import "./index.scss";

const Product = ({ currPrice, updatePrice }) => {
  const { apiData } = useAPI();

  return (
    <div className="products-title">
      {apiData.map((product) => (
        <div className="Products" key={product.id}>
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">{product.price}</p>
          <p className="product-description">{product.description}</p>
          <img
            className="product-img"
            alt={product.altText}
            src={product.image}
          />

          <Button
            currPrice={currPrice}
            updatePrice={updatePrice}
            price={product.price}
          ></Button>
        </div>
      ))}
    </div>
  );
};

export default Product;
