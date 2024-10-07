import React from 'react';
import './Search.css';
import SearchIcon from '../../assets/icons/search.svg';

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="search-button" aria-label="Search">
        <img src={SearchIcon} alt="Search" className="icon-search" />
      </button>
    </div>
  );
};

export default Search;