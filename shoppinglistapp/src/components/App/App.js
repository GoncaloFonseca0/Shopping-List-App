import Product from "../Product";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";

function App() {
  const [addProduct, setAddProduct] = useState(0);
  const handleAddProduct = () => {
    setAddProduct(addProduct + 1);
    console.log(addProduct);
  };

  const [removeProduct, setRemoveProduct] = useState(1);
  const handleRemoveProduct = () => {
    setRemoveProduct(removeProduct - 1);
    console.log(removeProduct);

    let productsquantity = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
    ];
  };

  return (
    <div className="App">
      <Header></Header>
      <Product add={handleAddProduct} remove={handleRemoveProduct}></Product>
      <Footer></Footer>
    </div>
  );
}

export default App;
