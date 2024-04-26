import React, { useState } from "react"; // Import React and useState hook
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import "../css/SideBar.css"; // Import CSS file for SideBar styling
import logo from "../Assets/Logo.svg"; // Import logo image
import menu from "../Assets/Menu.svg"; // Import menu icon image
import closeMenu from "../Assets/CloseMenu.svg"; // Import close menu icon image
import home from "../Assets/Home.svg"; // Import home icon image
import closeHome from "../Assets/CloseHome.svg"; // Import close home icon image
import bag from "../Assets/Bag.svg"; // Import bag icon image
import closeBag from "../Assets/CloseBag.svg"; // Import close bag icon image
import navlink from "../Assets/NavLink.svg"; // Import navlink icon image
import closeNavLink from "../Assets/CloseNavLink.svg"; // Import close navlink icon image

const SideBar = () => {
  // State variable to track whether the menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle click on the menu icon
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  // Render the SideBar component
  return (
    <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
      {/* Top navigation links */}
      <div className={`nav-links-top ${isMenuOpen ? "open" : ""}`}>
        <div className="logo">
          <img src={isMenuOpen ? closeMenu : menu} alt="Logo" />{" "} {/* Logo */}
        </div>
        <div className="menu-icon" onClick={handleMenuClick}>
          <div className="menu">
            <img src={isMenuOpen ? closeMenu : menu} alt="Menu Icon" />{" "} {/* Menu icon */}
          </div>
        </div>
        <div className="home">
          <Link to="/">
            <img src={isMenuOpen ? closeHome : home} alt="Home Icon" />{" "} {/* Home icon */}
          </Link>
        </div>
        <div className="Bag">
          <Link to="/bag">
            <img src={isMenuOpen ? closeBag : bag} alt="Bag Icon" />{" "} {/* Bag icon */}
          </Link>
        </div>
      </div>
      {/* Bottom navigation link */}
      <div className="nav-link-bottom">
        <Link to="/">
          <img src={isMenuOpen ? closeNavLink : navlink} alt="Nav link Icon" />{" "} {/* Nav link icon */}
        </Link>
      </div>
    </div>
  );
};

export default SideBar; // Export SideBar component
