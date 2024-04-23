import React, { useState, useEffect } from "react";
import SideBar2 from "./Sidebar2";
import "../css/ShoppingCart.css";
import SideBar from "./SideBar";
import plus from "../Assets/Increase-Button.svg";
import minus from "../Assets/Decrease-Button.svg";

function Bag() {
  // Retrieve bag items and quantity from local storage
  const [bagItems, setBagItems] = useState(() => {
    const storedItems = localStorage.getItem("bagItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [quantity, setQuantity] = useState(() => {
    const storedQuantity = localStorage.getItem("quantity");
    return storedQuantity ? parseInt(storedQuantity) : 1;
  });

  // Function to handle incrementing the quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle decrementing the quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    // Update local storage when quantity changes
    localStorage.setItem("quantity", quantity.toString());
  }, [quantity]);

  return (
    <>
      <SideBar />
      <div className="shopping">
        <h1>Check your Bag Items</h1>
        <div className="cart-items">
          {bagItems.map((product) => (
            <div className="items-cards1" key={product.id}>
              <div className="products-containers">
                <div className="products-images">
                  <img src={product.imageUrl} alt={product.title} />
                </div>
                <div className="products-infos">
                  <h3>{product.title}</h3>
                  <p id="title">{product.description}</p>
                  <p id="disc">{product.shortDescription}</p>
                  <img src={product.rating} alt={product.title} />
                  <p>
                    {product.currency}
                    {product.price}
                  </p>
                  <div className="quantity">
                    <img
                      id="incr"
                      src={plus}
                      alt="plus"
                      onClick={decrementQuantity}
                    />
                    <p>{quantity}</p>
                    <img
                      id="decr"
                      src={minus}
                      alt="minus"
                      onClick={incrementQuantity}
                    />
                  </div>
                  {/* Add more product information here if needed */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SideBar2 />
    </>
  );
}

export default Bag;
