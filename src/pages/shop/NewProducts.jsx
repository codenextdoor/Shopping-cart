import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const NewProducts = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemsAdded = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />

      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to cart
        {cartItemsAdded > 0 && <> ({cartItemsAdded}) </>}
      </button>
    </div>
  );
};

export default NewProducts;
