import React from 'react'

function Pagebtn({ nextpage, prevpage }) {
  return (
    <div className="d-flex justify-content-between my-3">
      <button
        className="btn btn-sm btn-outline-dark"
        style={{ width: "75px" }}
        onClick={prevpage}
      >
        Previous
      </button>
      <button
        className="btn btn-sm btn-outline-dark"
        style={{ width: "75px" }}
        onClick={nextpage}
      >
        Next
      </button>
    </div>
  );
}

export default Pagebtn 