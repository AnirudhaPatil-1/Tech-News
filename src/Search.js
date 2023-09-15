import React from "react";

import { useGlobalContext } from "./context";

const Search = () => {
  const {Search, query,} = useGlobalContext();
  // const data = useGlobalContext();
  return (
    <>
      <h1>Tech News On The Go</h1>
      <form onSubmit={(e) => e.preventDefault() }>
        <div className="search-container">
          <input className="search-input"
            type="text" 
            placeholder="Search here"
            value={query}
            onChange = {(e) => Search(e.target.value) } 
          />
        </div>
      </form>
    </>
  );
};

export default Search;
