import React, { useContext } from "react";
import { DataContext } from "../../context";

function SearchBar() {
  const { handleSearch } = useContext(DataContext);

  return (
    <>
      <div>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search Models..."
          className="search-bar px-6 py-3 w-96 rounded-[20px] bg-light-blue text-dark font-semibold text-base mb-14 border-none focus:outline-none"
        />
      </div>
    </>
  );
}

export default SearchBar;
