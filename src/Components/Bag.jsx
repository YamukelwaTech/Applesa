import React from "react";
import SideBar2 from "./Sidebar2";
import "../css/ShoppingCart.css";
import products from "./ProductInfo";
// import bagadd from "../Assets/Bag add.svg";
import SideBar from "./SideBar";
import plus from "../Assets/Increase-Button.svg"
import minus from "../Assets/Decrease-Button.svg"
import { useState } from "react";
 


function Bag() {
  const [quantity, setQuantity] = useState(1);

  // Function to handle incrementing the quantity
  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Function to handle decrementing the quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  return (
    <>
      <SideBar />
  <div className="shopping">
    <h1>Check your Bag Items</h1>
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
                    <p>{product.currency}{product.price}</p>
                    <div className="quantity">
                      <img id="incr" src={plus} alt="plus" onClick={incrementQuantity} />
                      <p>{quantity}</p>
                      <img id="decr" src={minus} alt="minus" onClick={decrementQuantity} />
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


// const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCartItems(cartItems.filter((item) => item.id !== productId));
//   };


// {" "}
//       <div className="shopping-bag">
//         <h1>Check your Bag Items</h1>
//         {cartItems.length === 0 ? (
//           <p className="empty-message">Your bag is empty.</p>
//         ) : (
//           <div className="cart-items">
//             {cartItems.map((item) => (
//               <div key={item.id} className="item-card">
//                 <div className="product-image">
//                   <img src={item.imageUrl} alt={item.title} />
//                 </div>
//                 <div className="product-details">
//                   <div className="title">{item.title}</div>
//                   <div className="price">${item.price}</div>
//                   <button onClick={() => removeFromCart(item.id)}>
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//         <div className="checkout">
//           <button disabled={cartItems.length === 0}>Checkout</button>
//         </div>
//       </div>