import React from "react";
import { PRODUCTS } from "../../Products";
import NewProducts from "./NewProducts";
import "./shop.css";
const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>CND SHOP</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <NewProducts data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
