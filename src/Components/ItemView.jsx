import React, { useState } from "react";
import SideBar from "./SideBar";
import SideBar2 from "./Sidebar2";
import { Link } from "react-router-dom";
import "../css/ItemView.css";
import cart from "../Assets/addcart.svg";
import stars from "../Assets/Special.png";
import { useLocation } from "react-router-dom";

function ItemView() {
  const location = useLocation();
  const { item } = location.state;
  const [clickedItem, setClickedItem] = useState(null);

  const handleClick = () => {
    setClickedItem(item);
  };

  return (
    <>
      <SideBar />
      <Link to="/" className="back-link">
        &lt;&nbsp;&nbsp;Back
      </Link>
      <div className="product-list">
        {/* Render item details */}
        <div className="product" key={item.id}>
          {/* Render images */}
          <div className="Container">
            <div className="smallImg">
              {/* Render small images */}
              <img className="smallImage" src={item.imageUrl} alt={item.title} />
              <img className="smallImage" src={item.imageUrl} alt={item.title} />
              <img className="smallImage" src={item.imageUrl} alt={item.title} />
            </div>
            <div className="bigImg">
              {/* Render big image */}
              <img className="bigImage" src={item.imageUrl} alt={item.title} />
            </div>
          </div>
          <div className="product-details">
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <img className="stars" src={stars} alt="" />
            <p>
              {item.currency}
              {item.price}
            </p>
            <p>{item.detailedDescription[0]}</p>
          </div>
        </div>
      </div>
      <div className="button2" onClick={handleClick}>
        <img src={cart} alt="Logo" />
        <span>Add Bag</span>
      </div>
      <br />
      <br />
      <hr id="HR"></hr><br></br>
      <div className="paragraph">
        <h1>Description</h1>
        <p>{item.detailedDescription[1]}</p>
        {/* second part of detailed */}
      </div>
      <SideBar2 selectedItem={clickedItem} />
    </>
  );
}

export default ItemView;
