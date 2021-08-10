import React from "react";
import { useState } from "react";
import { ReactComponent as CloseMenu } from "./assets/icon-close-menu.svg";
import { ReactComponent as MenuIcon } from "./assets/icon-hamburger.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import OverlayMenu from "../overlay/OverlayMenu";
import "./Header.css";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            <Logo className="logo" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">About</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Discover</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Get Started</a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
        {click && <OverlayMenu />}
      </div>
    </header>
  );
}

export default Header;
