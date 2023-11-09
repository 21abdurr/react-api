import { useEffect, useState } from "react";
import { getPreviewProduct } from "../services/product.service";
import Product from "../components/Fragments/Product";
import Navbar from "../components/Fragments/Navbar";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getPreviewProduct((data) => {
      setProducts(data);
    });
  });
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <div></div>
        <section className="w-full ">
          <div className="mt-5">
            <h2 className="text-center font-semibold text-3xl text-blue-500">
              Best Seller
            </h2>
          </div>
          <div className="flex justify-evenly flex-wrap mt-5 ">
            {products.length > 0 &&
              products.map((product) => (
                <Product key={product.id}>
                  <Product.Header image={product.image} name={product.title} />
                  <Product.Body desc={product.description}></Product.Body>
                  <Product.Footer />
                </Product>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
