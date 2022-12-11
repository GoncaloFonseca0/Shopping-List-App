import useAPI from "../../hook/useAPI";

const Product = ({
  handleOnclick,
  imgSrc,
  name,
  description,
  calories,
  id,
}) => {
  return (
    <div className={id}>
      <img alt="product img" src={imgSrc}></img>
      <p>{name}</p>
      <p>{description}</p>
      <button onMouseOver={handleOnclick}>click me</button>
    </div>
  );
};

export default Product;
