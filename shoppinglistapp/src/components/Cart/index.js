import "./index.scss";

const budget = 2000;

const Cart = ({ currPrice }) => {
  const budgetPrice = budget - currPrice;

  return (
    <div className="cart">
      <div className="footer-info">
        <span> Budget: {budget}€</span>
        <br></br>
        <span>Current Total: {currPrice.toFixed(2)}€</span>
        <br></br>
        <span>Current Value: {budgetPrice.toFixed(2)}€</span>
        <br></br>
      </div>
    </div>
  );
};

export default Cart;
