import React, { useEffect } from 'react'

function Filter({ activegenre, setactivegenre }) {
  return (
    <div>
      <button
        className={
          activegenre === 0
            ? "btn btn-sm btn-dark my-2 mx-2"
            : "btn btn-outline-dark btn-sm my-2  mx-2"
        }
        onClick={() => setactivegenre(0)}
      >
        ALL
      </button>
      <button
        className={
          activegenre === 28
            ? "btn btn-sm btn-dark my-2 mx-2"
            : "btn btn-outline-dark btn-sm my-2 mx-2"
        }
        onClick={() => setactivegenre(28)}
      >
        Action
      </button>
      <button
        className={
          activegenre === 35
            ? "btn btn-sm btn-dark my-2 mx-2"
            : "btn btn-outline-dark btn-sm my-2 mx-2"
        }
        onClick={() => setactivegenre(35)}
      >
        Comedy
      </button>
    </div>
  );
}

export default Filter