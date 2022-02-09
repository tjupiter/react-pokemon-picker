import React from 'react';

function Pagination({ nextPage, prevPage }) {
  return (
    <div>
        <button onClick={prevPage} disabled={!prevPage}>Previous</button>
        <button onClick={nextPage} disabled={!nextPage}>Next</button>
        {/* {prevPage && <button onClick={prevPage}>Previous</button>}
        {nextPage && <button onClick={nextPage}>Next</button>} */}
    </div>
    );
}

export default Pagination;
