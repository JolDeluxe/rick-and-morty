import React from "react";

const Pagination = ({ info, page, setPage }) => {
  const handlePrev = () => {
    if (info.prev) setPage(page - 1);
  };

  const handleNext = () => {
    if (info.next) setPage(page + 1);
  };

  return (
    <div className="pagination" style={{ margin: "15px 0" }}>
      <button
        onClick={handlePrev}
        disabled={!info.prev}
        className="btn-search"
        style={{ marginRight: "10px" }}
      >
        ⬅️ Anterior
      </button>
      <span style={{ fontWeight: "bold" }}>Página {page}</span>
      <button
        onClick={handleNext}
        disabled={!info.next}
        className="btn-search"
        style={{ marginLeft: "10px" }}
      >
        Siguiente ➡️
      </button>
    </div>
  );
};

export default Pagination;
