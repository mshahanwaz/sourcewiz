import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import ProductCard from "./ProductCard";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      await axios
        .get("/data.json")
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err.message));
    };
    fetchProduct();
  }, []);

  return (
    <div className="app">
      {products?.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
}

export default App;
