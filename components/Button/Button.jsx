import styles from "./button.module.css";

// const Button = ({ isDanger }) => {
//   return (
//     <button
//       onClick={() => {
//         console.log("xxxxx");
//       }}
//       className={`${styles.button} ${isDanger && styles.isDanger}`}
//     >
//       Button
//     </button>
//   );
// };
const Button = ({ type, onButtonClick }) => {
  return (
    <button
      onClick={onButtonClick}
      className={`${styles.button} 
      ${type === "DANGER" && styles.isDanger} 
      ${type === "SUCCESS" && styles.success}`}
    >
      Button
    </button>
  );
};

export default Button;
