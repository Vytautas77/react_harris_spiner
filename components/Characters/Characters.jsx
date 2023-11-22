import styles from "./characters.module.css";
import Character from "../Character/Character";

const Characters = ({ characters, setCharacters }) => {
  const removeCard = (id) => {
    const filteredCharacters = characters.filter((character) => {
      return character.id !== id;
    });

    setCharacters(filteredCharacters);
  };

  return (
    <div className={styles.wrapper}>
      <>
        {characters.map((character) => (
          <div key={character.id}>
            <Character
              id={character.id}
              name={character.name}
              imgUrl={character.image}
              removeCard={removeCard}
            />
          </div>
        ))}
      </>
    </div>
  );
};

export default Characters;
