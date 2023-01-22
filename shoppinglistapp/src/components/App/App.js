import Product from "../Product";
import Cart from "../Cart";
import Header from "../Header";
import { useState } from "react";

function App() {
  const [priceTotal, setPriceTotal] = useState(0);

  return (
    <div className="App">
      <Header />
      <Product currPrice={priceTotal} updatePrice={setPriceTotal} />
      <Cart currPrice={priceTotal} />
    </div>
  );
}

export default App;
