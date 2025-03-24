import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchparams] = useSearchParams(); // Removed setSearchParams since it's not used

  useEffect(() => {
    console.log("API URL:", import.meta.env.VITE_API_URL);

    fetch(`${import.meta.env.VITE_API_URL}/products?${searchparams.toString()}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, [searchparams]);

  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} /> // ✅ Added key prop
            ))
          ) : (
            <p>No products found.</p> // ✅ Added fallback UI when no products are found
          )}
        </div>
      </section>
    </Fragment>
  );
}
