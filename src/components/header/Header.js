import React from "react";
import { useState } from "react";
import { ReactComponent as CloseMenu } from "./assets/icon-close-menu.svg";
import { ReactComponent as MenuIcon } from "./assets/icon-hamburger.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import OverlayMenu from "../overlay/OverlayMenu";
import classes from "./Header.module.css"

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header className={classes.header}>
      <div className={classes.logoNav}>
        <div className={classes.logoContainer}>
          <a href="#">
            <Logo className={classes.logo}/>
          </a>
        </div>
        <ul className={click ? `${classes.navOptions} ${classes.active}` : `${classes.navOptions}`}>


          <li className={classes.option} onClick={closeMobileMenu}>
            <a href="#">About</a>
          </li>
          <li className={classes.option}  onClick={closeMobileMenu}>
            <a href="#">Discover</a>
          </li>
          <li className={classes.option}  onClick={closeMobileMenu}>
            <a href="#">Get Started</a>
          </li>
        </ul>
      </div>
      <div className={classes.mobileMenu} onClick={handleClick}>
        {click ? (
          <CloseMenu className={classes.menuIcon} />
        ) : (
          <MenuIcon className={classes.menuIcon} />
        )}
        {click && <OverlayMenu />}
      </div>
    </header>
  );
}

export default Header;
