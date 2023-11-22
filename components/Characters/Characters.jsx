import styles from "./characters.module.css";
import Character from "../Character/Character";

const Characters = ({ characters }) => {
  return (
    <div className={styles.wrapper}>
      <>
        {characters.map((character) => (
          <div key={character.id}>
            <Character name={character.name} imgUrl={character.image} />
          </div>
        ))}
      </>
    </div>
  );
};

export default Characters;
