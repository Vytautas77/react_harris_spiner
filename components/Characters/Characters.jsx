const Characters = ({ characters }) => {
  return (
    <div>
      {characters ? (
        <>
          {characters.map((character) => (
            <div key={character.id}>{character.name}</div>
          ))}
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default Characters;
