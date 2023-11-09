import { useState, useEffect } from "react";
import Product from "../components/Fragments/Product";
import { getProduct } from "../services/product.service";
import Navbar from "../components/Fragments/Navbar";
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center">
        {products.length > 0 &&
          products.map((product) => (
            <Product key={product.id}>
              <Product.Header image={product.image} name={product.title} />
              <Product.Body desc={product.description}></Product.Body>
              <Product.Footer />
            </Product>
          ))}
      </div>
    </>
  );
};

export default ProductPage;
