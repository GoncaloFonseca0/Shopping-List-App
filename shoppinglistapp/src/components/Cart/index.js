const budget = 2000;

const Cart = ({ currCalories }) => {
  const budgetCalories = budget - currCalories;

  return (
    <div>
      <span> Calories budget: {budget}</span>
      <br></br>

      <span>Current Total: {currCalories}</span>
      <br></br>
      <span>Current Value: {budgetCalories}</span>
    </div>
  );
};

export default Cart;