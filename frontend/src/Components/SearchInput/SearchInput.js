import React from 'react';
import './SearchInput.css';

const SearchInput = ({ value, onChange }) =>
        <input
            placeholder="Search for a word"
            value={value}
            onChange={onChange}
        />;

export default SearchInput;
