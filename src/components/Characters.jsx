import React from "react";

const Characters = ({ characters, setCharacters }) => {
  const resetCharacters = () => {
    setCharacters(null);
  };

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>
        Volver al inicio
      </span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive"></span>Alive
                  </>
                ) : (
                  <>
                    <span className="dead"></span>Dead
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios: </span>
                {character.episode.length}
              </p>
              <p>
                <span className="text-grey">Especie: </span>
                {character.species}
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>
        Volver al inicio
      </span>
    </div>
  );
};

export default Characters;
