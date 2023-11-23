import { useState } from "react";
import styles from "./mobilNavBar.module.css";
import MobileBarList from "../MobileBarList/MobileBarList";
const MobilNavBar = () => {
  const [isBurgerMenuList, setBurgerMenuList] = useState(false);
  const onMenuBurgerClick = () => {
    setBurgerMenuList((prevState) => !prevState);
  };
  return (
    <>
      <div
        onClick={onMenuBurgerClick}
        // onMouseOverCapture={onMenuBurgerClick}
        className={styles.mobilBurger}
      >
        <svg viewBox="0 0 100 80" width="30" height="30" fill="#bf9d2e">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </div>
      <MobileBarList
        isBurgerMenuList={isBurgerMenuList}
        isActive={isBurgerMenuList}
      />
    </>
  );
};

export default MobilNavBar;
