import { useState } from "react";
import burger from "../images/burger.png";
import logo from "../images/Harris.png";
import styles from "./header.module.css";
const Header = () => {
  const [burgerMenuList, setBurgerMenuList] = useState(false);
  const onMenuBurgerClick = () => {
    setBurgerMenuList(!burgerMenuList);
  };
  return (
    <>
      <header className={styles.wrapper}>
        <img className={styles.harry} src={logo.src} alt="Harry Potter logo" />
        <div>
          <div onClick={onMenuBurgerClick} className={styles.menuBurger}>
            <img src={burger.src} alt="Menu burger" />
          </div>
        </div>
      </header>
      {burgerMenuList && (
        <div className={styles.menuBurgerList}>
          <div className={styles.menuList}>
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
