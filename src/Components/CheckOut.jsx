// import cards from "../Assets/card-svg.svg"
import blkcard from "../Assets/blk card.svg";
import blkgift from "../Assets/blk gift.svg";
import "../css/checkout.css";
import plus from "../Assets/Increase-Button.svg";
import minus from "../Assets/Decrease-Button.svg";
import { useState } from "react";
import products from "./ProductInfo";

function CheckOut() {
  const [quantity, setQuantity] = useState(1);

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
  return (
    <>
      <div className="containers">
        <div className="top-container">
          <h1>SHIPPING ADDRESS</h1>
          <p>John Maker</p>
          <p>123 Plae Grond Street</p>
          <p>Vermont, California</p>
          <p>United States of America</p>
          <div className="bttn">
            <button>Change</button>
          </div>
        </div>

        <div className="middle-container">
          <h1>PAYMENT METHOD</h1>
          <p>
            <img src={blkcard} alt="card"></img>MasterCard ending in 1252
          </p>
          <p>
            <img src={blkgift} alt="card"></img>$53.21 Gift card balance
          </p>
          <div className="checkbox">
            <input type="checkbox" id="myCheckbox" name="myCheckbox" />
            <label htmlFor="myCheckbox">
              Billing adress same as Shipping adress
            </label>
          </div>
          <div className="bttn">
            <button>Change</button>
          </div>
        </div>
        <div className="bottom-container">
          <h1>REVIEW YOUR BAG</h1>
          <div className="cart-items">
            {products.map((product) => (
              <div className="items-cards" key={product.id}>
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
                        onClick={incrementQuantity}
                      />
                      <p>{quantity}</p>
                      <img
                        id="decr"
                        src={minus}
                        alt="minus"
                        onClick={decrementQuantity}
                      />
                    </div>

                  </div>
                </div>
                <hr></hr>
              </div>
            ))}
          </div>
        </div>
        <div className="sub-total">
          <h1>Order Summary</h1>
          <div className="iitem">
            <p>Items:</p>
            <p>$$$</p>
          </div>
          <div className="iitem">
            <p>Shipping:</p>
            <p>$$$</p>
          </div>
          <div className="iitem">
            <p>Estimated GST:</p>
            <p>$$$</p>
          </div>
          <div className="iitem">
            <p>Gift card:</p>
            <p>$$$</p>
          </div>
          <hr></hr>
          <div className="iitem">
            <p id="red">Order total:</p>
            <p id="red">$$$</p>
          </div>
          <hr></hr>
          <button className="btn3">Place your order</button>
        </div>
        <div className="back-btn">
          <button className="btn4">Back</button>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
