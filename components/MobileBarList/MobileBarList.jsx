import styles from "./mobileBarList.module.css";

const MobileBarList = ({ isBurgerMenuList, isActive }) => {
  return (
    <>
      {isBurgerMenuList && (
        <div
          className={`${styles.menuBurgerList} ${isActive && styles.active}`}
        >
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

export default MobileBarList;

{
}
