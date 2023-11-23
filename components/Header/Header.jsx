import { useState } from "react";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import styles from "./header.module.css";
import DesktopNabBar from "../DesktopNabBar/DesktopNabBar";
import MobilNavBar from "../MobilNavBar/MobilNavBar";
const Header = () => {
  return (
    <>
      <header className={styles.wrapper}>
        <HeaderLogo />
        <DesktopNabBar />
        <MobilNavBar />
      </header>
    </>
  );
};

export default Header;
