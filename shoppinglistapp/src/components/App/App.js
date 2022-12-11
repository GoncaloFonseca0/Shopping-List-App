import Product from "../Product";
import useAPI from "../../hook/useAPI";

function App() {
  const { apiData } = useAPI();
  return (
    <div className="App">
      {apiData.map((product) => (
        <Product
          key={Product.id}
          name={Product.name}
          description={Product.description}
          imgSrc={Product.imgSrc}
        ></Product>
      ))}
    </div>
  );
}

export default App;
