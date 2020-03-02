import React from 'react';
import './WordInput.css';

const WordInput = ({ value, onChange, label }) => {
    return (
        <div className="word-input">
            <span>{label}</span>
            <input value={value} onChange={onChange} />
        </div>
    )
};

export default WordInput;
