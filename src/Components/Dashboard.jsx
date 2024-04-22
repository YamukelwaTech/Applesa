import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import SideBar2 from "./Sidebar2";
import "../css/Dashboard.css";
import products from "./ProductInfo";
import bagadd from "../Assets/Bag add.svg";

function DashBoard() {
  const [clickedItem, setClickedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleClick = (id, imageUrl) => {
    const logMessage = `Clicked on item with ID: ${id}, Image URL: ${imageUrl}`;
    console.log(logMessage);
    setClickedItem({ id, imageUrl });
  };

  const handleImageClick = (id) => {
    const clickedItem = products.find((item) => item.id === id);
    if (clickedItem) {
      navigate(`/item/${clickedItem.id}`, { state: { item: clickedItem } });
    } else {
      console.error(`Item with ID ${id} not found.`);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderFixedRow = (rowProducts) => {
    const fixedNumberOfCards = 4;
    const emptyCard = { empty: true };

    const rowItems = Array.from({ length: fixedNumberOfCards }, (_, index) => {
      const product = rowProducts[index];
      return product ? product : emptyCard;
    });

    return rowItems.map((item, index) => {
      if (item.empty) return null;
      return (
        <div key={index} className="item-card">
          <div
            className="product-image"
            onClick={() => handleImageClick(item.id)} 
          >
            <img src={item.imageUrl} alt={item.title} className="product-img" />
          </div>
          <div className="content">
            <div className="item-name">{item.title}</div>
            <div className="small-description">{item.description}</div>
            <div className="action">
              <div className="price">
                {item.currency}
                {item.price}
              </div>
              <div
                className="view"
                onClick={() => handleClick(item.id, item.imageUrl)}
              >
                <img src={bagadd} alt="Add to Bag" className="bag-icon" />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <SideBar />
      <div className="content-frame">
        <div className="top-bar">
          <div className="input">
            <div className="label">Search Item</div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
                className="placeholder"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="content-area">
          <div className="content-row">
            {renderFixedRow(filteredProducts.slice(0, 4))}
          </div>
          <div className="content-row">
            {renderFixedRow(filteredProducts.slice(4, 8))}
          </div>
        </div>
      </div>
      <SideBar2 selectedItem={clickedItem} />
    </>
  );
}

export default DashBoard;
