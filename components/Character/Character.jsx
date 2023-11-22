import Image from "next/image";
import styles from "./character.module.css";
const Character = ({ name, imgUrl }) => {
  const onPictureClick = () => {
    console.log(name);
  };
  return (
    <div onClick={onPictureClick}>
      <div>{name}</div>
      {imgUrl ? (
        <>
          {" "}
          <Image
            className={styles.image}
            src={imgUrl}
            width={300}
            height={300}
            alt="character photos"
          />
        </>
      ) : (
        <>
          <div className={styles.imgPlaceHolder}>No photo</div>
        </>
      )}
    </div>
  );
};

export default Character;
