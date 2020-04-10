import React from 'react';
import './searchBox.css';

const SearchBox = ({handleSearch, placeholder}) => {
    return (
        <input type="search" className="search" placeholder={placeholder} onChange={e => handleSearch(e.target.value)}/>
    );
};

export default SearchBox;
