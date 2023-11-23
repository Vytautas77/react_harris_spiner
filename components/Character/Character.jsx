import Image from "next/image";
import styles from "./character.module.css";
const Character = ({ name, imgUrl, removeCard, id }) => {
  const onPictureClick = () => {
    removeCard(id);
  };
  return (
    <div onClick={onPictureClick}>
      <div>{name}</div>
      {imgUrl ? (
        <>
          <Image
            className={styles.image}
            src={imgUrl}
            width={300}
            height={300}
            alt="character photos"
            loading="eager"
          />
        </>
      ) : (
        <>
          <div
            style={{
              width: "250px",
              height: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2rem",
              border: "1px solid black",
              borderRadius: "0.5rem",
            }}
          >
            No photo
          </div>
        </>
      )}
    </div>
  );
};

export default Character;
