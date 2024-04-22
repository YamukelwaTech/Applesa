import React, { useState, useEffect } from "react";
import "../css/SideBar2.css";
import cart from "../Assets/addcart.svg";

const SideBar2 = ({ selectedItem }) => {
  const [bagItems, setBagItems] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isEffectActive, setIsEffectActive] = useState(true);

  // Original effect to add items to bagItems
  useEffect(() => {
    if (selectedItem && isEffectActive) {
      setBagItems((prevBagItems) => {
        const newBagItem = {
          id: prevBagItems.length + 1,
          imageUrl: selectedItem.imageUrl,
        };
        return [...prevBagItems, newBagItem];
      });
    }
  }, [selectedItem, isEffectActive]);

  // Effect to increment counter
  useEffect(() => {
    if (selectedItem && isEffectActive) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  }, [selectedItem, isEffectActive]);

  // Effect to disable original effect after 9 runs
  useEffect(() => {
    if (counter === 9) {
      setIsEffectActive(false);
    }
  }, [counter]);

  // Group bag items into rows of three
  const rows = [];
  for (let i = 0; i < bagItems.length; i += 3) {
    rows.push(bagItems.slice(i, i + 3));
  }

  return (
    <div className="bag-area">
      <div className="title">
        <h3>bag</h3>
      </div>
      <div className="bag-items">
        {/* Render rows */}
        {rows.map((row, index) => (
          <div className="row" key={index}>
            {/* Render items in the row */}
            {row.map((item) => (
              <div className="bag-item" key={item.id}>
                <img src={item.imageUrl} alt="Bag item" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="button">
        <img src={cart} alt="Logo" />
        <span>View Bag</span>
      </div>
    </div>
  );
};

export default SideBar2;
