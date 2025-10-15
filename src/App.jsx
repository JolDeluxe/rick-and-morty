import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";

const App = () => {

  const [character, setCharacter] = useState(null);



  const reqApi = async () => {
    console.log("ClickButton");
    const api =  await fetch ('https://rickandmortyapi.com/api/character');

    const characterApi = await api.json();
    console.log(characterApi);

    setCharacter(characterApi.results);

  };
  return (
    <>
      <div className="App">
        <header className="App">
          <h1 className="title">Rick & Morty</h1>
          {
            character ? (
              <Characters characters={character} setCharacters={setCharacter}/>
            ):(
              <><div>
                <img src="/img/rick-morty.png" alt="RickMorty" className="img-home" />
              </div>
              <div>
                <button onClick={reqApi} className="btn-search">
                  Buscar Personajes
                </button>
              </div>                
              </>
            )
          }
        </header>
      </div>
    </>
  );
};

export default App;