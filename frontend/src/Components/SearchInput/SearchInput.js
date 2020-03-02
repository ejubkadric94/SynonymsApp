import React from 'react';
import './SearchInput.css';

const SearchInput = ({ value, onChange }) => (
    <div className="word-input">
        <span>Word:</span>
        <input value={value} onChange={onChange} />
    </div>
);

export default SearchInput;
