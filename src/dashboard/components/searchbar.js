import React from "react";
import "../style/searchbar.css"
import SearchIcon from '../svg/searchIcon';

export const SearchBar = () => {
    return (
        <div className="search-bar">
            {/* Search container */}
            <div className="search-container">
                {/* Search icon */}
                <SearchIcon />
                {/* Input field for search */}
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Search"
                />
            </div>
        </div>
    );
}