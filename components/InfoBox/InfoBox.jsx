import styles from "./infoBox.module.css";

export const InfoBox = ({ onButtonClick, type }) => {
  const onClickInfoBox = (onButtonClick) => {
    console.log("InfoBox");
  };
  return (
    <div
      onClick={onButtonClick}
      className={`${styles.infoBox} 
      ${type === "RED" && styles.red}
      ${type === "GREEN" && styles.green}`}
    >
      InfoBox
    </div>
  );
};

export const InfoBox1 = ({ onInfoBoxClick1 }) => {
  return (
    <div
      onClick={onInfoBoxClick1}
      className={`${styles.infoBox} 
      ${styles.box1}`}
    >
      InfoBox1
    </div>
  );
};
export const InfoBox2 = ({ onInfoBoxClick1 }) => {
  return (
    <div
      onClick={onInfoBoxClick1}
      className={`${styles.infoBox} 
      ${styles.box1}`}
    >
      Type17
    </div>
  );
};
