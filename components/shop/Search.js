import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  return (
    <form>
      <div className="my-5 flex sm:justify-center w-full sm:w-[400px] h-[36px] sm:h-[50px] overflow-hidden rounded-lg border shadow sm:mx-auto">
        <input
          type="text"
          placeholder="Search by title"
          className="text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none border-none  text-gray-700 flex-1 bg-transparent px-3 sm:px-5 focus:shadow-none"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onSearch(e.target.value);
          }}
        />
        <button
          type="submit"
          className="h-full px-0 sm:px-5 rounded-none bg-primary text-white font-medium text-xs sm:text-sm"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
