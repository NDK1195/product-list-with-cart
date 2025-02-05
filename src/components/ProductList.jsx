import { useEffect, useState } from "react";
import Product from "./Product";

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("../../data.json");
      const data = await response.json();

      setProductList(data);
    }
    getProducts();
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-rose-900-1 mb-8 text-[40px] leading-[120%] font-bold">
        Desserts
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-x-6 md:gap-y-8">
        {productList.map((product) => (
          <Product key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
export default ProductList;
