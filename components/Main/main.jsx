import React from "react";
import styles from "./main.module.css";
import { InfoBox, InfoBox1, InfoBox2 } from "../InfoBox/InfoBox";

const main = () => {
  return (
    <main className={styles.wrapper}>
      <InfoBox
        onButtonClick={() => {
          console.log("Button");
        }}
      />
      <InfoBox type="RED" />

      <InfoBox1
        onInfoBoxClick1={() => {
          console.log("Info Box 1");
        }}
      />
      <InfoBox2
        onInfoBoxClick1={() => {
          alert("Type17");
        }}
      />
    </main>
  );
};

export default main;
