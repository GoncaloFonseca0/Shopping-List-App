import "./index.scss";

const budget = 200;

const Cart = ({ currPrice }) => {
  const budgetPrice = budget - currPrice;

  return (
    <div className="cart">
      <span> Budget: {budget}€</span>
      <br></br>
      <span>Current Total: {+currPrice}€</span>
      <br></br>
      <span>Current Value: {budgetPrice}€</span>
    </div>
  );
};

export default Cart;
