import React from "react";

const SearchBar = ({ search, setSearch, setPage }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className="search-bar" style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="🔍 Buscar personaje por nombre..."
        value={search}
        onChange={handleChange}
        style={{
          padding: "10px",
          width: "60%",
          maxWidth: "400px",
          border: "2px solid #1ba94c",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      />
    </div>
  );
};

export default SearchBar;
