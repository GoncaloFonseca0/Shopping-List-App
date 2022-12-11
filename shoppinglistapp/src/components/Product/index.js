import useAPI from "../../hook/useAPI";
import button from "../button";
const Product = ({
  handleOnclick,

  imgSrc,
  name,
  description,
  calories,
  id,
}) => {
  const saveUserData = () => {
    alert("Click Happened");
  };
  return (
    <div className={id}>
      <img alt="product img" src={imgSrc}></img>
      <p>{name}</p>
      <p>{description}</p>
      <button onMouseOver={handleOnclick} onClick={saveUserData}>
        click me
      </button>
    </div>
  );
};

export default Product;
