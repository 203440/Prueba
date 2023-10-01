import React from "react";

const SearchContext = React.createContext({
  searchQ: "",
  setSearchQ: () => {},
  currentPage: 1,
  setCurrentPage: () => {}
});

export default SearchContext;