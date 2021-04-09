import React, { useState } from "react";
import hamburgerIcon from "../assets/images/hamburgermenu.svg";

const Header = (props) => {
  //variable to handle mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="header">
        <a href="/">
          <h1 className="headerTitle">The News</h1>
        </a>

        <img
          className="menuIcon collapse"
          alt="menu"
          src={hamburgerIcon}
          onClick={() => {
            //toggle mobile menu open/close state
            if (menuOpen) {
              document.getElementById("mobileMenuContainer").style.maxHeight =
                "0px";
              setMenuOpen(false);
            } else {
              document.getElementById("mobileMenuContainer").style.maxHeight =
                "100vh";
              setMenuOpen(true);
            }
          }}
        />
      </div>

      <div id="mobileMenuContainer">
        <div className="mobileMenu" id="mobileMenu">
          {props.categories.map((item, index) => (
            <span key={index}>
              <a href="/">{item}</a>
            </span>
          ))}
        </div>
      </div>

      <div className="navContainer">
        <nav className="navBar">
          {props.categories.map((item) => (
            <a href="/">
              <span>{item}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
