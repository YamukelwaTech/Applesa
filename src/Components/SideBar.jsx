import React, { useState } from "react";
import "../css/SideBar.css";
import logo from "../Assets/Logo.svg";
import menu from "../Assets/Menu.svg";
import closeMenu from "../Assets/CloseMenu.svg";
import home from "../Assets/Home.svg";
import closeHome from "../Assets/CloseHome.svg";
import bag from "../Assets/Bag.svg";
import closeBag from "../Assets/CloseBag.svg";
import navlink from "../Assets/NavLink.svg";
import closeNavLink from "../Assets/CloseNavLink.svg";

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className={`nav-links-top ${isMenuOpen ? "open" : ""}`}>
        <div className="logo">
          <img src={isMenuOpen ? logo : logo} alt="Logo" />{" "}
        </div>
        <div className="menu-icon" onClick={handleMenuClick}>
          <div className="menu">
            <img src={isMenuOpen ? closeMenu : menu} alt="Menu Icon" />{" "}
          </div>
        </div>
        <div className="home">
          <img src={isMenuOpen ? closeHome : home} alt="Home Icon" />{" "}
        </div>
        <div className="Bag">
          <img src={isMenuOpen ? closeBag : bag} alt="Bag Icon" />{" "}
        </div>
      </div>
      <div className="nav-link-bottom">
        <img src={isMenuOpen ? closeNavLink : navlink} alt="Nav link Icon" />{" "}
      </div>
    </div>
  );
};

export default SideBar;
