import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";

const App = () => {
  const [characters, setCharacters] = useState(null);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const BASE_URL = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCharacters(data.results);
      setInfo(data.info);
    } catch (error) {
      console.error("Error al obtener personajes:", error);
      setCharacters(null);
    }
  };

  // 🔹 Carga inicial y actualizaciones
  useEffect(() => {
    let url = `${BASE_URL}?page=${page}`;
    if (search.trim() !== "") {
      url += `&name=${search}`;
    }
    fetchCharacters(url);
  }, [page, search]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>

        {!characters ? (
          <>
            <img src="/img/rick-morty.png" alt="RickMorty" className="img-home" />
            <button
              onClick={() => fetchCharacters(BASE_URL)}
              className="btn-search"
            >
              Buscar Personajes
            </button>
          </>
        ) : (
          <>
            <SearchBar search={search} setSearch={setSearch} setPage={setPage} />
            <Pagination info={info} page={page} setPage={setPage} />
            <Characters characters={characters} setCharacters={setCharacters} />
            <Pagination info={info} page={page} setPage={setPage} />
          </>
        )}
      </header>
    </div>
  );
};

export default App;
