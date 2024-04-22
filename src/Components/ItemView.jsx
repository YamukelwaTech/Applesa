import React from "react";
import SideBar from "./SideBar";
import SideBar2 from "./Sidebar2";
import "../css/ItemView.css";
import bag from "../Assets/Name=bag-add.svg";
import stars from "../Assets/Special.png";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom

function ItemView() {
  // Access location state to get the item data passed from Dashboard component
  const location = useLocation();
  const { item } = location.state;

  return (
    <>
      <SideBar />
      <div className="product-list">
        {/* Render item details */}
        <div className="product" key={item.id}>
          <div className="Container">
            <div className="smallImg">
              {/* Render small images */}
              <img
                className="smallImage"
                src={item.imageUrl}
                alt={item.title}
              />
              <img
                className="smallImage"
                src={item.imageUrl}
                alt={item.title}
              />
              <img
                className="smallImage"
                src={item.imageUrl}
                alt={item.title}
              />
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
      <div className="button2">
        <button>
          <img src={bag} alt="Logo" />
        </button>
      </div>
      <br></br>
      <br></br>
      <hr></hr>
      <div className="paragraph">
        <h1>Description</h1>
        <p>{item.detailedDescription[1]}</p>
        {/* second part of detailed  */}
      </div>
      <SideBar2 />
    </>
  );
}

export default ItemView;
