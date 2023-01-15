import Product from "../Product";
import Cart from "../Cart";
import Header from "../Header";
import { useState } from "react";

function App() {
  const [caloriesTotal, setCaloriestotal] = useState(0);

  return (
    <div className="App">
      <Header />
      <Product
        currCalories={caloriesTotal}
        updateCalories={setCaloriestotal}
      ></Product>
      <Cart currCalories={caloriesTotal} />
    </div>
  );
}

export default App;
